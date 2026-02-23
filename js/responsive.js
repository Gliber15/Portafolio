// Lógica para el Menú Hamburguesa en las vistas
document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");
    const links = document.querySelectorAll(".nav-links li");

    if (hamburger && navLinks) {
        hamburger.addEventListener("click", () => {
            // Alternar Menú
            navLinks.classList.toggle("mobile-active");
            
            // Animación del Icono Hamburguesa
            hamburger.classList.toggle("toggle");
            
            // Animación en Cascada (Staggered) para los enlaces
            links.forEach((link, index) => {
                if (link.style.transitionDelay) {
                    link.style.transitionDelay = "";
                } else {
                    link.style.transitionDelay = `${index / 7 + 0.3}s`;
                }
            });
        });
    }
});
