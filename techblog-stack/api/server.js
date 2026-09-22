const express = require("express");
const os = require("os"); // Thêm dòng này để lấy thông tin container
const app = express();

// Cấu hình đọc từ biến môi trường do Compose truyền vào
const DB_HOST = process.env.DB_HOST;   // = "db"
const CACHE_HOST = process.env.CACHE_HOST; // = "cache"

app.get("/", (req, res) => {
  // Thêm os.hostname() vào chuỗi trả về
  res.send(`API ok. Host=${os.hostname()}, DB=${DB_HOST}, CACHE=${CACHE_HOST}`);
});

app.listen(3000, () => console.log("API listening on 3000"));