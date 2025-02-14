const observer = new MutationObserver(() => {
  const mobileMenuButton = document.getElementById("mobile-menu-button");

  if (mobileMenuButton) {
    console.log("✅ Bouton menu détecté !");
    mobileMenuButton.addEventListener("click", function () {
      const mobileMenu = document.getElementById("mobile-menu");
      if (mobileMenu) {
        mobileMenu.classList.toggle("hidden");
        console.log("🎯 Classe 'hidden' toggle !");
      }
    });

    // On arrête l'observateur une fois que le bouton est détecté
    observer.disconnect();
  }
});

// On observe le `body` pour voir quand de nouveaux éléments sont ajoutés
observer.observe(document.body, { childList: true, subtree: true });
