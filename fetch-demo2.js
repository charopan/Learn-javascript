// ดึง element ที่จะใช้แสดงผล มาเก็บไว้ใช้งาน
let resultBox = document.getElementById("fetchResult");

// ฟังก์ชันหลัก: ดึงข้อมูล user จาก API แล้วแสดงผล
async function getUsers() {
  resultBox.innerHTML = "กำลังโหลดข้อมูล...";

  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/users");
    let users = await response.json();

    let html = "";
    users.forEach(function (user) {
      html += "<div class='user-card'>";
      html += "<strong>" + user.name + "</strong><br>";
      html += "อีเมล: " + user.email + "<br>";
      html += "เมือง: " + user.address.city;
      html += "</div>";
    });

    resultBox.innerHTML = html;

  } catch (error) {
    resultBox.innerHTML = "เกิดข้อผิดพลาด: ไม่สามารถโหลดข้อมูลได้";
    console.log(error);
  }
}
