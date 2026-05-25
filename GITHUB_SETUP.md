# GitHub setup

This folder is a separate GitHub-safe export of the project.

It excludes:

- `.env`
- `dist/`
- runtime logs and archives
- `data/asean-hub.json`

Before running from a fresh clone:

```bash
cp .env.example .env
cp data/asean-hub.example.json data/asean-hub.json
node server.js
```

To connect this folder to a GitHub repository:

```bash
git remote add origin git@github.com:OWNER/REPOSITORY.git
git push -u origin main
```

Use a new empty repository or a new branch/path policy. Do not push into an existing repository root if it already contains unrelated files.
