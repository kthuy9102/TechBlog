# --- Stage 1: Build & Install Dependencies ---
FROM node:18-alpine AS builder

WORKDIR /app

# Copy package files để cài đặt dependencies
COPY package*.json ./
RUN npm install

# Copy toàn bộ source code
COPY . .

# --- Stage 2: Production (Image nhỏ gọn & bảo mật) ---
FROM node:18-alpine AS runner

WORKDIR /app

# Cấu hình môi trường Production
ENV NODE_ENV=production

# Tạo non-root user (sử dụng user 'node' có sẵn trong node:18-alpine)
# Phân quyền thư mục làm việc cho user 'node'
RUN chown -R node:node /app

# Copy các file cần thiết từ builder stage
COPY --chown=node:node --from=builder /app/package*.json ./
COPY --chown=node:node --from=builder /app/node_modules ./node_modules
COPY --chown=node:node --from=builder /app/ ./

# Chuyển sang chạy ứng dụng bằng non-root user
USER node

EXPOSE 3000

CMD ["npm", "start"]