import { mat4 } from 'gl-matrix';
import Transform from './Transform';
import { getElement, applyCSS, getTransformMatrix, findIndex } from './utils/helper';
import DEFAULT from './constants/default';
import { Matrix4x4 } from './types';
import { IdentityMatrix4x4 } from './constants/math';

abstract class Camera {
  private _element: HTMLElement;
  private _viewportEl: HTMLElement;
  private _cameraEl: HTMLElement;
  private _worldEl: HTMLElement;

  private _transform: Transform;

  public get transform() { return this._transform; }
  public get element() { return this._element; }
  public get viewportEl() { return this._viewportEl; }
  public get cameraEl() { return this._cameraEl; }

  constructor(el: string | HTMLElement) {
    this._element = getElement(el);
    this._transform = new Transform();

    const element = this._element;
    const viewport = document.createElement('div');
    applyCSS(viewport, DEFAULT.STYLE_VIEWPORT);

    const camera = viewport.cloneNode() as HTMLElement;
    const world = viewport.cloneNode() as HTMLElement;

    viewport.className = DEFAULT.CLASS.VIEWPORT;
    camera.className = DEFAULT.CLASS.CAMERA;
    world.className = DEFAULT.CLASS.WORLD;

    camera.appendChild(world);
    viewport.appendChild(camera);

    this._viewportEl = viewport;
    this._cameraEl = camera;
    this._worldEl = world;

    // EL's PARENT -> VIEWPORT -> CAMERA -> WORLD -> EL
    element.parentElement!.insertBefore(viewport, element);
    world.appendChild(element);
  }

  public focus(element: HTMLElement, worldMatrix: Matrix4x4 = IdentityMatrix4x4) {
    const focusMatrix = this.getFocusMatrix(element, worldMatrix);

    console.log(focusMatrix);
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

  public setPerspective(val: number) {
    applyCSS(this._viewportEl, { perspective: `${val}px` });
    this._transform.perspective = val;
    this.update();
  }

  public update() {
    const transform = this._transform;

    this._cameraEl.style.transform = transform.cameraCSS;
    this._worldEl.style.transform = transform.worldCSS;
  }
}

export default Camera;
