export default class Vector {
  public x: number;
  public y: number;
  public z: number;

  public static get ZERO() { return new Vector(0, 0, 0); }
  public static get ONE() { return new Vector(1, 1, 1); }

  constructor(x: number, y: number, z: number) {
    this.x = x;
    this.y = y;
    this.z = z;
  }

  add(other: Vector): Vector {
    this.x += other.x;
    this.y += other.y;
    this.z += other.z;

    return this;
  }

  sub(other: Vector): Vector {
    this.x -= other.x;
    this.y -= other.y;
    this.z -= other.z;

    return this;
  }

  dot(other: Vector): number {
    return this.x * other.x
      + this.y * other.y
      + this.z * other.z;
  }

  cross(other: Vector): Vector {

  }

  normalize(): Vector {

  }
}
