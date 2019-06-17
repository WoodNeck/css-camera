import { mat4 } from 'gl-matrix';
export declare const getElement: (el: string | HTMLElement) => HTMLElement;
export declare function applyCSS(element: HTMLElement, cssObj: {
    [keys: string]: string;
}): void;
export declare function getTransformMatrix(elStyle: CSSStyleDeclaration): mat4;
export declare function findIndex<T>(iterable: T[], callback: (el: T) => boolean): number;
export declare function range(max: number): number[];
export declare function degToRad(deg: number): number;
