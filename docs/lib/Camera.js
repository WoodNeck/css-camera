import { mat4 } from 'gl-matrix';
import Transform from './Transform';
import { getElement, applyCSS, getTransformMatrix, findIndex } from './utils/helper';
import DEFAULT from './constants/default';
import { IdentityMatrix4x4 } from './constants/math';
var Camera = (function () {
    function Camera(el) {
        this._element = getElement(el);
        this._transform = new Transform();
        var element = this._element;
        var viewport = document.createElement('div');
        applyCSS(viewport, DEFAULT.STYLE_VIEWPORT);
        var camera = viewport.cloneNode();
        var world = viewport.cloneNode();
        viewport.className = DEFAULT.CLASS.VIEWPORT;
        camera.className = DEFAULT.CLASS.CAMERA;
        world.className = DEFAULT.CLASS.WORLD;
        camera.appendChild(world);
        viewport.appendChild(camera);
        this._viewportEl = viewport;
        this._cameraEl = camera;
        this._worldEl = world;
        element.parentElement.insertBefore(viewport, element);
        world.appendChild(element);
    }
    Object.defineProperty(Camera.prototype, "transform", {
        get: function () { return this._transform; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Camera.prototype, "element", {
        get: function () { return this._element; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Camera.prototype, "viewportEl", {
        get: function () { return this._viewportEl; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Camera.prototype, "cameraEl", {
        get: function () { return this._cameraEl; },
        enumerable: true,
        configurable: true
    });
    Camera.prototype.focus = function (element, worldMatrix) {
        if (worldMatrix === void 0) { worldMatrix = IdentityMatrix4x4; }
        var focusMatrix = this.getFocusMatrix(element, worldMatrix);
        console.log(focusMatrix);
    };
    Camera.prototype.getFocusMatrix = function (element, worldMatrix) {
        if (worldMatrix === void 0) { worldMatrix = IdentityMatrix4x4; }
        var elements = [];
        while (element) {
            elements.push(element);
            if (element === this._element)
                break;
            element = element.parentElement;
        }
        elements.reverse();
        var elStyles = elements.map(function (el) { return window.getComputedStyle(el); });
        var firstFlatIndex = findIndex(elStyles, function (style) { return style.transformStyle !== 'preserve-3d'; });
        if (firstFlatIndex >= 0) {
            elStyles.splice(firstFlatIndex + 1);
        }
        var matrix = mat4.fromValues.apply(mat4, worldMatrix);
        elStyles.forEach(function (style) {
            matrix = mat4.mul(matrix, matrix, getTransformMatrix(style));
        });
        return matrix;
    };
    Camera.prototype.setPerspective = function (val) {
        applyCSS(this._viewportEl, { perspective: val + "px" });
        this._transform.perspective = val;
        this.update();
    };
    Camera.prototype.update = function () {
        var transform = this._transform;
        this._cameraEl.style.transform = transform.cameraCSS;
        this._worldEl.style.transform = transform.worldCSS;
    };
    return Camera;
}());
export default Camera;
//# sourceMappingURL=Camera.js.map