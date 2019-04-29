class Vector {
  public x: number;
  public y: number;
  public z: number;

  public static get ZERO() { return new Vector(0, 0, 0); }
  public static get ONE() { return new Vector(1, 1, 1); }

  public get 0() { return this.x }
  public get 1() { return this.y }
  public get 2() { return this.z }

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

  div(val: number): Vector {
    const invVal = 1 / val;

    return new Vector(
      this.x * invVal,
      this.y * invVal,
      this.z * invVal
    );
  }

  dot(other: Vector): number {
    return this.x * other.x
      + this.y * other.y
      + this.z * other.z;
  }

  cross(other: Vector): Vector {
    return new Vector(
      this.y * other.z - this.z * other.y,
      this.z * other.x - this.x * other.z,
      this.x * other.y - this.y * other.x
    );
  }
}

export default Vector;
