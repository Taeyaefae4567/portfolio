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

