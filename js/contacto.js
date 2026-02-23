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

       // Cambiar texto del botón
       const btn = contactForm.querySelector('.btn-send');
       const originalText = btn.innerText;
       btn.innerText = "Enviando...";
       btn.disabled = true;

       // Enviar datos usando FormSubmit (gratuito)
       fetch("https://formsubmit.co/ajax/glibersalazar578@gmail.com", {
              method: "POST",
              headers: { 
                     'Content-Type': 'application/json',
                     'Accept': 'application/json'
              },
              body: JSON.stringify({
                     name: nombre,
                     email: correo,
                     message: mensaje,
                     _subject: `Nuevo contacto desde el Portafolio: ${nombre}`
              })
       })
       .then(response => response.json())
       .then(data => {
              alert(`¡Gracias ${nombre}, tu mensaje ha sido enviado con éxito! 🚀`);
              contactForm.reset();
       })
       .catch(error => {
              alert("Hubo un problema enviando tu mensaje. Inténtalo de nuevo.");
       })
       .finally(() => {
              btn.innerText = originalText;
              btn.disabled = false;
       });
});
