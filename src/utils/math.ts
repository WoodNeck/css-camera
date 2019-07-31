import { mat4, quat, vec3 } from 'gl-matrix';
import { clamp } from './helper';

export function degToRad(deg: number): number {
  return Math.PI * deg / 180;
}

export function radToDeg(rad: number): number {
  return 180 * rad / Math.PI;
}

// From Three.js https://github.com/mrdoob/three.js/blob/dev/src/math/Euler.js
export function quatToEuler(q: quat): vec3 {
  const rotM = mat4.create();
  mat4.fromQuat(rotM, q);

  const m11 = rotM[0];
  const m12 = rotM[4];
  // const m13 = rotM[8];
  const m21 = rotM[1];
  const m22 = rotM[5];
  // const m23 = rotM[9];
  const m31 = rotM[2];
  const m32 = rotM[6];
  const m33 = rotM[10];

  const euler = vec3.create();

  // ZXY
  euler[0] = Math.asin(clamp(m32, -1, 1));
  if (Math.abs(m32) < 0.99999) {
    euler[1] = Math.atan2(-m31, m33);
    euler[2] = Math.atan2(-m12, m22);
  } else {
    euler[1] = 0;
    euler[2] = Math.atan2(m21, m11);
  }

  return euler.map(val => radToDeg(val)) as vec3;
}

export function translateMat(mat: mat4, vec: vec3): void {
  mat[12] += vec[0];
  mat[13] += vec[1];
  mat[14] += vec[2];
}

export function removeTranslate(mat: mat4): void {
  mat[12] = 0;
  mat[13] = 0;
  mat[14] = 0;
}
