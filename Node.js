const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;

mongoose.connect('mongodb://localhost:27017/mydatabase', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Định nghĩa các route cho đăng ký, đăng nhập và lấy dữ liệu cảm biến

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
