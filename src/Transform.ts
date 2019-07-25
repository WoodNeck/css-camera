import { vec3 } from 'gl-matrix';

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

    // Rotate in order of Z - X - Y
    // tslint:disable-next-line: max-line-length
    return `translateZ(${perspective}px) rotateY(${rotation[1]}deg) rotateX(${rotation[0]}deg) rotateZ(${rotation[2]}deg)`;
  }

  public get worldCSS() {
    const position = this._position;

    return `translate3d(${-position[0]}px, ${-position[1]}px, ${-position[2]}px)`;
  }

  public set position(val: vec3) { this._position = val; }
  public set scale(val: vec3) { this._scale = val; }
  public set rotation(val: vec3) { this._rotation = val; }
  public set perspective(val: number) { this._perspective = val; }

  constructor() {
    this._position = vec3.create();
    this._scale = vec3.fromValues(1, 1, 1);
    this._rotation = vec3.create();
    this._perspective = 0;
  }
}

export default Transform;
