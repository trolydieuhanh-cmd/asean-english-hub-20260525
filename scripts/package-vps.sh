#!/bin/sh
set -eu
export LC_ALL=C
export COPYFILE_DISABLE=1

ROOT_DIR="$(CDPATH= cd -- "$(dirname -- "$0")/.." && pwd)"
PACKAGE_NAME="asean-english-hub-vps"
DIST_DIR="$ROOT_DIR/dist/$PACKAGE_NAME"
ARCHIVE="$ROOT_DIR/dist/$PACKAGE_NAME.tar.gz"

rm -rf "$DIST_DIR"
mkdir -p "$DIST_DIR"

copy_item() {
  item="$1"
  if [ -e "$ROOT_DIR/$item" ]; then
    parent="$(dirname "$DIST_DIR/$item")"
    mkdir -p "$parent"
    cp -R "$ROOT_DIR/$item" "$DIST_DIR/$item"
  fi
}

for item in \
  index.html \
  styles.css \
  app.js \
  server.js \
  service-worker.js \
  manifest.webmanifest \
  mobile \
  .well-known \
  assets \
  package.json \
  README.md \
  .env.example \
  .gitignore \
  .dockerignore \
  Dockerfile \
  docker-compose.yml \
  ecosystem.config.cjs \
  docs \
  deploy \
  scripts
do
  copy_item "$item"
done

mkdir -p "$DIST_DIR/data"
copy_item "data/README.md"
copy_item "data/asean-hub.example.json"

(
  cd "$ROOT_DIR/dist"
  tar --format=ustar -czf "$ARCHIVE" "$PACKAGE_NAME"
)

echo "$ARCHIVE"
