const secretText = document.getElementById("secretText");
const toggleBtn = document.getElementById("toggleBtn");

toggleBtn.addEventListener("click", () => {
    secretText.classList.toggle("hidden");

    if (secretText.classList.contains("hidden")) {
        toggleBtn.textContent = "show";
    } else {
        toggleBtn.textContent = "hide";
    }
});

const themeBtn = document.getElementById("themeToggle");

themeBtn.addEventListener("click", () => {
    const isLightMode = document.body.classList.toggle("light-mode");

    if (isLightMode) {
        themeBtn.textContent = "เปลี่ยนเป็นโหมดมืด";
    } else {
        themeBtn.textContent = "เปลี่ยนเป็นโหมดสว่าง";
    }
});

function saveNote() {
    const input = document.getElementById("noteInput");
    const note = input.value;

    if (note.trim() === "") {
        alert("กรุณาพิมพ์โน้ตก่อนบันทึก");
        return;
    }
    
    localStorage.setItem("myNote", note);
    document.getElementById("savedNote").textContent = "📌" + note;
    input.value = "";
}

window.addEventListener("DOMContentLoaded",() => {
    const saved = localStorage.getItem("myNote");
    if (saved) {
        document.getElementById("savedNote").textContent ="📌" + saved;
    }
});