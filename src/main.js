const app = document.getElementById("app");
createUiMap(app);
const render_scene = document.getElementById("render_scene");
createScene(render_scene);

function starsGenerator(container) {
  if (!container) return;

  const height = container.offsetHeight;
  const width = container.offsetWidth;

  const area = height * width;
  const starDensity = 1200;

  const starCount = Math.floor(area / starDensity);

  for (let i = 0; i < starCount; i++) {
    const star = document.createElement("span");

    star.className = "star";
    star.style.left = Math.random() * 100 + "%";
    star.style.top = Math.random() * 100 + "%";

    const random = Math.random();
    let size = 1;

    if (random > 0.85) size = 2;
    if (random > 0.97) size = 3;

    const opacity = Math.random() * 0.8 + 0.2;

    star.style.height = size + "px";
    star.style.width = size + "px";
    star.style.opacity = opacity;

    star.style.animationDelay = Math.random() * 20 + "s";
    star.style.animationDuration = Math.random() * 3 + 2 + "s";

    container.appendChild(star);
  }
}

const sky_stars = document.getElementById("sky_stars");
starsGenerator(sky_stars);

async function loadCodePreview() {
  const codePan = document.querySelector("#code_pan");

  if (!codePan) return;

  const response = await fetch("../src/ui.map.js");
  const code = await response.text();

  codePan.textContent = code;
}

loadCodePreview();
