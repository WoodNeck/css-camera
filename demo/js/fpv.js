const windowHeight = window.innerHeight;
const camera = new CSSCamera("#space", {
  position: [0, 0, -10],
  perspective: windowHeight / 2,
});

let zone = 0;
let rotate = 0;
const inst = document.querySelector("#inst");

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

let up = false;
let right = false;
let down = false;
let left = false;

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

const prevMouseLocation = {
  x: NaN, y: NaN,
}

const clamp = function(val, min, max) {
  return Math.min(Math.max(val, min), max);
}
const degToRad = function(deg) {
  return Math.PI * deg / 180;
}

const clampPosition0 = function(prev, position) {
  // Long Corridor
  if (position[0] <= 90 || (prev[0] <= 90 && prev[2] > -1010)) {
    position[0] = clamp(position[0], -90, 90);
    position[2] = clamp(position[2], -1190, -10);
  }
  // Top
  else if (prev[2] <= -1010) {
    position[0] = clamp(position[0], -90, 490);
    if (prev[0] > 90 && prev[0] < 310) {
      position[2] = clamp(position[2], -1190, -1010);
    } else {
      position[2] = clamp(position[2], -1190, -10);
    }
  }
  // Right
  else if (position[0] >= 310 || (prev[0] >= 310 && prev[2] > -1010)) {
    position[0] = clamp(position[0], 310, 490);
    position[2] = clamp(position[2], -1190, -610);
  }

  return position;
}

const clampPosition1 = function(prev, position) {
  position[0] = clamp(position[0], 610, 1190);
  position[2] = clamp(position[2], -1190, -610);

  if (prev[0] <= 790 && (prev[2] <= -790 && prev[2] > -1010)) {
    position[0] = clamp(position[0], 610, 790);
  }
  else if (prev[2] <= -1010) {
    if (prev[0] > 790 && prev[0] < 1010) {
      position[2] = clamp(position[2], -1190, -1010);
    } else {
      position[2] = clamp(position[2], -1190, -610);
    }
  }
  else if (prev[0] >= 1010  && (prev[2] <= -790 && prev[2] > -1010)) {
    position[0] = clamp(position[0], 1010, 1190);
  }
  else {
    if (prev[0] > 790 && prev[0] < 1010) {
      position[2] = clamp(position[2], -790, -610);
    } else {
      position[2] = clamp(position[2], -1190, -610);
    }
  }

  return position;
}

const clampPosition2 = function(prev, position) {
  position[0] = clamp(position[0], 1310, 1890);
  position[2] = clamp(position[2], -1790, -610);

  // Long Corridor
  if (position[0] <= 1490 || (prev[0] <= 1490 && prev[2] < -790)) {
    position[0] = clamp(position[0], 1310, 1490);
    position[2] = clamp(position[2], -1790, -610);
  }
  // Bottom
  else if (prev[2] >= -790) {
    if (prev[0] > 1490 && prev[0] < 1710) {
      position[2] = clamp(position[2], -790, -610);
    } else {
      position[2] = clamp(position[2], -1790, -610);
    }
  }
  // Right
  else if (position[0] >= 310 || (prev[0] >= 310 && prev[2] > -1010)) {
    position[0] = clamp(position[0], 310, 490);
    position[2] = clamp(position[2], -1190, -610);
  }

  return position;
}

const checkZone = function(prevPos) {
  const newPos = camera.position;
  // Zone 0 to 1
  if (zone === 0 && newPos[0] > 310 && prevPos[2] <= -980 && newPos[2] > -980) {
    camera.translate(700, 0, 0);
    zone = 1;
    rotate = 0;
  } else if (zone === 1 && newPos[0] > 1010) {
    if (prevPos[2] <= -980 && newPos[2] > -980) {
      rotate += 1;
    } else if (prevPos[2] > -980 && newPos[2] <= -980) {
      rotate -= 1;
    }
    if (rotate < 0) {
      camera.translate(-700, 0, 0);
      zone = 0;
    }
  } else if (zone === 1 && newPos[2] >= -790) {
    if (prevPos[0] > 980 && newPos[0] <= 980) {
      if (rotate > 5) {
        camera.translate(700, 0, 0);
        zone = 2;
      }
    }
  } else if (zone === 2 && newPos[2] >= -790) {
    if (prevPos[0] < 1680 && newPos[0] >= 1680) {
      camera.translate(-700, 0, 0);
      zone = 1;
    }
  }
}

const updateMouse = function(e) {
  const diffX = e.movementX;
  const diffY = e.movementY;

  camera.rotate(-diffY / 5, diffX / 5);
  camera.rotation = [clamp(camera.rotation[0], -85, 85), camera.rotation[1], camera.rotation[2]];
  camera.update(0);

  prevMouseLocation.x = e.screenX;
  prevMouseLocation.y = e.screenY;
}
const speed = 5;
const keyLoop = function() {
  const prevPos = camera.position.concat();
  const speedVal = speed / Math.cos(degToRad(camera.rotation[0]));

  if (up){
    camera.translateLocal(0, 0, -speedVal);
  }
  if (right){
    camera.translateLocal(speed, 0, 0);
  }
  if (down){
    camera.translateLocal(0, 0, speedVal);
  }
  if (left){
    camera.translateLocal(-speed, 0, 0);
  }
  var newPos = [camera.position[0], 0, camera.position[2]];
  camera.position = zone === 0
    ? clampPosition0(prevPos, newPos)
    : zone === 1
      ? clampPosition1(prevPos, newPos)
      : clampPosition2(prevPos, newPos);
  checkZone(prevPos);
  camera.update(0);
  requestAnimationFrame(keyLoop);
}
keyLoop();
