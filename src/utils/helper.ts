import { mat4, vec3 } from 'gl-matrix';
import { ELEMENT_NOT_EXIST, MUST_STRING_OR_ELEMENT } from '../constants/error';
import { Matrix4x4, Offset } from '../types';

export const getElement = (el: string | HTMLElement, baseElement?: HTMLElement): HTMLElement => {
    if (typeof el === 'string') {
        const queryResult = baseElement
          ? baseElement.querySelector(el)
          : document.querySelector(el);
        if (!queryResult) {
            throw new Error(ELEMENT_NOT_EXIST(el));
        }
        return queryResult as HTMLElement;
    } else if (el.nodeName && el.nodeType === 1) {
        return el;
    } else {
        throw new Error(MUST_STRING_OR_ELEMENT(el));
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

export function clamp(val: number, min: number, max: number): number {
  return Math.max(Math.min(val, max), min);
}

export function assign(target: object, ...srcs: object[]): object {
  srcs.forEach(source => {
    Object.keys(source).forEach(key => {
      const value = (source as any)[key];
      (target as any)[key] = value;
    });
  });

  return target;
}
