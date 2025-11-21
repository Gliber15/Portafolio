
window.addEventListener('load', () => {
       // 1. Animar "Hola, soy"
       setTimeout(() => {
              document.querySelector('.line').style.opacity = '1';
              document.querySelector('.line').style.animation = 'fadeUp 1.2s forwards';
       }, 600);

       // 2. Animar nombre letra por letra
       const name = "Gliber Salazar";
       const nameElement = document.querySelector('.name-text');

       nameElement.innerHTML = name.split('').map((char, i) => {
              const delay = 1.6 + (i * 0.09);
              return char === ' ' ?
                     `<span class="letter" style="animation-delay: ${delay}s;">&nbsp;</span>` :
                     `<span class="letter" style="animation-delay: ${delay}s;">${char}</span>`;
       }).join('');

       // 3. Efecto máquina de escribir en subtítulo
       setTimeout(() => {
              const subtitle = "Frontend & Backend Developer | Creador de sistemas profesionales";
              const typingElement = document.querySelector('.typing-text');
              let i = 0;
              const speed = 50;

              const timer = setInterval(() => {
                     if (i < subtitle.length) {
                            typingElement.textContent += subtitle.charAt(i);
                            typingElement.style.width = 'auto';
                            i++;
                     } else {
                            clearInterval(timer);
                            document.querySelector('.cursor').style.display = 'none';
                            typingElement.style.borderRight = 'none';
                     }
              }, speed);
       }, 3400);
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
       document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 50);
});
