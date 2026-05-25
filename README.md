# Asean Holding English Hub

MVP quản lý lớp tiếng Anh online cho Asean Holding: admin tạo tài khoản, xếp lịch học, mở video call, tính lương giáo viên và học phí học viên.

## Chạy nhanh

Dự án không cần build tool và không có package dependency.

```bash
node server.js
```

Sau đó mở:

```text
http://localhost:4173
```

Muốn đổi cổng:

```bash
PORT=8080 node server.js
```

Dữ liệu được lưu tại:

```text
data/asean-hub.json
```

## Đóng gói VPS

Tạo gói triển khai:

```bash
sh scripts/package-vps.sh
```

File xuất ra:

```text
dist/asean-english-hub-vps.tar.gz
```

Đưa file này lên VPS rồi giải nén vào thư mục độc lập của dự án:

```bash
sudo mkdir -p /docker
sudo tar -xzf asean-english-hub-vps.tar.gz -C /docker
sudo rm -rf /docker/asean-english-hub
sudo mv /docker/asean-english-hub-vps /docker/asean-english-hub
cd /docker/asean-english-hub
cp .env.example .env
node server.js
```

Nếu `/docker/asean-english-hub` đã tồn tại, hãy sao lưu `.env` và `data/asean-hub.json` trước khi thay bản mới.

## Chạy bằng Docker Compose

```bash
docker compose up -d --build
```

Ứng dụng chạy ở:

```text
http://SERVER_IP:4173
```

Muốn đổi cổng public, sửa `.env` hoặc chạy:

```bash
PUBLIC_PORT=8080 docker compose up -d --build
```

## Chạy bằng PM2

```bash
npm install -g pm2
pm2 start ecosystem.config.cjs
pm2 save
pm2 startup
```

## Chạy bằng systemd

Copy thư mục dự án vào `/docker/asean-english-hub`, sau đó:

```bash
sudo cp deploy/asean-english-hub.service /etc/systemd/system/
sudo chown -R www-data:www-data /docker/asean-english-hub
sudo systemctl daemon-reload
sudo systemctl enable --now asean-english-hub
sudo systemctl status asean-english-hub
```

## Nginx reverse proxy

Sửa `server_name` trong `deploy/nginx-asean-hub.conf`, rồi:

```bash
sudo cp deploy/nginx-asean-hub.conf /etc/nginx/sites-available/asean-english-hub
sudo ln -s /etc/nginx/sites-available/asean-english-hub /etc/nginx/sites-enabled/asean-english-hub
sudo nginx -t
sudo systemctl reload nginx
```

Nên bật HTTPS bằng Certbot hoặc Caddy trước khi dùng thật.

## Tài khoản demo

| Vai trò | Email | Mật khẩu |
| --- | --- | --- |
| Admin | admin@aseanholding.com | admin123 |
| Giáo viên | maria.santos@aseanholding.com | teach123 |
| Học viên | linh.nguyen@example.com | learn123 |

## Chức năng chính

- Admin tạo và khóa/mở tài khoản admin, giáo viên, học viên.
- Admin xếp lịch học, chọn giáo viên, học viên, số giờ, lương giáo viên/giờ và học phí/giờ.
- Giáo viên xem danh sách học viên, số buổi dạy, số giờ dạy và tiền dạy tạm tính.
- Học viên xem lịch học, thời khóa biểu, số giờ học và học phí tạm tính.
- Admin xem bảng lương giáo viên, công nợ học viên và xuất CSV.
- Admin tạo thông báo cho toàn hệ thống, giáo viên hoặc học viên.
- Khi admin tạo tài khoản giáo viên/học viên trên server, hệ thống gửi email song ngữ Anh - Việt chứa mật khẩu tạm và khuyến nghị đổi mật khẩu ở lần đăng nhập tiếp theo.
- Giáo viên và học viên có thể tự đổi mật khẩu trong màn hình Hồ sơ.
- Admin là người duy nhất bắt đầu/kết thúc video call nhóm. Giáo viên và học viên chỉ vào được phòng khi lớp đã được admin mở.
- PWA responsive, dùng được trên trình duyệt PC, tablet, iOS và Android.

## Cấu hình email tự động

Sửa `.env` trên VPS để dùng email hệ thống/no-reply:

```text
SYSTEM_EMAIL_FROM="Asean Hitech System <no-reply@asean-vietnam.com>"
PUBLIC_APP_URL=https://asean-vietnam.com
SENDMAIL_PATH=/usr/sbin/sendmail
SMTP_HOST=smtp.your-domain.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_STARTTLS=true
SMTP_USER=no-reply@your-domain.com
SMTP_PASS=mat-khau-email
```

Nếu chưa đặt `SMTP_HOST`, server sẽ thử gửi qua `SENDMAIL_PATH` trên VPS. Nếu VPS không có sendmail, server vẫn tạo tài khoản và in bản xem trước email ra log.

## Google Meet không dùng API

Để không phát sinh token/API/billing, admin có thể tạo Google Meet link trực tiếp trên Google Meet rồi dán vào từng buổi học khi tạo hoặc sửa lịch. Hệ thống chỉ lưu link trong `data/asean-hub.json`; giáo viên/học viên bấm `Vào lớp` sẽ mở Google Meet trong tab mới.

Quy trình:

1. Admin mở Google Meet và tạo link họp dùng sau.
2. Trong hệ thống, vào `Lịch học`, tạo hoặc sửa buổi học.
3. Dán link dạng `https://meet.google.com/...` vào ô `Link Google Meet`.
4. Khi admin bấm `Mở lớp`, tài khoản giáo viên/học viên sẽ thấy nút `Vào lớp` và mở đúng link đó.

## Cấu hình Google Meet tự động bằng API, tùy chọn

Phần này mặc định tắt bằng `GOOGLE_MEET_API_ENABLED=false`. Chỉ bật nếu doanh nghiệp muốn server tự tạo link qua Google Cloud API.

1. Trong Google Cloud Console, bật Google Meet API cho project.
2. Tạo OAuth Client loại `Web application`.
3. Thêm Authorized redirect URI:

```text
https://asean-vietnam.com/api/google/oauth/callback
```

4. Điền vào `.env` trên VPS:

```text
GOOGLE_CLIENT_ID=your-google-oauth-client-id
GOOGLE_CLIENT_SECRET=your-google-oauth-client-secret
GOOGLE_REDIRECT_URI=https://asean-vietnam.com/api/google/oauth/callback
GOOGLE_OAUTH_FILE=data/google-oauth.json
GOOGLE_MEET_ACCESS_TYPE=OPEN
GOOGLE_MEET_API_ENABLED=true
```

5. Đăng nhập tài khoản admin trên web rồi mở `/api/google/oauth/start`, sau đó chọn tài khoản Google chủ phòng.

Server sẽ dùng refresh token lưu trong `data/google-oauth.json` để tự tạo link cho các buổi học mới hoặc khi admin mở lớp chưa có link.

## Gợi ý triển khai thật

Bản MVP dùng file JSON để dễ chạy trên VPS. Khi đưa vào vận hành thực tế nên nâng cấp thêm:

- HTTPS qua Nginx/Caddy.
- Database PostgreSQL hoặc MySQL.
- Mật khẩu mã hóa bằng bcrypt/argon2.
- Token đăng nhập và phân quyền API phía server.
- Sao lưu dữ liệu định kỳ.
- Tích hợp email/Zalo/WhatsApp để nhắc lịch học tự động.
