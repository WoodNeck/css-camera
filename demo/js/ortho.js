const windowWidth = document.body.offsetWidth;
const windowHeight = document.body.offsetHeight;

const camera = new CSSCamera("#space");
camera.rotation = [55, 0, -45]
camera.position = [-windowWidth / 2, -windowHeight / 2, 0];
camera.scale = [2, 2, 2];
camera.update(0);

var up = false,
right = false,
down = false,
left = false;

document.addEventListener('keydown', press);
function press(e){
  if (e.keyCode === 38 /* up */ || e.keyCode === 87 /* w */){
    up = true;
  }
  if (e.keyCode === 39 /* right */ || e.keyCode === 68 /* d */){
    right = true;
  }
  if (e.keyCode === 40 /* down */ || e.keyCode === 83 /* s */){
    down = true;
  }
  if (e.keyCode === 37 /* left */ || e.keyCode === 65 /* a */){
    left = true;
  }
}

document.addEventListener('keyup', release);
function release(e){
  if (e.keyCode === 38 /* up */ || e.keyCode === 87 /* w */){
    up = false
  }
  if (e.keyCode === 39 /* right */ || e.keyCode === 68 /* d */){
    right = false
  }
  if (e.keyCode === 40 /* down */ || e.keyCode === 83 /* s */){
    down = false
  }
  if (e.keyCode === 37 /* left */ || e.keyCode === 65 /* a */){
    left = false
  }
}

const keyLoop = () => {
  if (up){
    camera.translateLocal(0, -5, 0);
  }
  if (right){
    camera.translateLocal(5, 0, 0);
  }
  if (down){
    camera.translateLocal(0, 5, 0);
  }
  if (left){
    camera.translateLocal(-5, 0, 0);
  }
  camera.update(0);
  requestAnimationFrame(keyLoop);
}
keyLoop();
