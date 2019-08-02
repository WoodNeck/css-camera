const camera = new CSSCamera("#space");
camera.perspective = 100;
camera.position = [0, 0, 100];
camera.update(0).then(() => {
  camera.translateLocal(0, 0, +300);
  camera.update(2000);
});
