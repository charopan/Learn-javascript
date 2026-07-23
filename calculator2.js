// ตัวแปรเก็บข้อความที่จะแสดงบนจอ เริ่มต้นเป็น "0"
let currentInput = "0";

// ดึง element ของ input ช่องแสดงผล มาเก็บไว้ใช้งานซ้ำๆ
let display = document.getElementById("calcDisplay");

// ฟังก์ชันนี้ทำงานทุกครั้งที่กดปุ่มตัวเลขหรือเครื่องหมาย
function pressKey(key) {
  if (currentInput === "0") {
    currentInput = key;
  } else {
    currentInput = currentInput + key;
  }
  display.value = currentInput;
}

// ฟังก์ชันล้างค่า กลับไปเป็น "0"
function clearDisplay() {
  currentInput = "0";
  display.value = currentInput;
}

// ฟังก์ชันคำนวณผลลัพธ์เมื่อกด "="
function calculateResult() {
  try {
    let result = eval(currentInput);
    currentInput = result.toString();
    display.value = currentInput;
  } catch (error) {
    display.value = "ผิดพลาด";
    currentInput = "0";
  }
}
