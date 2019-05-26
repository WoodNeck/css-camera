import { BASE_ELEMENT_NOT_EXIST, MUST_STRING_OR_ELEMENT } from '../constants/error';

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
}

export function applyCSS(element: HTMLElement, cssObj: { [keys: string]: string }): void {
  Object.keys(cssObj).forEach(property => {
    (element.style as any)[property] = cssObj[property];
  });
}
