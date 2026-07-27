// เรียกใช้โมดูล http ที่ติดมากับ Node
const http = require('http');

// สร้าง server ที่ตอบกลับทุก request ด้วยข้อความนี้
const server = http.createServer((req, res) => {
  res.write('สวัสดีครับ นี่คือ server ตัวแรกของผม!');
  res.end();
});

// สั่งให้ server เริ่มฟังที่ port 3000
server.listen(3000, () => {
  console.log('Server กำลังทำงานที่ http://localhost:3000');
});