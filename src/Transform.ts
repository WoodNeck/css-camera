import { vec3 } from 'gl-matrix';

class Transform {
  private _position: vec3;

  public get position() { return this._position; }

  constructor(x: number, y: number, z: number) {
    this._position = vec3.create();
  }

  public lookAt(x: number, y: number, z: number) {

  }
}

export default Transform;
