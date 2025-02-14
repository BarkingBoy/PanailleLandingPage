// Fonction pour charger le header
function loadHeader() {
  fetch("components/header.html")
    .then((response) => response.text())
    .then((data) => {
      // Insérer le header au début du body
      document.body.insertAdjacentHTML("afterbegin", data);

      // Réinitialiser les événements du menu mobile
      initializeMobileMenu();
    })
    .catch((error) =>
      console.error("Erreur lors du chargement du header:", error)
    );
}

// Fonction pour initialiser le menu mobile
function initializeMobileMenu() {
  const mobileMenuButton = document.getElementById("mobile-menu-button");
  const mobileMenu = document.getElementById("mobile-menu");

  if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
    });
  }
}

// Charger le header quand le DOM est prêt
document.addEventListener("DOMContentLoaded", loadHeader);
