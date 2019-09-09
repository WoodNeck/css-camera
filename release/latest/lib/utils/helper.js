import * as tslib_1 from "tslib";
import { mat4, vec3 } from 'gl-matrix';
import { ELEMENT_NOT_EXIST, MUST_STRING_OR_ELEMENT } from '../constants/error';
export var getElement = function (el, baseElement) {
    if (typeof el === 'string') {
        var queryResult = baseElement
            ? baseElement.querySelector(el)
            : document.querySelector(el);
        if (!queryResult) {
            throw new Error(ELEMENT_NOT_EXIST(el));
        }
        return queryResult;
    }
    else if (el.nodeName && el.nodeType === 1) {
        return el;
    }
    else {
        throw new Error(MUST_STRING_OR_ELEMENT(el));
    }
};
export function applyCSS(element, cssObj) {
    Object.keys(cssObj).forEach(function (property) {
        element.style[property] = cssObj[property];
    });
}
export function getTransformMatrix(elStyle) {
    var trVal = elStyle.getPropertyValue('transform');
    var transformStr = /\(((\s|\S)+)\)/.exec(trVal);
    var matrixVal = transformStr
        ? transformStr[1].split(',').map(function (val) { return parseFloat(val); })
        : [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
    if (matrixVal.length === 16) {
        return mat4.fromValues.apply(mat4, tslib_1.__spread(matrixVal));
    }
    else {
        var matrix = mat4.create();
        mat4.identity(matrix);
        matrix[0] = matrixVal[0];
        matrix[1] = matrixVal[1];
        matrix[4] = matrixVal[2];
        matrix[5] = matrixVal[3];
        matrix[12] = matrixVal[4];
        matrix[13] = matrixVal[5];
        return matrix;
    }
}
export function getOffsetFromParent(currentOffset, parentOffset) {
    var offsetLeft = currentOffset.left + (currentOffset.width - parentOffset.width) / 2;
    var offsetTop = currentOffset.top + (currentOffset.height - parentOffset.height) / 2;
    return vec3.fromValues(offsetLeft, offsetTop, 0);
}
export function getRotateOffset(elStyle, currentOffset) {
    var axis = elStyle.transformOrigin
        .split(' ')
        .map(function (str) { return parseFloat(str.substring(0, str.length - 2)); });
    var ax = axis[0] - currentOffset.width / 2;
    var ay = axis[1] - currentOffset.height / 2;
    return vec3.fromValues(ax, ay, 0);
}
export function findIndex(iterable, callback) {
    for (var i = 0; i < iterable.length; i += 1) {
        var element = iterable[i];
        if (element && callback(element)) {
            return i;
        }
    }
    return -1;
}
export function range(max) {
    var counterArray = [];
    for (var i = 0; i < max; i += 1) {
        counterArray[i] = i;
    }
    return counterArray;
}
export function clamp(val, min, max) {
    return Math.max(Math.min(val, max), min);
}
export function assign(target) {
    var srcs = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        srcs[_i - 1] = arguments[_i];
    }
    srcs.forEach(function (source) {
        Object.keys(source).forEach(function (key) {
            var value = source[key];
            target[key] = value;
        });
    });
    return target;
}
//# sourceMappingURL=helper.js.map