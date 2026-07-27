const express = require('express');
const app = express();

app.use(express.json());

app.use((req, res, next) => {
  console.log('มีคนเข้ามาที่: ' + req.url);
  next();
});

app.get('/', (req, res) => {
  res.send('หน้าแรก');
});

app.get('/user/:id', (req, res) => {
  res.send('ดูข้อมูลผู้ใช้ ID: ' + req.params.id);
});

app.get('/search', (req, res) => {
  res.send('ค้นหาคำว่า: ' + req.query.keyword);
});

app.listen(3000, () => {
  console.log('Server ทำงานที่ http://localhost:3000');
});