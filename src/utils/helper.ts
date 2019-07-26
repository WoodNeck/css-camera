import { mat4, quat, vec3 } from 'gl-matrix';
import { BASE_ELEMENT_NOT_EXIST, MUST_STRING_OR_ELEMENT } from '../constants/error';
import { Matrix4x4, Offset } from '../types';

export const getElement = (el: string | HTMLElement): HTMLElement => {
    if (typeof el === 'string') {
        const queryResult = document.querySelector(el);
        if (!queryResult) {
            throw new Error(BASE_ELEMENT_NOT_EXIST);
        }
        return queryResult as HTMLElement;
    } else if (el.nodeName && el.nodeType === 1) {
        return el;
    } else {
        throw new Error(MUST_STRING_OR_ELEMENT);
    }
};

export function applyCSS(element: HTMLElement, cssObj: { [keys: string]: string }): void {
  Object.keys(cssObj).forEach(property => {
    (element.style as any)[property] = cssObj[property];
  });
}

export function getTransformMatrix(elStyle: CSSStyleDeclaration): mat4 {
  const trVal = elStyle.getPropertyValue('transform');
  const transformStr = /\(((\s|\S)+)\)/.exec(trVal);
  const matrixVal = transformStr
    ? transformStr[1].split(',').map(val => parseFloat(val)) as Matrix4x4
    : [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1] as Matrix4x4;
  if (matrixVal.length === 16 ) {
    return mat4.fromValues(...matrixVal);
  } else {
    // Convert 2d matrix(length 6) to 3d
    const matrix = mat4.create();
    mat4.identity(matrix);

    matrix[0] = matrixVal[0];
    matrix[1] = matrixVal[1];
    matrix[4] = matrixVal[2];
    matrix[5] = matrixVal[3];
    matrix[12] = matrixVal[4];
    matrix[13] = matrixVal[5];

    return matrix;
  }
}

export function getOffsetFromParent(currentOffset: Offset, parentOffset: Offset): vec3 {
  const offsetLeft = currentOffset.left + (currentOffset.width - parentOffset.width) / 2;
  const offsetTop = currentOffset.top + (currentOffset.height - parentOffset.height) / 2;

  return vec3.fromValues(offsetLeft, offsetTop, 0);
}

export function getRotateOffset(elStyle: CSSStyleDeclaration, currentOffset: Offset): vec3 {
  const axis = (elStyle.transformOrigin as string)
    .split(' ')
    .map(str => parseFloat(str.substring(0, str.length - 2)));
  const ax = axis[0] - currentOffset.width / 2;
  const ay = axis[1] - currentOffset.height / 2;

  return vec3.fromValues(ax, ay, 0);
}

export function findIndex<T>(iterable: T[], callback: (el: T) => boolean): number {
  for (let i = 0; i < iterable.length; i += 1) {
    const element = iterable[i];
    if (element && callback(element)) {
      return i;
    }
  }

  return -1;
}

// return [0, 1, ...., max - 1]
export function range(max: number): number[] {
  const counterArray: number[] = [];
  for (let i = 0; i < max; i += 1) {
    counterArray[i] = i;
  }
  return counterArray;
}

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

export function clamp(val: number, min: number, max: number): number {
  return Math.max(Math.min(val, max), min);
}
