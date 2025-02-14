// Fonction pour charger le footer
function loadfooter() {
  fetch("components/footer.html")
    .then((response) => response.text())
    .then((data) => {
      // Insérer le footer au début du body
      document.body.insertAdjacentHTML("beforeend", data);

      // Réinitialiser les événements du menu mobile
      initializeMobileMenu();
    })
    .catch((error) =>
      console.error("Erreur lors du chargement du footer:", error)
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

// Charger le footer quand le DOM est prêt
document.addEventListener("DOMContentLoaded", loadfooter);
