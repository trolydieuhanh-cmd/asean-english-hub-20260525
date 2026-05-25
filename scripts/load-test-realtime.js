#!/usr/bin/env node
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");
const { spawn } = require("child_process");

const root = path.resolve(__dirname, "..");
const teacherCount = Number(process.env.LOAD_TEST_TEACHERS || 100);
const studentCount = Number(process.env.LOAD_TEST_STUDENTS || 500);
const port = Number(process.env.LOAD_TEST_PORT || 4299);
const password = process.env.LOAD_TEST_PASSWORD || "LoadTest@2525";
const dataFile = path.join("/tmp", `asean-load-${Date.now()}.json`);
const auditFile = path.join("/tmp", `asean-load-${Date.now()}.jsonl`);

main().catch((error) => {
  console.error(error);
  process.exit(1);
});

async function main() {
  fs.writeFileSync(dataFile, `${JSON.stringify(makeState(), null, 2)}\n`);
  const server = spawn(process.execPath, ["server.js"], {
    cwd: root,
    env: {
      ...process.env,
      PORT: String(port),
      DATA_FILE: dataFile,
      AUDIT_LOG_FILE: auditFile,
      APP_SECRET: "load-test-secret"
    },
    stdio: ["ignore", "pipe", "pipe"]
  });

  let stderr = "";
  server.stderr.on("data", (chunk) => {
    stderr += chunk.toString();
  });

  try {
    await waitForHealth(port);
    const logins = await Promise.all(Array.from({ length: teacherCount }, (_, index) => loginTeacher(index)));
    const startedAt = Date.now();
    const opens = await Promise.all(logins.map((session, index) => openTeacherLesson(session, index)));
    const elapsedMs = Date.now() - startedAt;
    const finalState = JSON.parse(fs.readFileSync(dataFile, "utf8"));
    const activeLessons = finalState.lessons.filter((lesson) => lesson.adminStarted).length;
    const activeIds = finalState.callState?.activeLessonIds?.length || 0;
    const failures = opens.filter((item) => !item.ok);
    const studentStartedAt = Date.now();
    const studentLogins = await Promise.all(Array.from({ length: teacherCount }, (_, index) => loginStudent(index)));
    const studentSyncs = await Promise.all(studentLogins.map((session) => fetchState(session)));
    const studentElapsedMs = Date.now() - studentStartedAt;
    const studentFailures = studentSyncs.filter((item) => !item.ok);
    const result = {
      teachers: teacherCount,
      students: studentCount,
      concurrentOpens: opens.length,
      failedOpens: failures.length,
      activeLessons,
      activeIds,
      elapsedMs,
      requestsPerSecond: Math.round((opens.length / Math.max(1, elapsedMs / 1000)) * 10) / 10,
      concurrentStudentSyncs: studentSyncs.length,
      failedStudentSyncs: studentFailures.length,
      studentSyncElapsedMs: studentElapsedMs,
      studentSyncRequestsPerSecond: Math.round((studentSyncs.length / Math.max(1, studentElapsedMs / 1000)) * 10) / 10
    };
    console.log(JSON.stringify(result, null, 2));
    if (failures.length || studentFailures.length || activeLessons !== teacherCount || activeIds !== teacherCount) {
      console.error(JSON.stringify([...failures, ...studentFailures].slice(0, 5), null, 2));
      process.exitCode = 2;
    }
  } finally {
    server.kill("SIGTERM");
    if (stderr.trim()) console.error(stderr.trim());
  }
}

function makeState() {
  const now = new Date().toISOString();
  const settings = { currency: "USD", defaultTeacherRate: 8, defaultStudentRate: 14 };
  const teachers = Array.from({ length: teacherCount }, (_, index) => ({
    id: `teacher-load-${index + 1}`,
    name: `Teacher Load ${index + 1}`,
    email: `teacher-load-${index + 1}@example.com`,
    country: "Philippines",
    city: "Manila",
    timezone: "Asia/Manila",
    ratePerHour: 8,
    specialties: ["Conversation"],
    avatarColor: "#0f766e"
  }));
  const students = Array.from({ length: studentCount }, (_, index) => ({
    id: `student-load-${index + 1}`,
    name: `Student Load ${index + 1}`,
    email: `student-load-${index + 1}@example.com`,
    country: "Vietnam",
    city: "Ho Chi Minh City",
    timezone: "Asia/Ho_Chi_Minh",
    studentRatePerHour: 14,
    level: "A2",
    goal: "Conversation",
    avatarColor: "#2563eb"
  }));
  const accounts = [
    hashedAccount({
      id: "admin-load",
      role: "admin",
      name: "Admin Load",
      email: "admin-load@example.com",
      status: "active",
      profileId: null,
      createdAt: now
    })
  ];
  for (const teacher of teachers) {
    accounts.push(
      hashedAccount({
        id: `account-${teacher.id}`,
        role: "teacher",
        name: teacher.name,
        email: teacher.email,
        status: "active",
        profileId: teacher.id,
        createdAt: now
      })
    );
  }
  for (const student of students) {
    accounts.push(
      hashedAccount({
        id: `account-${student.id}`,
        role: "student",
        name: student.name,
        email: student.email,
        status: "active",
        profileId: student.id,
        createdAt: now
      })
    );
  }
  const lessons = Array.from({ length: teacherCount }, (_, index) => ({
    id: `lesson-load-${index + 1}`,
    teacherId: teachers[index].id,
    studentId: students[index].id,
    title: `Load Test Lesson ${index + 1}`,
    date: "2026-05-25",
    startTime: "20:00",
    durationHours: 1,
    teacherLessonAmount: 10 + (index % 5),
    studentLessonAmount: 18 + (index % 7),
    teacherRatePerHour: 8,
    studentRatePerHour: 14,
    status: "scheduled",
    roomId: `room-load-${index + 1}`,
    adminStarted: false,
    createdBy: "admin-load",
    createdAt: now
  }));
  return {
    version: 1,
    settings,
    accounts,
    teachers,
    students,
    lessons,
    notifications: [],
    placementTemplates: [],
    placementTests: [],
    callState: { activeLessonIds: [], activeLessonId: null, roomByLesson: {} }
  };
}

function hashedAccount(account) {
  const salt = crypto.randomBytes(16).toString("hex");
  return {
    ...account,
    passwordSalt: salt,
    passwordIterations: 210000,
    passwordHash: crypto.pbkdf2Sync(password, salt, 210000, 32, "sha256").toString("hex"),
    passwordUpdatedAt: new Date().toISOString(),
    presence: "offline"
  };
}

async function loginTeacher(index) {
  return loginAccount(`teacher-load-${index + 1}@example.com`);
}

async function loginStudent(index) {
  return loginAccount(`student-load-${index + 1}@example.com`);
}

async function loginAccount(email) {
  const response = await fetch(`http://127.0.0.1:${port}/api/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Origin: `http://127.0.0.1:${port}`
    },
    body: JSON.stringify({
      email,
      password
    })
  });
  const body = await response.json();
  if (!response.ok) throw new Error(`Login failed for ${email}: ${response.status}`);
  return {
    csrfToken: body.csrfToken,
    sessionToken: body.sessionToken,
    state: body.state
  };
}

async function fetchState(session) {
  const response = await fetch(`http://127.0.0.1:${port}/api/state`, {
    headers: {
      Origin: `http://127.0.0.1:${port}`,
      Authorization: `Bearer ${session.sessionToken}`
    }
  });
  if (!response.ok) return { ok: false, status: response.status };
  const state = await response.json();
  return {
    ok: Array.isArray(state.lessons) && state.lessons.length === 1 && state.lessons[0].adminStarted === true,
    status: response.status
  };
}

async function openTeacherLesson(session, index) {
  const lessonId = `lesson-load-${index + 1}`;
  const nextState = JSON.parse(JSON.stringify(session.state));
  const lesson = nextState.lessons.find((item) => item.id === lessonId);
  lesson.adminStarted = true;
  lesson.callStartedBy = `account-teacher-load-${index + 1}`;
  lesson.callStartedAt = new Date().toISOString();
  nextState.callState.activeLessonIds = [lessonId];
  nextState.callState.activeLessonId = lessonId;
  const response = await fetch(`http://127.0.0.1:${port}/api/state`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Origin: `http://127.0.0.1:${port}`,
      Authorization: `Bearer ${session.sessionToken}`,
      "X-CSRF-Token": session.csrfToken
    },
    body: JSON.stringify(nextState)
  });
  return { ok: response.ok, status: response.status, lessonId };
}

async function waitForHealth(port) {
  const deadline = Date.now() + 5000;
  while (Date.now() < deadline) {
    try {
      const response = await fetch(`http://127.0.0.1:${port}/api/health`);
      if (response.ok) return;
    } catch (error) {
      await new Promise((resolve) => setTimeout(resolve, 100));
    }
  }
  throw new Error("Server did not become healthy");
}
