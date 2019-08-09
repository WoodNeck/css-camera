import * as tslib_1 from "tslib";
import { mat4, vec3, quat } from 'gl-matrix';
import { getElement, applyCSS, getTransformMatrix, findIndex, getOffsetFromParent, getRotateOffset } from './utils/helper';
import { quatToEuler } from './utils/math';
import DEFAULT from './constants/default';
var CSSCamera = (function () {
    function CSSCamera(el) {
        this._element = getElement(el);
        this._position = vec3.create();
        this._scale = vec3.fromValues(1, 1, 1);
        this._rotation = vec3.create();
        this._perspective = 0;
        this._perspectiveOffset = 0;
        var element = this._element;
        var viewport = document.createElement('div');
        var camera = viewport.cloneNode();
        var world = viewport.cloneNode();
        viewport.className = DEFAULT.CLASS.VIEWPORT;
        camera.className = DEFAULT.CLASS.CAMERA;
        world.className = DEFAULT.CLASS.WORLD;
        applyCSS(viewport, DEFAULT.STYLE.VIEWPORT);
        applyCSS(camera, DEFAULT.STYLE.CAMERA);
        applyCSS(world, DEFAULT.STYLE.WORLD);
        camera.appendChild(world);
        viewport.appendChild(camera);
        this._viewportEl = viewport;
        this._cameraEl = camera;
        this._worldEl = world;
        element.parentElement.insertBefore(viewport, element);
        world.appendChild(element);
    }
    Object.defineProperty(CSSCamera, "VERSION", {
        get: function () { return '#__VERSION__#'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CSSCamera.prototype, "element", {
        get: function () { return this._element; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CSSCamera.prototype, "viewportEl", {
        get: function () { return this._viewportEl; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CSSCamera.prototype, "cameraEl", {
        get: function () { return this._cameraEl; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CSSCamera.prototype, "worldEl", {
        get: function () { return this._worldEl; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CSSCamera.prototype, "position", {
        get: function () { return tslib_1.__spread(this._position); },
        set: function (val) { this._position = vec3.fromValues(val[0], val[1], val[2]); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CSSCamera.prototype, "scale", {
        get: function () { return tslib_1.__spread(this._scale); },
        set: function (val) { this._scale = vec3.fromValues(val[0], val[1], val[2]); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CSSCamera.prototype, "rotation", {
        get: function () { return tslib_1.__spread(this._rotation); },
        set: function (val) { this._rotation = vec3.fromValues(val[0], val[1], val[2]); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CSSCamera.prototype, "quaternion", {
        get: function () {
            var r = this._rotation;
            var quaternion = quat.fromEuler(quat.create(), r[0], r[1], r[2]);
            return tslib_1.__spread(quaternion);
        },
        set: function (val) { this._rotation = quatToEuler(quat.fromValues(val[0], val[1], val[2], val[3])); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CSSCamera.prototype, "perspective", {
        get: function () { return this._perspective; },
        set: function (val) { this._perspective = val; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CSSCamera.prototype, "perspectiveOffset", {
        get: function () { return this._perspectiveOffset; },
        set: function (val) { this._perspectiveOffset = val; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CSSCamera.prototype, "cameraCSS", {
        get: function () {
            var perspective = this._perspective;
            var perspectiveOffset = this._perspectiveOffset;
            var rotation = this._rotation;
            var scale = this._scale;
            return "scale3d(" + scale[0] + ", " + scale[1] + ", " + scale[2] + ") translateZ(" + (perspective + perspectiveOffset) + "px) rotateX(" + rotation[0] + "deg) rotateY(" + rotation[1] + "deg) rotateZ(" + rotation[2] + "deg)";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CSSCamera.prototype, "worldCSS", {
        get: function () {
            var position = this._position;
            return "translate3d(" + -position[0] + "px, " + -position[1] + "px, " + -position[2] + "px)";
        },
        enumerable: true,
        configurable: true
    });
    CSSCamera.prototype.focus = function (el) {
        var element = getElement(el);
        var focusMatrix = this._getFocusMatrix(element);
        var rotation = quat.create();
        var translation = vec3.create();
        mat4.getRotation(rotation, focusMatrix);
        mat4.getTranslation(translation, focusMatrix);
        var eulerAngle = quatToEuler(rotation);
        vec3.negate(eulerAngle, eulerAngle);
        this._rotation = eulerAngle;
        this._position = translation;
        return this;
    };
    CSSCamera.prototype.translateLocal = function (x, y, z) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        if (z === void 0) { z = 0; }
        var position = this._position;
        var rotation = this._rotation;
        var transVec = vec3.fromValues(x, y, z);
        var rotQuat = quat.create();
        quat.fromEuler(rotQuat, -rotation[0], -rotation[1], -rotation[2]);
        vec3.transformQuat(transVec, transVec, rotQuat);
        vec3.add(position, position, transVec);
        return this;
    };
    CSSCamera.prototype.translate = function (x, y, z) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        if (z === void 0) { z = 0; }
        vec3.add(this._position, this._position, vec3.fromValues(x, y, z));
        return this;
    };
    CSSCamera.prototype.rotate = function (x, y, z) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        if (z === void 0) { z = 0; }
        vec3.add(this._rotation, this._rotation, vec3.fromValues(x, y, z));
        return this;
    };
    CSSCamera.prototype.update = function (duration) {
        if (duration === void 0) { duration = 0; }
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var transition;
            return tslib_1.__generator(this, function (_a) {
                transition = duration > 0 ? "transform " + duration + "ms" : '';
                applyCSS(this._viewportEl, { perspective: this.perspective + "px" });
                applyCSS(this._cameraEl, {
                    transition: transition,
                    transform: this.cameraCSS,
                });
                applyCSS(this._worldEl, {
                    transition: transition,
                    transform: this.worldCSS,
                });
                return [2, new Promise(function (resolve) {
                        setTimeout(function () {
                            resolve();
                        }, duration);
                    })];
            });
        });
    };
    CSSCamera.prototype._getFocusMatrix = function (element) {
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
        if (firstFlatIndex > 0) {
            elStyles.splice(firstFlatIndex + 1);
        }
        var parentOffset = {
            left: 0,
            top: 0,
            width: this.viewportEl.offsetWidth,
            height: this.viewportEl.offsetHeight,
        };
        var accRotation = quat.identity(quat.create());
        var centerPos = vec3.fromValues(0, 0, 0);
        elStyles.forEach(function (style, idx) {
            var el = elements[idx];
            var currentOffset = {
                left: el.offsetLeft,
                top: el.offsetTop,
                width: el.offsetWidth,
                height: el.offsetHeight,
            };
            var transformMat = getTransformMatrix(style);
            var offsetFromParent = getOffsetFromParent(currentOffset, parentOffset);
            vec3.transformQuat(offsetFromParent, offsetFromParent, accRotation);
            vec3.add(centerPos, centerPos, offsetFromParent);
            var rotateOffset = getRotateOffset(style, currentOffset);
            vec3.transformQuat(rotateOffset, rotateOffset, accRotation);
            var transformOrigin = vec3.clone(centerPos);
            vec3.add(transformOrigin, transformOrigin, rotateOffset);
            var centerFromOrigin = vec3.create();
            vec3.sub(centerFromOrigin, centerPos, transformOrigin);
            var invAccRotation = quat.invert(quat.create(), accRotation);
            vec3.transformQuat(centerFromOrigin, centerFromOrigin, invAccRotation);
            vec3.transformMat4(centerFromOrigin, centerFromOrigin, transformMat);
            vec3.transformQuat(centerFromOrigin, centerFromOrigin, accRotation);
            var newCenterPos = vec3.add(vec3.create(), transformOrigin, centerFromOrigin);
            var rotation = mat4.getRotation(quat.create(), transformMat);
            vec3.copy(centerPos, newCenterPos);
            quat.mul(accRotation, accRotation, rotation);
            parentOffset = currentOffset;
        });
        var perspective = vec3.fromValues(0, 0, this.perspective);
        vec3.transformQuat(perspective, perspective, accRotation);
        vec3.add(centerPos, centerPos, perspective);
        var matrix = mat4.create();
        mat4.fromRotationTranslation(matrix, accRotation, centerPos);
        return matrix;
    };
    return CSSCamera;
}());
export default CSSCamera;
//# sourceMappingURL=CSSCamera.js.map