export type ValueOf<T> = T[keyof T];

export type Matrix4x4 = [
  number, number, number, number,
  number, number, number, number,
  number, number, number, number,
  number, number, number, number,
];

/**
 * @typedef
 * @property - Initial position of the camera.
 * @property - Initial scale of the camera.
 * @property - Initial Euler rotation angles(x, y, z) of the camera in degree.
 * @property - Initial perspective of the camera.
 * @property - Initial rotate offset of the camera.
 */
export interface Options {
  position: number[];
  scale: number[];
  rotation: number[];
  perspective: number;
  rotateOffset: number;
}

export interface Offset {
  left: number;
  top: number;
  width: number;
  height: number;
}

/**
 * @typedef
 * @property - CSS [transition-property](https://developer.mozilla.org/en-US/docs/Web/CSS/transition-property) to apply.
 * @property - CSS [transition-timing-function](https://developer.mozilla.org/en-US/docs/Web/CSS/transition-timing-function) to apply.
 * @property - CSS [transition-delay](https://developer.mozilla.org/en-US/docs/Web/CSS/transition-delay) to apply.
 */
export interface UpdateOption {
  property: string;
  timingFunction: string;
  delay: string;
}
