import { mat4, quat, vec3, glMatrix } from 'gl-matrix';
import { BASE_ELEMENT_NOT_EXIST, MUST_STRING_OR_ELEMENT } from '../constants/error';
import { Matrix4x4 } from '../types';

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
  const matrix = mat4.fromValues(...matrixVal);

  return matrix;
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

// From https://github.com/toji/gl-matrix/issues/329
export function quatToEuler(q: quat): vec3 {
  const x = q[0];
  const y = q[1];
  const z = q[2];
  const w = q[3];
  const x2 = x * x;
  const y2 = y * y;
  const z2 = z * z;
  const w2 = w * w;
  const unit = x2 + y2 + z2 + w2;
  const test = x * w - y * z;

  let out = vec3.create();
  if (test > glMatrix.EPSILON * unit) {
    // singularity at the north pole
    out[0] = Math.PI;
    out[1] = 2 * Math.atan2(y, x);
    out[2] = 0;
  } else if (test < -glMatrix.EPSILON * unit) {
    // singularity at the south pole
    out[0] = -Math.PI;
    out[1] = 2 * Math.atan2(y, x);
    out[2] = 0;
  } else {
    out[0] = Math.atan2(2 * (x * w + y * z), 1 - 2 * (x2 + y2));
    out[1] = Math.asin(2 * (x * z - w * y));
    out[2] = Math.atan2(2 * (x * y + z * w), 1 - 2 * (y2 + z2));
  }

  out = out.map(val => radToDeg(val)) as vec3;

  return out;
}
