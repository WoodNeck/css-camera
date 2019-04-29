import Vector from './Vector';

class Point {
  private _vector: Vector;
  private _w: number;

  public get 0() { return this._vector[0]; }
  public get 1() { return this._vector[1]; }
  public get 2() { return this._vector[2]; }
  public get 3() { return this._w; }

  constructor(x: number, y: number, z: number, w: number = 1) {
    this._vector = new Vector(x, y, z);
    this._w = w;
  }

  public mul(other: Point): number {
    return this._vector.dot(other._vector)
      + this._w * other._w;
  }
}

export default Point;
