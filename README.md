# TechBlog — Ứng dụng blog đa dịch vụ
 
## Yêu cầu
- Docker & Docker Compose
 
## Cách chạy
1. Sao chép cấu hình:  cp .env.example .env
2. Khởi động hệ thống: docker compose up -d
3. Mở trình duyệt:      http://localhost
 
## Dừng hệ thống
docker compose down        # giữ dữ liệu
docker compose down -v     # xóa cả dữ liệu

## Tạo file .env chạy chính thức
cp .env.example .env