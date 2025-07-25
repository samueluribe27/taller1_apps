const paisaje = document.getElementById("paisaje");

// Música de fondo
const audio = new Audio("sunny-oasis-eastern-background-hip-hop-vlog-music-for-video-stories-379501.mp3.mp3");
audio.loop = true;
audio.volume = 0.5;
audio.play();

// Remover árboles de arriba si estaban flotando
const todosArboles = document.querySelectorAll("[id^='arbol']");
todosArboles.forEach(el => el.remove());

// Crear árboles al fondo en la base
const arbolImg = "https://icons.iconarchive.com/icons/google/noto-emoji-animals-nature/128/22330-deciduous-tree-icon.png";
const arboles = [];
for (let i = 0; i < 5; i++) {
  const arbol = document.createElement("img");
  arbol.src = arbolImg;
  arbol.className = "objeto";
  arbol.style.left = (i * 200 + 100) + "px";
  arbol.style.bottom = "-4px";
  arbol.style.zIndex = 2;
  paisaje.appendChild(arbol);
  arboles.push(arbol);
}

// Generar 6 nevados sincronizados en fondo
const nevadoImg = "https://icons.iconarchive.com/icons/google/noto-emoji-travel-places/512/42462-mountain-icon.png";
const nevados = [];
for (let i = 0; i < 6; i++) {
  const nevado = document.createElement("img");
  nevado.src = nevadoImg;
  nevado.className = "objeto";
  nevado.style.left = (i * 200) + "px";
  nevado.style.bottom = "-17px";
  nevado.style.zIndex = 0;
  paisaje.appendChild(nevado);
  nevados.push(nevado);
}

// Sol
const sol = document.getElementById("sol");

// Movimiento
const velocidadPaisaje = 0.5;
const velocidadSol = 0.1;

function animar() {
  // Mover nevados
  nevados.forEach(el => {
    let left = parseFloat(el.style.left);
    left -= velocidadPaisaje;
    if (left < -200) left = 1000;
    el.style.left = left + "px";
  });

  // Mover árboles
  arboles.forEach(el => {
    let left = parseFloat(el.style.left);
    left -= velocidadPaisaje;
    if (left < -100) left = 900;
    el.style.left = left + "px";
  });

  // Mover sol lentamente
  let solRight = parseFloat(sol.style.right || "0");
  solRight += velocidadSol;
  if (solRight > 800) solRight = -100;
  sol.style.right = solRight + "px";

  requestAnimationFrame(animar);
}

animar();
