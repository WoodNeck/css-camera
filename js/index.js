const cardButton = document.querySelector("#card-button");
const codeButton = document.querySelector("#code-button");
const heroButton = document.querySelector("#hero-button");
const moreButton = document.querySelector("#more-button");

const card = document.querySelector("#card");
const code = document.querySelector("#code");
const hero = document.querySelector("#hero");
const more = document.querySelector("#more");

const camera = new CSSCamera("#space");
const windowWidth = document.body.offsetWidth;

camera.perspective = windowWidth / 2;
camera.update(0);

camera.focus(hero);
camera.update(2000);

cardButton.onclick = () => {
  camera.focus(card);
  camera.update(2000);
}
codeButton.onclick = () => {
  camera.focus(code);
  camera.update(2000);
}
heroButton.onclick = () => {
  camera.focus(hero);
  camera.update(2000);
}
moreButton.onclick = () => {
  camera.focus(more);
  camera.update(2000);
}
