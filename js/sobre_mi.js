/* ============================
   SOBRE_MI.JS
   ============================ */

// ===== NAVBAR SCROLL =====
const navbar = document.querySelector(".navbar");
window.addEventListener("scroll", () => {
    if (window.scrollY > 20) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

// ===== MENU HAMBURGER =====
const hamburguer = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

if (hamburguer) {
    hamburguer.addEventListener("click", () => {
        navLinks.classList.toggle("active");
        hamburguer.classList.toggle("open");
    });
}

// Animación del icono hamburguesa
if (hamburguer) {
    hamburguer.addEventListener("click", () => {
        const spans = hamburguer.querySelectorAll("span");
        spans[0].classList.toggle("line1");
        spans[1].classList.toggle("line2");
        spans[2].classList.toggle("line3");
    });
}

// ===== SMOOTH SCROLL EN LINKS =====
document.querySelectorAll('.nav-links a[href^="#"]').forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();

        const target = document.querySelector(link.getAttribute("href"));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 60,
                behavior: "smooth"
            });
        }

        // Cerrar menú móvil
        navLinks.classList.remove("active");
        hamburguer.classList.remove("open");
    });
});

// ===== REVEAL ANIMATION (tarjetas aparecen suave) =====
const revealElements = document.querySelectorAll(
    ".about-text, .skill-card, .contact-card"
);

const revealOnScroll = () => {
    const triggerBottom = window.innerHeight * 0.90;

    revealElements.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;

        if (elementTop < triggerBottom) {
            el.classList.add("show");
        }
    });
};

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

// ===== DESCARGAR CV =====
// Asegúrate de tener /assets/cv/Gliber_Salazar_CV.pdf
const downloadCV = document.getElementById("downloadCV");

if (downloadCV) {
    downloadCV.addEventListener("click", () => {
        const link = document.createElement("a");
        link.href = "../assets/cv/Gliber_Salazar_CV.pdf"; 
        link.download = "Gliber_Salazar_CV.pdf";
        link.click();
    });
}

// ===== TOUCH HOVER (para que el hover funcione en celular) =====
document.querySelectorAll(".skill-card").forEach(card => {
    card.addEventListener("touchstart", () => {
        card.classList.add("touch-hover");
        setTimeout(() => card.classList.remove("touch-hover"), 600);
    });
});
