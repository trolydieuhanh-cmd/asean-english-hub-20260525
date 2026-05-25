# Security operations

## Audit log

Audit log duoc ghi vao `data/audit-log.jsonl` va chi admin moi doc duoc qua `/api/audit`.

Kiem tra tren VPS:

```sh
tail -n 50 /docker/asean-english-hub/data/audit-log.jsonl
```

## Encrypted backup

Backup ma hoa chay bang `asean-hub-backup.timer`.

Kiem tra lich:

```sh
systemctl list-timers asean-hub-backup.timer
```

Chay backup ngay:

```sh
systemctl start asean-hub-backup.service
```

File backup nam tai:

```sh
/docker/backups/asean-english-hub/encrypted/
```

Giai ma backup khi can khoi phuc:

```sh
openssl enc -d -aes-256-cbc -pbkdf2 -iter 200000 \
  -pass file:/docker/asean-english-hub/data/backup.passphrase \
  -in /docker/backups/asean-english-hub/encrypted/asean-backup-YYYYMMDDTHHMMSSZ.tar.gz.enc \
  -out /tmp/asean-restore.tar.gz
```

Sau do giai nen vao thu muc tam, kiem tra noi dung, roi moi thay the file production.
