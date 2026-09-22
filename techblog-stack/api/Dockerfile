# 1. Chọn image nền có sẵn Node.js 18, bản alpine nhẹ
FROM node:18-alpine
 
# 2. Thư mục làm việc bên trong container
WORKDIR /app
 
# 3. Copy khai báo phụ thuộc trước để tận dụng cache
COPY package*.json ./
RUN npm install
 
# 4. Copy toàn bộ mã nguồn còn lại
COPY . .
 
# 5. Khai báo cổng và lệnh khởi động
EXPOSE 3000
CMD ["npm", "start"]
