const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config()

// 建立 Express 應用程式
const app = express();

// 設定伺服器監聽的端口號
const PORT = process.env.PORT || 3000;

// 使用 bodyParser 解析請求體
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// 設定基本路由
app.get('/', (req, res) => {
  console.log("hi")
  res.send('Hello, World! ');
});

// 啟動伺服器
app.listen(PORT, () => {
  console.log(`伺服器正在 http://localhost:${PORT} 上運行`);
});