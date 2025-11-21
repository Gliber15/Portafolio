// animación al aparecer
const cards = document.querySelectorAll(".project-card");

const obs = new IntersectionObserver(
       (entries) => {
              entries.forEach((e) => {
                     if (e.isIntersecting) {
                            e.target.classList.add("show");
                     }
              });
       },
       { threshold: 0.2 }
);

cards.forEach((card) => obs.observe(card));

// navbar scroll
const navbar = document.querySelector(".navbar");
window.addEventListener("scroll", () => {
       navbar.classList.toggle("scrolled", window.scrollY > 20);
});
