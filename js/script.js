const body = document.querySelector("body");
const sidebar = document.querySelector(".sidebar");
const toggle = document.querySelector(".toggle");
const modeSwitch = document.querySelector(".toggle-switch");
const modeText = document.querySelector(".mode-text");

modeSwitch.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    if (body.classList.contains("dark-mode")) {
        modeText.innerText = "Light mode";
        localStorage.setItem("darkMode", "enabled");
    } else {
        modeText.innerText = "Dark mode";
        localStorage.setItem("darkMode", "disabled");
    }
});

toggle.addEventListener("click", () => {

    sidebar.classList.toggle("close");
 });