// ดึง element ที่จะใช้แสดงผลและปุ่ม มาเก็บไว้ใช้งาน
let resultBox = document.getElementById("result");
let loadBtn = document.getElementById("loadBtn");

// ฟังก์ชันหลัก: ดึงข้อมูล user จาก API แล้วแสดงผล
// ใส่ async ไว้หน้าฟังก์ชัน เพราะข้างในมีการ "รอ" (await)
async function getUsers() {
  // ระหว่างรอข้อมูล ให้แสดงข้อความบอกผู้ใช้ก่อน
  resultBox.innerHTML = "กำลังโหลดข้อมูล...";

  try {
    // fetch() คือคำสั่งขอข้อมูลจาก URL ที่ระบุ
    // await คือ "รอ" จนกว่าจะได้คำตอบกลับมา ก่อนไปทำบรรทัดถัดไป
    let response = await fetch("https://jsonplaceholder.typicode.com/users");

    // แปลงคำตอบที่ได้ (เป็น JSON) ให้กลายเป็น array ของ object ที่ JS อ่านได้
    let users = await response.json();

    // สร้างข้อความ HTML จากข้อมูลผู้ใช้แต่ละคน
    let html = "";
    users.forEach(function (user) {
      html += "<div class='user-card'>";
      html += "<strong>" + user.name + "</strong><br>";
      html += "อีเมล: " + user.email + "<br>";
      html += "เมือง: " + user.address.city;
      html += "</div>";
    });

    // เอา HTML ที่สร้างขึ้น ไปแสดงในกล่องผลลัพธ์
    resultBox.innerHTML = html;

  } catch (error) {
    // ถ้าขอข้อมูลไม่สำเร็จ (เช่น เน็ตหลุด) จะมาทำงานตรงนี้แทน
    resultBox.innerHTML = "เกิดข้อผิดพลาด: ไม่สามารถโหลดข้อมูลได้";
    console.log(error);
  }
}

// เมื่อกดปุ่ม ให้เรียกฟังก์ชัน getUsers()
loadBtn.addEventListener("click", getUsers);
