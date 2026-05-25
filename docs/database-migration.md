# Database migration path

He thong dang van hanh bang file JSON atomic de don gian va de backup. Khi so luong giao vien, hoc vien, lich hoc tang len, nen chuyen sang database theo lo trinh sau:

1. Chay backup ma hoa truoc khi migration.
2. Xuat du lieu hien tai sang SQLite:

   ```sh
   node scripts/export-to-sqlite.js data/asean-hub.json data/asean-hub.sqlite
   ```

3. Kiem tra so luong ban ghi trong SQLite:

   ```sh
   sqlite3 data/asean-hub.sqlite "select collection, count(*) from records group by collection;"
   ```

4. Chay song song JSON va database trong moi truong staging.
5. Sau khi doi chieu du lieu, moi chuyen production sang database lam nguon chinh.

SQLite phu hop cho giai doan dau vi de sao luu va khong can may chu rieng. Khi quy mo lon hon nua, co the nang len PostgreSQL voi cung cau truc collection/id/json truoc, sau do tach bang chuan hoa theo nghiep vu.
