import { mat4 } from 'gl-matrix';
import Transform from './Transform';
import { Matrix4x4 } from './types';
declare abstract class Camera {
    private _element;
    private _viewportEl;
    private _cameraEl;
    private _worldEl;
    private _transform;
    readonly transform: Transform;
    readonly element: HTMLElement;
    readonly viewportEl: HTMLElement;
    readonly cameraEl: HTMLElement;
    constructor(el: string | HTMLElement);
    focus(element: HTMLElement, worldMatrix?: Matrix4x4): void;
    getFocusMatrix(element: HTMLElement, worldMatrix?: Matrix4x4): mat4;
    setPerspective(val: number): void;
    update(): void;
}
export default Camera;
