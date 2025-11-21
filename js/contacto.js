// HAMBURGER MENU
const hamburger = document.getElementById("hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
       navLinks.classList.toggle("active");
});

// FORMULARIO
const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", (e) => {
       e.preventDefault();

       const nombre = document.getElementById("nombre").value.trim();
       const correo = document.getElementById("correo").value.trim();
       const mensaje = document.getElementById("mensaje").value.trim();

       if (nombre === "" || correo === "" || mensaje === "") {
              alert("Por favor completa todos los campos.");
              return;
       }

       // Aquí podrías enviar el formulario usando fetch o emailjs
       alert(`Gracias ${nombre}, tu mensaje ha sido enviado! 🚀`);

       // Limpiar formulario
       contactForm.reset();
});
