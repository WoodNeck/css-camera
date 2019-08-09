const camera = new CSSCamera("#space");
const windowWidth = document.body.offsetWidth;

camera.perspective = windowWidth / 2;
camera.position = [0, 0, windowWidth / 2];
camera.update(0);

const cardButton = document.querySelector("#card-button");
const panelButton = document.querySelector("#panel-button");
const heroButton = document.querySelector("#hero-button");
const levelButton = document.querySelector("#level-button");

const card = document.querySelector("#card");
const panel = document.querySelector("#panel");
const hero = document.querySelector("#hero");
const level = document.querySelector("#level");

cardButton.onclick = () => {
  camera.focus(card);
  camera.update(2000);
}
panelButton.onclick = () => {
  camera.focus(panel);
  camera.update(2000);
}
heroButton.onclick = () => {
  camera.focus(hero);
  camera.update(2000);
}
levelButton.onclick = () => {
  camera.focus(level);
  camera.update(2000);
}
