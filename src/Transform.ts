import { vec3, quat } from 'gl-matrix';

class Transform {
  private _position: vec3;
  private _scale: vec3;
  private _rotation: vec3;
  private _perspective: number;

  public get position() { return this._position; }
  public get scale() { return this._scale; }
  public get rotation() { return this._rotation; }
  public get perspective() { return this._perspective; }

  public get cameraCSS() {
    const perspective = this._perspective;
    const rotation = this._rotation;

    // tslint:disable-next-line: max-line-length
    return `translateZ(${perspective}px) rotateY(${rotation[1]}deg) rotateZ(${rotation[2]}deg) rotateX(${rotation[0]}deg)`;
  }

  public get worldCSS() {
    const perspective = this._perspective;
    const position = this._position;

    return `translate3d(${-position[0]}px, ${-position[1]}px, ${-position[2] - perspective}px)`;
  }

  public set perspective(val: number) {
    this._perspective = val;
  }

  constructor() {
    this._position = vec3.create();
    this._scale = vec3.fromValues(1, 1, 1);
    this._rotation = vec3.create();
    this._perspective = 0;
  }

  public translate(x: number, y: number, z: number) {
    const transVec = vec3.fromValues(x, y, z);
    const rotation = this._rotation;
    const rotQuat = quat.create();
    quat.fromEuler(rotQuat, rotation[0], rotation[1], rotation[2]);
    quat.invert(rotQuat, rotQuat);
    vec3.transformQuat(transVec, transVec, rotQuat);

    vec3.add(this._position, this._position, transVec);
  }

  public absTranslate(x: number, y: number, z: number) {
    vec3.add(this._position, this._position, vec3.fromValues(x, y, z));
  }

  public rotateX(deg: number) {
    this._rotation[0] += deg;
  }

  public rotateY(deg: number) {
    this._rotation[1] += deg;
  }

  public rotateZ(deg: number) {
    this._rotation[2] += deg;
  }
}

export default Transform;
