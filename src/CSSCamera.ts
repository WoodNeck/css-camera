import { mat4, vec3, quat } from 'gl-matrix';
import { getElement, applyCSS, getTransformMatrix, findIndex, getOffsetFromParent, getRotateOffset } from './utils/helper';
import { quatToEuler } from './utils/math';
import DEFAULT from './constants/default';
import { Offset } from './types';

class CSSCamera {
  private _element: HTMLElement;
  private _viewportEl: HTMLElement;
  private _cameraEl: HTMLElement;
  private _worldEl: HTMLElement;

  private _position: vec3;
  private _scale: vec3;
  private _rotation: vec3;
  private _perspective: number;
  private _perspectiveOffset: number;

  /**
   * Current version of CSSCamera.
   * ```
   * console.log(CSSCamera.VERSION); // ex) 1.0.0
   * ```
   * @type {string}
   */
  static get VERSION() { return '#__VERSION__#'; }

  /**
   * The element provided in the constructor.
   * ```
   * const camera = new CSSCamera(el);
   * console.log(camera.element === el); // true
   * ```
   * @type {HTMLElement}
   */
  public get element() { return this._element; }

  /**
   * The reference of viewport DOM element.
   * @type {HTMLElement}
   */
  public get viewportEl() { return this._viewportEl; }

  /**
   * The reference of camera DOM element.
   * @type {HTMLElement}
   */
  public get cameraEl() { return this._cameraEl; }

  /**
   * The reference of world DOM element.
   * @type {HTMLElement}
   */
  public get worldEl() { return this._worldEl; }

  /**
   * The current position as number array([x, y, z]).
   * ```
   * const camera = new CSSCamera(el);
   * console.log(camera.position); // [0, 0, 0];
   * camera.position = [0, 0, 300];
   * console.log(camera.position); // [0, 0, 300];
   * ```
   * @type {number[]}
   */
  public get position() { return [...this._position]; }

  /**
   * The current scale as number array([x, y, z]).
   * ```
   * const camera = new CSSCamera(el);
   * console.log(camera.scale); // [1, 1, 1];
   * camera.scale = [5, 1, 1];
   * console.log(camera.scale); // [5, 1, 1];
   * ```
   * @type {number[]}
   */
  public get scale() { return [...this._scale]; }

  /**
   * The current euler rotation as number array([x, y, z]).
   * ```
   * const camera = new CSSCamera(el);
   * console.log(camera.rotation); // [0, 0, 0];
   * camera.rotation = [90, 0, 0];
   * console.log(camera.rotation); // [90, 0, 0];
   * ```
   * @type {number[]}
   */
  public get rotation() { return [...this._rotation]; }

  /**
   * The current quaternion rotation as number array([x, y, z, w]).
   * ```
   * const camera = new CSSCamera(el);
   * console.log(camera.quaternion); // [0, 0, 0, 1];
   * camera.rotation = [90, 0, 0];
   * console.log(camera.quaternion); // [0.7071067690849304, 0, 0, 0.7071067690849304];
   * camera.quaternion = [0, 0, 0, 1];
   * console.log(camera.rotation); // [0, -0, 0];
   * ```
   * @type {number[]}
   */
  public get quaternion() {
    const r = this._rotation;
    const quaternion = quat.fromEuler(quat.create(), r[0], r[1], r[2]);

    return [...quaternion];
  }

  /**
   * The current perspective value that will be applied to viewport element.
   * ```
   * const camera = new CSSCamera(el);
   * camera.perspective = 300;
   * console.log(camera.perspective); // 300
   * ```
   * @type {number}
   */
  public get perspective() { return this._perspective; }

  /**
   * The current perspective offset value that will be applied to camera element.
   * ```
   * const camera = new CSSCamera(el);
   * camera.perspective = 300;
   * console.log(camera.cameraCSS); // scale3d(1, 1, 1) translateZ(300px) rotateX(0deg) rotateY(0deg) rotateZ(0deg);
   * camera.perspectiveOffset = 100;
   * console.log(camera.cameraCSS); // scale3d(1, 1, 1) translateZ(400px) rotateX(0deg) rotateY(0deg) rotateZ(0deg);
   * ```
   * @type {number}
   */
  public get perspectiveOffset() { return this._perspectiveOffset; }

  /**
   * CSS string can be applied to camera element based on current transform.
   * ```
   * const camera = new CSSCamera(el);
   * camera.perspective = 300;
   * console.log(camera.cameraCSS); // scale3d(1, 1, 1) translateZ(300px) rotateX(0deg) rotateY(0deg) rotateZ(0deg);
   * ```
   * @type {string}
   */
  public get cameraCSS() {
    const perspective = this._perspective;
    const perspectiveOffset = this._perspectiveOffset;
    const rotation = this._rotation;
    const scale = this._scale;

    // Rotate in order of Z - Y - X
    // tslint:disable-next-line: max-line-length
    return `scale3d(${scale[0]}, ${scale[1]}, ${scale[2]}) translateZ(${perspective + perspectiveOffset}px) rotateX(${rotation[0]}deg) rotateY(${rotation[1]}deg) rotateZ(${rotation[2]}deg)`;
  }

  /**
   * CSS string can be applied to world element based on current transform.
   * ```
   * const camera = new CSSCamera(el);
   * console.log(camera.worldCSS); // "translate3d(0px, 0px, 0px)";
   * camera.translate(0, 0, 300);
   * console.log(camera.worldCSS); // "translate3d(0px, 0px, -300px)";
   * ```
   * @type {string}
   */
  public get worldCSS() {
    const position = this._position;

    return `translate3d(${-position[0]}px, ${-position[1]}px, ${-position[2]}px)`;
  }

  public set position(val: number[]) { this._position = vec3.fromValues(val[0], val[1], val[2]); }
  public set scale(val: number[]) { this._scale = vec3.fromValues(val[0], val[1], val[2]); }
  public set rotation(val: number[]) { this._rotation = vec3.fromValues(val[0], val[1], val[2]); }
  public set quaternion(val: number[]) { this._rotation = quatToEuler(quat.fromValues(val[0], val[1], val[2], val[3])); }
  public set perspective(val: number) { this._perspective = val; }
  public set perspectiveOffset(val: number) { this._perspectiveOffset = val; }

  /**
   * Create new CSSCamera with given element / selector.
   * @param - The element to apply camera. Can be HTMLElement or CSS selector.
   */
  constructor(el: string | HTMLElement) {
    this._element = getElement(el);
    this._position = vec3.create();
    this._scale = vec3.fromValues(1, 1, 1);
    this._rotation = vec3.create();
    this._perspective = 0;
    this._perspectiveOffset = 0;

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

  /**
   * Focus a camera to given element.
   * After focus, element will be in front of camera with no rotation applied.
   * Also, it will have original width / height if neither [scale](#scale) nor [perspectiveOffset](#perspectiveOffset) is applied.
   * This method won't work if any of element's parent except camera element has scale applied.
   * @param - The element to focus. Can be HTMLElement or CSS selector.
   * @return {CSSCamera} The instance itself
   */
  public focus(el: string | HTMLElement): this {
    const element = getElement(el);
    const focusMatrix = this._getFocusMatrix(element);

    const rotation = quat.create();
    const translation = vec3.create();
    mat4.getRotation(rotation, focusMatrix);
    mat4.getTranslation(translation, focusMatrix);

    const eulerAngle = quatToEuler(rotation);

    vec3.negate(eulerAngle, eulerAngle);

    this._rotation = eulerAngle;
    this._position = translation;
    return this;
  }

  /**
   * Translate a camera in its local coordinate space.
   * For example, `camera.translateLocal(0, 0, -300)` will always move camera to direction where it's seeing.
   * @param - Amount of horizontal translation, in px.
   * @param - Amount of vertical translation, in px.
   * @param - Amount of translation in view direction, in px.
   * @return {CSSCamera} The instance itself
   */
  public translateLocal(x: number = 0, y: number = 0, z: number = 0): this {
    const position = this._position;
    const rotation = this._rotation;

    const transVec = vec3.fromValues(x, y, z);
    const rotQuat = quat.create();
    quat.fromEuler(rotQuat, -rotation[0], -rotation[1], -rotation[2]);
    vec3.transformQuat(transVec, transVec, rotQuat);

    vec3.add(position, position, transVec);
    return this;
  }

  /**
   * Translate a camera in world(absolute) coordinate space.
   * @param - Amount of translation in x axis, in px.
   * @param - Amount of translation in y axis, in px.
   * @param - Amount of translation in z axis, in px.
   * @return {CSSCamera} The instance itself
   */
  public translate(x: number = 0, y: number = 0, z: number = 0): this {
    vec3.add(this._position, this._position, vec3.fromValues(x, y, z));

    return this;
  }

  /**
   * Rotate a camera in world(absolute) coordinate space.
   * @param - Amount of rotation in x axis, in degree.
   * @param - Amount of rotation in y axis, in degree.
   * @param - Amount of rotation in z axis, in degree.
   * @return {CSSCamera} The instance itself
   */
  public rotate(x: number = 0, y: number = 0, z: number = 0): this {
    vec3.add(this._rotation, this._rotation, vec3.fromValues(x, y, z));

    return this;
  }

  /**
   * Updates a camera CSS with given duration.
   * Every other camera transforming properties / methods will be batched until this method is called.
   * ```
   * const camera = new CSSCamera(el);
   * console.log(camera.cameraEl.style.transform); // ''
   *
   * camera.perspective = 300;
   * camera.translate(0, 0, 300);
   * camera.rotate(0, 90, 0);
   * console.log(camera.cameraEl.style.transform); // '', Not changed!
   *
   * await camera.update(1000); // Camera style is updated.
   * console.log(camera.cameraEl.style.transform); // scale3d(1, 1, 1) translateZ(300px) rotateX(0deg) rotateY(90deg) rotateZ(0deg)
   * ```
   * @param - Transition duration in ms.
   * @return {Promise<CSSCamera>} A promise resolving instance itself
   */
  public async update(duration: number = 0): Promise<this> {
    const transition = duration > 0 ? `transform ${duration}ms` : '';

    applyCSS(this._viewportEl, { perspective: `${this.perspective}px` });
    applyCSS(this._cameraEl, {
      transition,
      transform: this.cameraCSS,
    });
    applyCSS(this._worldEl, {
      transition,
      transform: this.worldCSS,
    });

    return new Promise(resolve => {
      setTimeout(() => {
        applyCSS(this._cameraEl, {
          transition: '',
        });
        applyCSS(this._worldEl, {
          transition: '',
        });
        resolve();
      }, duration);
    });
  }

  private _getFocusMatrix(element: HTMLElement): mat4 {
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
      width: this.viewportEl.offsetWidth,
      height: this.viewportEl.offsetHeight,
    };

    // Accumulated rotation
    const accRotation = quat.identity(quat.create());
    // Assume center of screen as (0, 0, 0)
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
      const offsetFromParent = getOffsetFromParent(currentOffset, parentOffset);
      vec3.transformQuat(offsetFromParent, offsetFromParent, accRotation);

      vec3.add(centerPos, centerPos, offsetFromParent);

      const rotateOffset = getRotateOffset(style, currentOffset);
      vec3.transformQuat(rotateOffset, rotateOffset, accRotation);

      const transformOrigin = vec3.clone(centerPos);
      vec3.add(transformOrigin, transformOrigin, rotateOffset);

      const centerFromOrigin = vec3.create();
      vec3.sub(centerFromOrigin, centerPos, transformOrigin);

      const invAccRotation = quat.invert(quat.create(), accRotation);
      vec3.transformQuat(centerFromOrigin, centerFromOrigin, invAccRotation);
      vec3.transformMat4(centerFromOrigin, centerFromOrigin, transformMat);
      vec3.transformQuat(centerFromOrigin, centerFromOrigin, accRotation);

      const newCenterPos = vec3.add(vec3.create(), transformOrigin, centerFromOrigin);
      const rotation = mat4.getRotation(quat.create(), transformMat);

      vec3.copy(centerPos, newCenterPos);
      quat.mul(accRotation, accRotation, rotation);
      parentOffset = currentOffset;
    });

    const perspective = vec3.fromValues(0, 0, this.perspective);
    vec3.transformQuat(perspective, perspective, accRotation);
    vec3.add(centerPos, centerPos, perspective);

    const matrix = mat4.create();
    mat4.fromRotationTranslation(matrix, accRotation, centerPos);

    return matrix;
  }
}

export default CSSCamera;
