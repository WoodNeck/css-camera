import { mat4, vec3, quat } from 'gl-matrix';

import Camera from './Camera';
import DEFAULT from './constants/default';
import { TRANSFORM_MODE } from './constants/enums';
import { range, degToRad } from './utils/helper';

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
    this._scale = vec3.fromValues(1, 1, 1);
    this._rotation = quat.create();
    this._mode = DEFAULT.TRANSFORM_MODE;
  }

  public translate(x: number, y: number, z: number) {
    mat4.translate(this._matrix, this._matrix, [x, y, z]);
    mat4.getTranslation(this._position, this._matrix);
  }

  public rotateX(deg: number) {
    const matrix = mat4.create();
    mat4.rotateX(matrix, this._noTranslateMatrix, degToRad(deg));
    mat4.translate(matrix, matrix, this._position);
    this.matrix = matrix;
  }

  public rotateY(deg: number) {
    const matrix = mat4.create();
    mat4.rotateY(matrix, this._noTranslateMatrix, degToRad(deg));
    mat4.translate(matrix, matrix, this._position);
    this.matrix = matrix;
  }

  public rotateZ(deg: number) {
    const matrix = mat4.create();
    mat4.rotateZ(matrix, this._noTranslateMatrix, degToRad(deg));
    mat4.translate(matrix, matrix, this._position);
    this.matrix = matrix;
  }

  private get _noTranslateMatrix() {
    const matrix = mat4.create();
    const negPos = vec3.create();
    return mat4.translate(matrix, this._matrix,  vec3.negate(negPos, this._position));
  }

  private _recalcMatrix() {
    this._matrix = mat4.create();
    range(3).forEach(idx => {
      const offset = 4 - 2 * idx;
      const matrixToApply = (this._mode >> offset) % 4;
      switch (matrixToApply) {
        case TRANSFORM_MODE.T:
          mat4.translate(this._matrix, this._matrix, this._position);
          break;
        case TRANSFORM_MODE.R:
          const rotateMatrix = mat4.create();
          mat4.fromQuat(rotateMatrix, this._rotation);
          mat4.mul(this._matrix, this._matrix, rotateMatrix);
          break;
        case TRANSFORM_MODE.S:
          mat4.scale(this._matrix, this._matrix, this._scale);
          break;
      }
    });
  }
}

export default Transform;
