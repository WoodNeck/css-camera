export type ValueOf<T> = T[keyof T];

export type Matrix4x4 = [
  number, number, number, number,
  number, number, number, number,
  number, number, number, number,
  number, number, number, number,
];

/**
 * @typedef
 * @property {Array<number>} [position=[0, 0, 0]] - Initial position of the camera.
 * @property {Array<number>} [scale=[1, 1, 1]] - Initial scale of the camera.
 * @property {Array<number>} [rotation=[0, 0, 0]] - Initial rotation(x, y, z) of the camera.
 * @property {number} [perspective=0] - Initial perspective of the camera.
 * @property {number} [rotateOffset=0] - Initial rotate offset of the camera.
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
 * @property {string} [property="transform"] - CSS [transition-property](https://developer.mozilla.org/en-US/docs/Web/CSS/transition-property) to apply.
 * @property {string} [timingFunction="ease-out"] - CSS [transition-timing-function](https://developer.mozilla.org/en-US/docs/Web/CSS/transition-timing-function) to apply.
 * @property {string} [delay="0ms"] - CSS [transition-delay](https://developer.mozilla.org/en-US/docs/Web/CSS/transition-delay) to apply.
 * @example
 * // When if you want to apply multiple properties
 * camera.update(1000, {
 *   property: "transform, background-color",
 *   timingFunction: "ease-out, ease-out", // As same with CSS, you should assign values to each property
 *   delay: "0ms, 100ms"
 * });
 */
export interface UpdateOption {
  property: string;
  timingFunction: string;
  delay: string;
}
