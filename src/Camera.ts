import { vec3 } from 'gl-matrix';
import { getElement } from './utils/helper';

abstract class Camera {
  private _element: HTMLElement;
  private _fov: number;
  private _orthographic: boolean;

  public get element() { return this._element; }

  constructor(el: string | HTMLElement) {
    this._element = getElement(el);
  }

  public lookAt(target: [number, number, number]) {

  }
}

export default Camera;
