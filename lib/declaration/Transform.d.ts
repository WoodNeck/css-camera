import { vec3 } from 'gl-matrix';
declare class Transform {
    private _position;
    private _scale;
    private _rotation;
    private _perspective;
    readonly position: vec3;
    readonly scale: vec3;
    readonly rotation: vec3;
    perspective: number;
    readonly cameraCSS: string;
    readonly worldCSS: string;
    constructor();
    translate(x: number, y: number, z: number): void;
    absTranslate(x: number, y: number, z: number): void;
    rotateX(deg: number): void;
    rotateY(deg: number): void;
    rotateZ(deg: number): void;
}
export default Transform;
