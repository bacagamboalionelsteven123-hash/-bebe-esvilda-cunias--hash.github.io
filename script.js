// Contador de tiempo desde 28 de diciembre de 2024
const fechaNovios = new Date("2024-12-28T00:00:00");

function actualizarContador() {
  const ahora = new Date();
  const diferencia = ahora - fechaNovios;

  const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diferencia / (1000 * 60 * 60)) % 24);
  const minutos = Math.floor((diferencia / (1000 * 60)) % 60);
  const segundos = Math.floor((diferencia / 1000) % 60);

  document.getElementById("contador").textContent =
    `${dias} días, ${horas} horas, ${minutos} minutos y ${segundos} segundos`;
}

setInterval(actualizarContador, 1000);

// Corazones flotando
function crearCorazon() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.style.left = Math.random() * window.innerWidth + 'px';
  heart.style.animationDuration = 4 + Math.random() * 3 + 's';
  heart.style.opacity = Math.random();
  document.querySelector('.hearts-container').appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 7000);
}

setInterval(crearCorazon, 300);

// Abrir cada recuerdo al hacer click
const recuerdos = document.querySelectorAll('.recuerdo');
recuerdos.forEach(recuerdo => {
  recuerdo.addEventListener('click', () => {
    const contenido = recuerdo.querySelector('.recuerdo-contenido');
    if (contenido.style.maxHeight) {
      contenido.style.maxHeight = null; // cerrar
    } else {
      contenido.style.maxHeight = contenido.scrollHeight + "px"; // abrir
    }
  });
});
