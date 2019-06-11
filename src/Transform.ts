import { mat4, vec3, quat } from 'gl-matrix';
import { degToRad } from './utils/helper';

class Transform {
  private _position: vec3;
  private _scale: vec3;
  private _rotation: quat;
  private _perspective: number;

  public get position() { return this._position; }
  public get scale() { return this._scale; }
  public get rotation() { return this._rotation; }
  public get perspective() { return this._perspective; }

  public get cameraMatrix() {
    const mat = mat4.create();

    mat4.fromRotationTranslationScale(
      mat,
      this._rotation,
      vec3.create(),
      this._scale,
    );

    mat4.translate(mat, mat, vec3.fromValues(0, 0, -this._perspective));

    return mat;
  }

  public get worldMatrix() {
    const mat = mat4.create();

    const position = vec3.create();
    vec3.add(position, this._position, vec3.fromValues(0, 0, this._perspective));

    mat4.fromTranslation(mat, position);

    return mat;
  }

  public set perspective(val: number) {
    this._perspective = val;
  }

  constructor() {
    this._position = vec3.create();
    this._scale = vec3.fromValues(1, 1, 1);
    this._rotation = quat.create();
    this._perspective = 0;
  }

  public translate(x: number, y: number, z: number) {
    vec3.add(this._position, this._position, vec3.fromValues(x, y, z));
  }

  public rotateX(deg: number) {
    quat.rotateX(this._rotation, this._rotation, degToRad(deg));
  }

  public rotateY(deg: number) {
    quat.rotateY(this._rotation, this._rotation, degToRad(deg));
  }

  public rotateZ(deg: number) {
    quat.rotateZ(this._rotation, this._rotation, degToRad(deg));
  }
}

export default Transform;
