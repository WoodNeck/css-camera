import { BASE_ELEMENT_NOT_EXIST, MUST_STRING_OR_ELEMENT } from './constants/error';

class Camera {
  private _element: HTMLElement;

  public get element() { return this._element; }

  constructor(el: string | HTMLElement) {
    if (typeof el === "string") {
      const queryResult = document.querySelector(el);
      if (!queryResult) {
        throw new Error(BASE_ELEMENT_NOT_EXIST);
      }
      this._element = queryResult as HTMLElement;
    } else if (el.nodeName && el.nodeType === 1) {
      this._element = el;
    } else {
      throw new Error(MUST_STRING_OR_ELEMENT);
    }
  }
}

export default Camera;
