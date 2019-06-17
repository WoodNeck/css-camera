import { mat4 } from 'gl-matrix';
import { BASE_ELEMENT_NOT_EXIST, MUST_STRING_OR_ELEMENT } from '../constants/error';
export var getElement = function (el) {
    if (typeof el === 'string') {
        var queryResult = document.querySelector(el);
        if (!queryResult) {
            throw new Error(BASE_ELEMENT_NOT_EXIST);
        }
        return queryResult;
    }
    else if (el.nodeName && el.nodeType === 1) {
        return el;
    }
    else {
        throw new Error(MUST_STRING_OR_ELEMENT);
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
    var matrix = mat4.fromValues.apply(mat4, matrixVal);
    return matrix;
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
export function degToRad(deg) {
    return Math.PI * deg / 180;
}
//# sourceMappingURL=helper.js.map