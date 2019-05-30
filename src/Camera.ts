import { mat4 } from 'gl-matrix';
import Transform from './Transform';
import { getElement, applyCSS, getTransformMatrix, findIndex } from './utils/helper';
import DEFAULT from './constants/default';
import { Matrix4x4 } from './types';
import { IdentityMatrix4x4 } from './constants/math';

abstract class Camera {
  private _element: HTMLElement;
  private _viewport: HTMLElement;
  private _camera: HTMLElement;

  private _transform: Transform;

  private _fov: number;
  private _orthographic: boolean;

  public get transform() { return this._transform; }
  public get element() { return this._element; }

  constructor(el: string | HTMLElement, isOrthoGraphic: boolean = DEFAULT.ORTHOGRAPHIC) {
    this._element = getElement(el);
    this._fov = DEFAULT.FOV;
    this._orthographic = isOrthoGraphic;
    this._transform = new Transform();

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

    this._init();
  }

  public focus(element: HTMLElement, worldMatrix: Matrix4x4 = IdentityMatrix4x4) {
    const focusMatrix = this.getFocusMatrix(element, worldMatrix);
    const invMatrix = mat4.create();
    mat4.invert(invMatrix, focusMatrix);

    this._camera.style.transform = mat4.str(invMatrix).replace(/mat4/, 'matrix3d');
  }

  public getFocusMatrix(element: HTMLElement, worldMatrix: Matrix4x4 = IdentityMatrix4x4): mat4 {
    const elements = [];
    while (element) {
      elements.push(element);
      if (element === this._element) break;
      element = element.parentElement!;
    }

    // Order by shallow to deep
    elements.reverse();

    const elStyles = elements.map(el => window.getComputedStyle(el));
    // From this._element to element's first parent
    // Find most element that transform-style is not preserve-3d
    // As all childs of that element is affected by its matrix
    const firstFlatIndex = findIndex(elStyles, style => style.transformStyle !== 'preserve-3d');
    if (firstFlatIndex >= 0) {
      elStyles.splice(firstFlatIndex + 1);
    }

    let matrix = mat4.fromValues(...worldMatrix);
    elStyles.forEach(style => {
      matrix = mat4.mul(matrix, matrix, getTransformMatrix(style)) ;
    });

    return matrix;
  }

  public setFOV(fov: number) {
    this._fov = fov;

    this._updatePerspective();
  }

  private _init() {
    this._updatePerspective();
    this._listenResize();
  }

  private _updatePerspective() {
    const perspective = Math.abs(0.25 * this._element.getBoundingClientRect().height /  Math.tan(this._fov * 0.5));
    console.log('PERS', perspective);

    applyCSS(this._viewport, { perspective: `${perspective}px` });
  }

  private _listenResize() {
    window.addEventListener('resize', () => {
      this._updatePerspective();
    });
  }
}

export default Camera;
