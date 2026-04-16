const nav = document.querySelector(".site-nav");
const toggle = document.querySelector(".nav-toggle");
const closeButton = document.querySelector(".nav-close");
const navLinks = document.querySelectorAll(".nav-list a");

if (nav && toggle) {
  const closeNav = () => {
    nav.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
  };

  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  if (closeButton) {
    closeButton.addEventListener("click", closeNav);
  }

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (window.innerWidth <= 1050) {
        closeNav();
      }
    });
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 1050 && nav.classList.contains("open")) {
      closeNav();
    }
  });
}
