// ------------------------------
// HAMBURGER MENU (RESPONSIVE)
// ------------------------------
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("nav-active");
    hamburger.classList.toggle("active");
});


// ------------------------------
// ANIMACIÓN FADE-IN AL HACER SCROLL
// ------------------------------
const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    },
    { threshold: 0.2 }
);

document.querySelectorAll(".fade-in").forEach(element => {
    observer.observe(element);
});
