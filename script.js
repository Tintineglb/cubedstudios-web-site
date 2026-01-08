function updateImagePosition() {
  const scrollY = window.scrollY;

  const limite = 600; // fin de l’animation

  // Position de départ
  const xStart = 872;
  const yStart = 480;
  const scaleStart = 5;

  // Position d’arrivée
  const xEnd = 25;
  const yEnd = 25;
  const scaleEnd = 1.5;

  // Calcul du pourcentage d’avancement (entre 0 et 1)
  let t = scrollY / limite;
  t = Math.max(0, Math.min(1, t)); // clamp
  t = smoothstep(t);

  // Interpolation linéaire
  const x = xStart + (xEnd - xStart) * t;
  const y = yStart + (yEnd - yStart) * t;
  const scale = scaleStart + (scaleEnd - scaleStart) * t;

  // Application du mouvement
  document.getElementById("logo_navbar").style.transform =
    `translate(${x}px, ${y}px) scale(${scale})`;
};

function updateOpacity() {
  const scrollY = window.scrollY;

  const limite = 600; // fin de l’animation

  const opacityStart = 0.5;
  const opacityEnd = 0;

  // Calcul du pourcentage d’avancement (entre 0 et 1)
  let t = scrollY / limite;
  t = Math.max(0, Math.min(1, t)); // clamp

  // Interpolation linéaire
  const opacity = opacityStart + (opacityEnd - opacityStart) * t;

  document.getElementById("bg_fade").style.opacity = opacity;
}

window.addEventListener("scroll", updateOpacity);
window.addEventListener("load", updateOpacity);

window.addEventListener("scroll", updateImagePosition);
window.addEventListener("load", updateImagePosition);

function smoothstep(t) {
  return t * t * (3 - 2 * t);
}
