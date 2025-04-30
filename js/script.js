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

// Gestion du Fihcier JSON

async function chargerJson() {
    const container = document.querySelector(".json-text");

    try {
        const result = await fetch("../assets/rg.json");
        const data = await result.json();

        const regles = data.regles_roleplay;
        let html = "";

        for (const [titre, contenu] of Object.entries(regles)) {
            html += `<h2>${titre.replace(/_/g, ' ').toUpperCase()}</h2>`;

            if (Array.isArray(contenu)) {
                html += "<ul>";
                contenu.forEach(item => {
                    html += `<li>${marked.parse(item)}</li>`; // rendu Markdown
                });
                html += "</ul>";
            } else if (typeof contenu === "object") {
                for (const [sousTitre, sousContenu] of Object.entries(contenu)) {
                    html += `<h3>${sousTitre.replace(/_/g, ' ').toUpperCase()}</h3>`;
                    if (Array.isArray(sousContenu)) {
                        html += "<ul>";
                        sousContenu.forEach(item => {
                            html += `<li>${marked.parse(item)}</li>`; // rendu Markdown
                        });
                        html += "</ul>";
                    } else {
                        html += `<p>${marked.parse(sousContenu)}</p>`; // rendu Markdown
                    }
                }
            } else {
                html += `<p>${marked.parse(contenu)}</p>`; // rendu Markdown
            }
        }

        container.innerHTML = html;
    } catch (error) {
        console.error("Erreur de chargement du JSON :", error);
    }
}

chargerJson();


async function chargerJsonRGL() {
    const container = document.querySelector(".json-text-rgl");

    try {
        const result = await fetch("../assets/rgL.json");
        const data = await result.json();

        const regles = data.regles_roleplay;
        let html = "";

        for (const [titre, contenu] of Object.entries(regles)) {
            html += `<h2>${titre.replace(/_/g, ' ').toUpperCase()}</h2>`;

            if (Array.isArray(contenu)) {
                html += "<ul>";
                contenu.forEach(item => {
                    html += `<li>${marked.parse(item)}</li>`; // rendu Markdown
                });
                html += "</ul>";
            } else if (typeof contenu === "object") {
                for (const [sousTitre, sousContenu] of Object.entries(contenu)) {
                    html += `<h3>${sousTitre.replace(/_/g, ' ').toUpperCase()}</h3>`;
                    if (Array.isArray(sousContenu)) {
                        html += "<ul>";
                        sousContenu.forEach(item => {
                            html += `<li>${marked.parse(item)}</li>`; // rendu Markdown
                        });
                        html += "</ul>";
                    } else {
                        html += `<p>${marked.parse(sousContenu)}</p>`; // rendu Markdown
                    }
                }
            } else {
                html += `<p>${marked.parse(contenu)}</p>`; // rendu Markdown
            }
        }

        container.innerHTML = html;
    } catch (error) {
        console.error("Erreur de chargement du JSON :", error);
    }
}