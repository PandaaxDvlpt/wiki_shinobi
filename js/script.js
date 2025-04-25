// Sélectionne le body principal du document
const body = document.querySelector("body");
// Sélectionne la sidebar
const sidebar = document.querySelector(".sidebar");
// Bouton pour ouvrir/fermer la sidebar
const toggle = document.querySelector(".toggle");
// Switch du mode sombre/clair
const modeSwitch = document.querySelector(".toggle-switch");
// Texte affiché à côté du switch (Mode Sombre/Light)
const modeText = document.querySelector(".mode-text");
// Logo

// Applique le dark mode si activé dans le localStorage
if (localStorage.getItem("dark-mode") === "enabled") {
    body.classList.add("dark-mode");
    modeText.innerText = "Light mode";
} else {
    body.classList.remove("dark-mode");
    modeText.innerText = "Dark mode";
}

// Gestion du clic sur le switch pour activer/désactiver le dark mode
modeSwitch.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    if (body.classList.contains("dark-mode")) {
        modeText.innerText = "Light mode";
        localStorage.setItem("dark-mode", "enabled");
    } else {
        modeText.innerText = "Dark mode";
        localStorage.setItem("dark-mode", "disabled");
    }
});

// Gestion du clic sur le bouton pour ouvrir/fermer la sidebar

toggle.addEventListener("click", () => {
    if (window.innerWidth <= 600) {
        sidebar.classList.toggle("open");
        // En mobile, on enlève la classe 'close' pour éviter les conflits
        sidebar.classList.remove("close");
    } else {
        sidebar.classList.toggle("close");
        sidebar.classList.remove("open");
    }
});