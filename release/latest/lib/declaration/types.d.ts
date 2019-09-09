export declare type ValueOf<T> = T[keyof T];
export declare type Matrix4x4 = [number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number];
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
export interface UpdateOption {
    property: string;
    timingFunction: string;
    delay: string;
}
