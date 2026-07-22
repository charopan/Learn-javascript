// ==========================================
// 1. ดึง Elements จาก HTML มาเก็บในตัวแปร JS
// ==========================================
const todoInput = document.getElementById("todoInput");
const addBtn = document.getElementById("addBtn");
const todoList = document.getElementById("todoList");

// ==========================================
// 2. สร้างฟังก์ชันสำหรับเพิ่มรายการ
// ==========================================
function addTodo() {
  // ดึงข้อความจากช่อง input
  const text = todoInput.value;

  // เช็กว่าถ้าช่องพิมพ์ว่างเปล่า ไม่ต้องทำอะไร
  if (text === "") {
    alert("กรุณาพิมพ์ข้อความก่อนครับ!");
    return;
  }

  // สร้างแท็ก <li> ขึ้นมาใหม่ในความทรงจำ
  const li = document.createElement("li");
  
  // ใส่ข้อความและปุ่มลบลงไปใน <li>
  li.innerHTML = `
    <span>${text}</span>
    <button onclick="deleteTodo(this)">❌</button>
  `;

  // นำ <li> ใหม่ไปแปะไว้ใน <ul> บนหน้าเว็บจริง
  todoList.appendChild(li);

  // เคลียร์ช่องพิมพ์ให้กลับมาว่างเปล่า
  todoInput.value = "";
}

// ==========================================
// 3. สร้างฟังก์ชันสำหรับลบรายการ
// ==========================================
function deleteTodo(button) {
  // button.parentElement คือการหาแท็ก <li> ที่เป็นตัวแม่ของปุ่มนั้น แล้วลบทิ้ง
  button.parentElement.remove();
}

// ==========================================
// 4. ดักจับการกดปุ่ม "เพิ่ม"
// ==========================================
addBtn.addEventListener("click", addTodo);
