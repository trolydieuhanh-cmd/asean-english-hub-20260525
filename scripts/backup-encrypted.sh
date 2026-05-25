#!/bin/sh
set -eu
export LC_ALL=C

APP_DIR="${APP_DIR:-/docker/asean-english-hub}"
DATA_FILE="${DATA_FILE:-$APP_DIR/data/asean-hub.json}"
AUDIT_LOG_FILE="${AUDIT_LOG_FILE:-$APP_DIR/data/audit-log.jsonl}"
ENV_FILE="${ENV_FILE:-$APP_DIR/.env}"
BACKUP_DIR="${BACKUP_DIR:-/docker/backups/asean-english-hub/encrypted}"
PASSPHRASE_FILE="${BACKUP_PASSPHRASE_FILE:-$APP_DIR/data/backup.passphrase}"
RETENTION_DAYS="${BACKUP_RETENTION_DAYS:-30}"

if [ ! -f "$PASSPHRASE_FILE" ]; then
  umask 077
  mkdir -p "$(dirname "$PASSPHRASE_FILE")"
  openssl rand -base64 48 > "$PASSPHRASE_FILE"
fi

timestamp="$(date -u +%Y%m%dT%H%M%SZ)"
tmp_dir="$(mktemp -d)"
archive="$tmp_dir/asean-backup-$timestamp.tar.gz"
encrypted="$BACKUP_DIR/asean-backup-$timestamp.tar.gz.enc"

cleanup() {
  rm -rf "$tmp_dir"
}
trap cleanup EXIT

mkdir -p "$BACKUP_DIR"

copy_if_exists() {
  src="$1"
  dest="$2"
  if [ -f "$src" ]; then
    mkdir -p "$(dirname "$tmp_dir/$dest")"
    cp "$src" "$tmp_dir/$dest"
  fi
}

copy_if_exists "$DATA_FILE" "data/asean-hub.json"
copy_if_exists "$AUDIT_LOG_FILE" "data/audit-log.jsonl"
copy_if_exists "$ENV_FILE" "config/.env"

tar -czf "$archive" -C "$tmp_dir" data config 2>/dev/null || tar -czf "$archive" -C "$tmp_dir" data
openssl enc -aes-256-cbc -salt -pbkdf2 -iter 200000 -pass "file:$PASSPHRASE_FILE" -in "$archive" -out "$encrypted"
chmod 600 "$encrypted"

find "$BACKUP_DIR" -name 'asean-backup-*.tar.gz.enc' -type f -mtime +"$RETENTION_DAYS" -delete

echo "$encrypted"
