var camera = new CSSCamera("#space");
camera.perspective = 400;
camera.update(0);

var inst = document.querySelector("#inst");

document.documentElement.onclick = function() {
  document.documentElement.requestPointerLock();
}
document.addEventListener('pointerlockchange', onLockChange, false);
document.addEventListener('mozpointerlockchange', onLockChange, false);

function onLockChange() {
  if (document.pointerLockElement === document.documentElement ||
      document.mozPointerLockElement === document.documentElement) {
    inst.style.display = "none";
    document.addEventListener("mousemove", updateMouse, false);
  } else {
    inst.style.display = "flex";
    document.removeEventListener("mousemove", updateMouse, false);
  }
}

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

var prevMouseLocation = {
  x: NaN, y: NaN,
}

var clamp = function(val, min, max) {
  return Math.min(Math.max(val, min), max);
}
var degToRad = function(deg) {
  return Math.PI * deg / 180;
}

var clampPosition = function(prev, position) {
  if (prev[2] > -1005 || position[0] <= 95) {
    position[0] = clamp(position[0], -95, 95);
    position[2] = clamp(position[2], -1195, -5);
  } else {
    position[0] = clamp(position[0], -95, 1095);
    position[2] = clamp(position[2], -1195, -1005);
  }

  return position;
}

var updateMouse = function(e) {
  var diffX = e.movementX;
  var diffY = e.movementY;

  camera.rotate(-diffY / 5, diffX / 5);
  camera.rotation = [clamp(camera.rotation[0], -89, 89), camera.rotation[1], camera.rotation[2]];
  camera.update(0);

  prevMouseLocation.x = e.screenX;
  prevMouseLocation.y = e.screenY;
}
var speed = 10;
var keyLoop = function() {
  var prevPos = camera.position.concat();
  var speedVal = speed / Math.cos(degToRad(camera.rotation[0]));

  if (up){
    camera.translateLocal(0, 0, -speedVal);
  }
  if (right){
    camera.translateLocal(speedVal, 0, 0);
  }
  if (down){
    camera.translateLocal(0, 0, speedVal);
  }
  if (left){
    camera.translateLocal(-speedVal, 0, 0);
  }
  camera.position = clampPosition(prevPos, [camera.position[0], 0, camera.position[2]]);
  camera.update(0);
  requestAnimationFrame(keyLoop);
}
keyLoop();
