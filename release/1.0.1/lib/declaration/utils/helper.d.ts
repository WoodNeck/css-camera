import { mat4, vec3 } from 'gl-matrix';
import { Offset } from '../types';
export declare const getElement: (el: string | HTMLElement, baseElement?: HTMLElement | undefined) => HTMLElement;
export declare function applyCSS(element: HTMLElement, cssObj: {
    [keys: string]: string;
}): void;
export declare function getTransformMatrix(elStyle: CSSStyleDeclaration): mat4;
export declare function getOffsetFromParent(currentOffset: Offset, parentOffset: Offset): vec3;
export declare function getRotateOffset(elStyle: CSSStyleDeclaration, currentOffset: Offset): vec3;
export declare function findIndex<T>(iterable: T[], callback: (el: T) => boolean): number;
export declare function range(max: number): number[];
export declare function clamp(val: number, min: number, max: number): number;
export declare function assign(target: object, ...srcs: object[]): object;
