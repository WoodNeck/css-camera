import { mat4, vec3 } from 'gl-matrix';
import { clamp } from './helper';
export function degToRad(deg) {
    return Math.PI * deg / 180;
}
export function radToDeg(rad) {
    return 180 * rad / Math.PI;
}
export function quatToEuler(q) {
    var rotM = mat4.create();
    mat4.fromQuat(rotM, q);
    var m11 = rotM[0];
    var m12 = rotM[4];
    var m21 = rotM[1];
    var m22 = rotM[5];
    var m31 = rotM[2];
    var m32 = rotM[6];
    var m33 = rotM[10];
    var euler = vec3.create();
    euler[1] = Math.asin(-clamp(m31, -1, 1));
    if (Math.abs(m31) < 0.99999) {
        euler[0] = Math.atan2(m32, m33);
        euler[2] = Math.atan2(m21, m11);
    }
    else {
        euler[0] = 0;
        euler[2] = Math.atan2(-m12, m22);
    }
    return euler.map(function (val) { return radToDeg(val); });
}
//# sourceMappingURL=math.js.map