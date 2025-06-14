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
console.log("JS loaded!);
