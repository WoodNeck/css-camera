import { MatrixVal } from '../types';
import Point from './Point';

class Matrix4x4 {
  static get IDENTITY() {
    return new Matrix4x4([
      new Point(1, 0, 0, 0),
      new Point(0, 1, 0, 0),
      new Point(0, 0, 1, 0),
      new Point(0, 0, 0, 1),
    ]);
  }

  static get ZERO() {
    return new Matrix4x4([
      new Point(0, 0, 0, 0),
      new Point(0, 0, 0, 0),
      new Point(0, 0, 0, 0),
      new Point(0, 0, 0, 0),
    ])
  }

  public get r0() { return this._values[0] }
  public get r1() { return this._values[1] }
  public get r2() { return this._values[2] }
  public get r3() { return this._values[3] }
  public get c0() {
    const v = this._values;
    return new Point(
      v[0][0], v[1][0], v[2][0], v[3][0]
    );
  }
  public get c1() {
    const v = this._values;
    return new Point(
      v[0][1], v[1][1], v[2][1], v[3][1]
    );
  }
  public get c2() {
    const v = this._values;
    return new Point(
      v[0][2], v[1][2], v[2][2], v[3][2]
    );
  }
  public get c3() {
    const v = this._values;
    return new Point(
      v[0][3], v[1][3], v[2][3], v[3][3]
    );
  }

  private _values: MatrixVal;

  constructor(values: MatrixVal) {
    this._values = values;
  }

  public mul(other: Matrix4x4) {
    const a = this;
    const b = other;

    return new Matrix4x4([
      new Point(a.r0.mul(b.c0), a.r0.mul(b.c1), a.r0.mul(b.c2), a.r0.mul(b.c3)),
      new Point(a.r1.mul(b.c0), a.r1.mul(b.c1), a.r1.mul(b.c2), a.r1.mul(b.c3)),
      new Point(a.r2.mul(b.c0), a.r2.mul(b.c1), a.r2.mul(b.c2), a.r2.mul(b.c3)),
      new Point(a.r3.mul(b.c0), a.r3.mul(b.c1), a.r3.mul(b.c2), a.r3.mul(b.c3)),
    ]);
  }
}

export default Matrix4x4;
