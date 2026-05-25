#!/usr/bin/env node
const fs = require("fs");
const path = require("path");
const { spawnSync } = require("child_process");

const root = path.resolve(__dirname, "..");
const dataFile = path.resolve(root, process.env.DATA_FILE || process.argv[2] || path.join("data", "asean-hub.json"));
const outputFile = path.resolve(root, process.env.SQLITE_FILE || process.argv[3] || path.join("data", "asean-hub.sqlite"));
const sqlFile = `${outputFile}.sql`;

const state = JSON.parse(fs.readFileSync(dataFile, "utf8"));

const tables = {
  accounts: state.accounts || [],
  teachers: state.teachers || [],
  students: state.students || [],
  lessons: state.lessons || [],
  notifications: state.notifications || [],
  placement_templates: state.placementTemplates || [],
  placement_tests: state.placementTests || []
};

const lines = [
  "PRAGMA journal_mode = WAL;",
  "PRAGMA foreign_keys = ON;",
  "BEGIN;",
  "CREATE TABLE IF NOT EXISTS app_meta (key TEXT PRIMARY KEY, value TEXT NOT NULL, updated_at TEXT NOT NULL);",
  "CREATE TABLE IF NOT EXISTS records (collection TEXT NOT NULL, id TEXT NOT NULL, json TEXT NOT NULL, updated_at TEXT NOT NULL, PRIMARY KEY (collection, id));",
  "DELETE FROM app_meta;",
  "DELETE FROM records;",
  insertMeta("version", String(state.version || 1)),
  insertMeta("settings", JSON.stringify(state.settings || {})),
  insertMeta("callState", JSON.stringify(state.callState || {}))
];

for (const [collection, items] of Object.entries(tables)) {
  for (const item of items) {
    if (!item?.id) continue;
    lines.push(insertRecord(collection, item.id, JSON.stringify(item)));
  }
}

lines.push("COMMIT;");
fs.mkdirSync(path.dirname(outputFile), { recursive: true });
fs.writeFileSync(sqlFile, `${lines.join("\n")}\n`);

const sqlite = spawnSync("sqlite3", [outputFile], { input: fs.readFileSync(sqlFile), stdio: ["pipe", "inherit", "inherit"] });
if (sqlite.status === 0) {
  console.log(outputFile);
} else {
  console.log(sqlFile);
  console.error("sqlite3 command is not available or failed. SQL export was written for later import.");
  process.exitCode = 2;
}

function insertMeta(key, value) {
  return `INSERT INTO app_meta (key, value, updated_at) VALUES (${q(key)}, ${q(value)}, ${q(new Date().toISOString())});`;
}

function insertRecord(collection, id, json) {
  return `INSERT INTO records (collection, id, json, updated_at) VALUES (${q(collection)}, ${q(id)}, ${q(json)}, ${q(new Date().toISOString())});`;
}

function q(value) {
  return `'${String(value).replaceAll("'", "''")}'`;
}
