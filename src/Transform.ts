import { mat4, vec3, quat } from 'gl-matrix';
import DEFAULT from './constants/default';
import { TRANSFORM_MODE } from './constants/enums';

class Transform {
  private _matrix: mat4;
  private _position: vec3;
  private _scale: vec3;
  private _rotation: quat;
  private _mode: TRANSFORM_MODE;

  public get matrix() { return this._matrix; }
  public get position() { return this._position; }
  public get scale() { return this._scale; }
  public get rotation() { return this._rotation; }
  public get mode() { return this._mode; }

  public set matrix(val: mat4) {
    this._matrix = val;
    mat4.getTranslation(this._position, this._matrix);
    mat4.getScaling(this._scale, this._matrix);
    mat4.getRotation(this._rotation, this._matrix);
  }

  public set position(val: vec3) {
    this._position = val;
    this._recalcMatrix();
  }

  public set scale(val: vec3) {
    this._scale = val;
    this._recalcMatrix();
  }

  public set rotation(val: quat) {
    this._rotation = val;
    this._recalcMatrix();
  }

  constructor() {
    this._matrix = mat4.create();
    this._position = vec3.create();
    this._scale = vec3.create();
    this._rotation = quat.create();
    this._mode = DEFAULT.TRANSFORM_MODE;
  }

  public lookAt(x: number, y: number, z: number) {

  }

  private _recalcMatrix() {

  }
}

export default Transform;
