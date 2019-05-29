import { mat4 } from 'gl-matrix';
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
