import DEFAULT from './constants/default';
import { getElement, applyCSS } from './utils/helper';

abstract class Camera {
  private _element: HTMLElement;
  private _viewport: HTMLElement;
  private _camera: HTMLElement;

  private _fov: number;
  private _orthographic: boolean;

  public get element() { return this._element; }

  constructor(el: string | HTMLElement, isOrthoGraphic: boolean = DEFAULT.ORTHOGRAPHIC) {
    this._element = getElement(el);
    this._fov = DEFAULT.FOV;
    this._orthographic = isOrthoGraphic;

    const element = this._element;
    const viewport = document.createElement('div');
    applyCSS(viewport, DEFAULT.STYLE_VIEWPORT);

    const camera = viewport.cloneNode() as HTMLElement;
    viewport.appendChild(camera);

    this._viewport = viewport;
    this._camera = camera;

    // EL's PARENT -> VIEWPORT -> CAMERA -> EL
    element.parentElement!.insertBefore(viewport, element);
    camera.appendChild(element);

    this._updatePerspective();
  }

  public lookAt(target: [number, number, number]) {

  }

  public setFOV(fov: number) {
    this._fov = fov;

    this._updatePerspective();
  }

  private _updatePerspective() {
    const perspective = Math.abs(0.25 * this._element.getBoundingClientRect().height /  Math.tan(this._fov * 0.5));

    console.log(perspective);
    applyCSS(this._viewport, { perspective: `${perspective}px` });
  }
}

export default Camera;
