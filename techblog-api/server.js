const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
 
app.get("/", (req, res) => {
  res.send("Xin chào từ TechBlog API! Host: " + require("os").hostname());
});
 
app.listen(PORT, () => console.log(`API chạy tại cổng ${PORT}`));
