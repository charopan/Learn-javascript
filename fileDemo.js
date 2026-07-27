// เรียกใช้โมดูล fs (file system) ที่ติดมากับ Node
const fs = require('fs');

// เขียนข้อความลงไฟล์
fs.writeFileSync('output.txt', 'สวัสดีจาก Node.js!');

// อ่านไฟล์กลับมา
let content = fs.readFileSync('output.txt', 'utf8');
console.log(content);