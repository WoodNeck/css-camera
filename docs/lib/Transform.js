import { vec3, quat } from 'gl-matrix';
var Transform = (function () {
    function Transform() {
        this._position = vec3.create();
        this._scale = vec3.fromValues(1, 1, 1);
        this._rotation = vec3.create();
        this._perspective = 0;
    }
    Object.defineProperty(Transform.prototype, "position", {
        get: function () { return this._position; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Transform.prototype, "scale", {
        get: function () { return this._scale; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Transform.prototype, "rotation", {
        get: function () { return this._rotation; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Transform.prototype, "perspective", {
        get: function () { return this._perspective; },
        set: function (val) {
            this._perspective = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Transform.prototype, "cameraCSS", {
        get: function () {
            var perspective = this._perspective;
            var rotation = this._rotation;
            return "translateZ(" + perspective + "px) rotateY(" + rotation[1] + "deg) rotateZ(" + rotation[2] + "deg) rotateX(" + rotation[0] + "deg)";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Transform.prototype, "worldCSS", {
        get: function () {
            var perspective = this._perspective;
            var position = this._position;
            return "translate3d(" + -position[0] + "px, " + -position[1] + "px, " + (-position[2] - perspective) + "px)";
        },
        enumerable: true,
        configurable: true
    });
    Transform.prototype.translate = function (x, y, z) {
        var transVec = vec3.fromValues(x, y, z);
        var rotation = this._rotation;
        var rotQuat = quat.create();
        quat.fromEuler(rotQuat, rotation[0], rotation[1], rotation[2]);
        quat.invert(rotQuat, rotQuat);
        vec3.transformQuat(transVec, transVec, rotQuat);
        vec3.add(this._position, this._position, transVec);
    };
    Transform.prototype.absTranslate = function (x, y, z) {
        vec3.add(this._position, this._position, vec3.fromValues(x, y, z));
    };
    Transform.prototype.rotateX = function (deg) {
        this._rotation[0] += deg;
    };
    Transform.prototype.rotateY = function (deg) {
        this._rotation[1] += deg;
    };
    Transform.prototype.rotateZ = function (deg) {
        this._rotation[2] += deg;
    };
    return Transform;
}());
export default Transform;
//# sourceMappingURL=Transform.js.map