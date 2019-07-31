import { mat4, vec3, quat } from 'gl-matrix';
import Transform from './Transform';
import { getElement, applyCSS, getTransformMatrix, findIndex, getOffsetFromParent, getRotateOffset } from './utils/helper';
import { quatToEuler, translateMat, removeTranslate } from './utils/math';
import DEFAULT from './constants/default';
import { Offset } from './types';

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

  public set perspective(val: number) {
    this._transform.perspective = val;
  }

  constructor(el: string | HTMLElement) {
    this._element = getElement(el);
    this._transform = new Transform();

    const element = this._element;
    const viewport = document.createElement('div');
    const camera = viewport.cloneNode() as HTMLElement;
    const world = viewport.cloneNode() as HTMLElement;

    viewport.className = DEFAULT.CLASS.VIEWPORT;
    camera.className = DEFAULT.CLASS.CAMERA;
    world.className = DEFAULT.CLASS.WORLD;

    applyCSS(viewport, DEFAULT.STYLE.VIEWPORT);
    applyCSS(camera, DEFAULT.STYLE.CAMERA);
    applyCSS(world, DEFAULT.STYLE.WORLD);

    camera.appendChild(world);
    viewport.appendChild(camera);

    this._viewportEl = viewport;
    this._cameraEl = camera;
    this._worldEl = world;

    // EL's PARENT -> VIEWPORT -> CAMERA -> WORLD -> EL
    element.parentElement!.insertBefore(viewport, element);
    world.appendChild(element);
  }

  public focus(element: HTMLElement) {
    const focusMatrix = this.getFocusMatrix(element);

    const rotation = quat.create();
    const translation = vec3.create();
    mat4.getRotation(rotation, focusMatrix);
    mat4.getTranslation(translation, focusMatrix);

    const eulerAngle = quatToEuler(rotation);

    vec3.negate(eulerAngle, eulerAngle);

    this.transform.rotation = eulerAngle;
    this.transform.position = translation;
  }

  public getFocusMatrix(element: HTMLElement): mat4 {
    const elements: HTMLElement[] = [];
    while (element) {
      elements.push(element);
      if (element === this._element) break;
      element = element.parentElement!;
    }

    // Order by shallow to deep
    elements.reverse();

    const elStyles = elements.map(el => window.getComputedStyle(el));

    // Find first element that transform-style is not preserve-3d
    // As all childs of that element is affected by its matrix
    const firstFlatIndex = findIndex(elStyles, style => style.transformStyle !== 'preserve-3d');
    if (firstFlatIndex > 0) { // el doesn't have to be preserve-3d'ed
      elStyles.splice(firstFlatIndex + 1);
    }

    let parentOffset: Offset = {
      left: 0,
      top: 0,
      width: this.cameraEl.offsetWidth,
      height: this.cameraEl.offsetHeight,
    };

    const matrix = mat4.create();
    mat4.identity(matrix);

    // Center of screen as origin
    const centerPos = vec3.fromValues(0, 0, 0);

    elStyles.forEach((style, idx) => {
      const el = elements[idx];
      const currentOffset = {
        left: el.offsetLeft,
        top: el.offsetTop,
        width: el.offsetWidth,
        height: el.offsetHeight,
      };
      const transformMat = getTransformMatrix(style);
      const rotateOffset = getRotateOffset(style, currentOffset);
      const offsetFromParent = getOffsetFromParent(currentOffset, parentOffset);

      const transformOrigin = vec3.create();
      const rotScaleMat = mat4.clone(transformMat);
      removeTranslate(rotScaleMat);

      vec3.negate(rotateOffset, rotateOffset);
      translateMat(matrix, rotateOffset);
      vec3.add(transformOrigin, transformOrigin, rotateOffset);

      mat4.mul(matrix, matrix, transformMat);
      vec3.transformMat4(transformOrigin, transformOrigin, rotScaleMat);

      vec3.negate(rotateOffset, rotateOffset);
      translateMat(matrix, rotateOffset);
      vec3.add(transformOrigin, transformOrigin, rotateOffset);

      vec3.add(centerPos, centerPos, offsetFromParent);
      vec3.add(centerPos, centerPos, transformOrigin);

      parentOffset = currentOffset;
    });

    translateMat(matrix, centerPos);

    const rotation = quat.create();
    const perspective = vec3.fromValues(0, 0, this.transform.perspective);
    mat4.getRotation(rotation, matrix);
    vec3.transformQuat(perspective, perspective, rotation);

    translateMat(matrix, perspective);

    return matrix;
  }

  public translate(x: number, y: number, z: number) {
    const transform = this._transform;
    const position = transform.position;
    const rotation = transform.rotation;

    const transVec = vec3.fromValues(x, y, z);
    const rotQuat = quat.create();
    quat.fromEuler(rotQuat, rotation[0], rotation[1], rotation[2]);
    quat.invert(rotQuat, rotQuat);
    vec3.transformQuat(transVec, transVec, rotQuat);

    vec3.add(position, position, transVec);
  }

  public absTranslate(x: number, y: number, z: number) {
    this._transform.position = vec3.fromValues(x, y, z);
  }

  public rotateX(deg: number) {
    this._transform.rotation[0] += deg;
  }

  public rotateY(deg: number) {
    this._transform.rotation[1] += deg;
  }

  public rotateZ(deg: number) {
    this._transform.rotation[2] += deg;
  }

  public update() {
    const transform = this._transform;

    applyCSS(this._viewportEl, { perspective: `${transform.perspective}px` });
    this._cameraEl.style.transform = transform.cameraCSS;
    this._worldEl.style.transform = transform.worldCSS;
  }
}

export default Camera;
