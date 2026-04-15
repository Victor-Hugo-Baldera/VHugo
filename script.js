document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menuToggle");
  const mobileMenu = document.getElementById("mobileMenu");
  const langToggle = document.getElementById("langToggle");
  const mobileLinks = document.querySelectorAll(".mobile-menu a");

  let currentLang = "en";

  function updateLanguage() {
    const elements = document.querySelectorAll("[data-en][data-es]");

    elements.forEach(function (element) {
      const text = element.getAttribute("data-" + currentLang);
      if (text !== null) {
        element.innerHTML = text;
      }
    });

    const label = document.querySelector(".lang-label");
    if (label) {
      label.textContent = currentLang.toUpperCase();
    }

    document.documentElement.lang = currentLang;
  }

  function toggleLanguage() {
    currentLang = currentLang === "en" ? "es" : "en";
    updateLanguage();
  }

  if (langToggle) {
    langToggle.addEventListener("click", toggleLanguage);
  }

  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener("click", function () {
      mobileMenu.classList.toggle("show");
      menuToggle.classList.toggle("active");

      const isOpen = mobileMenu.classList.contains("show");
      menuToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });
  }

  mobileLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      if (mobileMenu && menuToggle) {
        mobileMenu.classList.remove("show");
        menuToggle.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", "false");
      }
    });
  });

  updateLanguage();
});