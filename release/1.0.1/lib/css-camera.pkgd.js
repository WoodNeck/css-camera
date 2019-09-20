/*
Copyright (c) 2019 WoodNeck
name: css-camera
license: MIT
author: WoodNeck
repository: git+https://github.com/WoodNeck/css-camera.git
version: 1.0.1
*/
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global = global || self, global.CSSCamera = factory());
}(this, function () { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    var __assign = function () {
      __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }

        return t;
      };

      return __assign.apply(this, arguments);
    };
    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }
    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function () {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) try {
          if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          if (y = 0, t) op = [op[0] & 2, t.value];

          switch (op[0]) {
            case 0:
            case 1:
              t = op;
              break;

            case 4:
              _.label++;
              return {
                value: op[1],
                done: false
              };

            case 5:
              _.label++;
              y = op[1];
              op = [0];
              continue;

            case 7:
              op = _.ops.pop();

              _.trys.pop();

              continue;

            default:
              if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                _ = 0;
                continue;
              }

              if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                _.label = op[1];
                break;
              }

              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1];
                t = op;
                break;
              }

              if (t && _.label < t[2]) {
                _.label = t[2];

                _.ops.push(op);

                break;
              }

              if (t[2]) _.ops.pop();

              _.trys.pop();

              continue;
          }

          op = body.call(thisArg, _);
        } catch (e) {
          op = [6, e];
          y = 0;
        } finally {
          f = t = 0;
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }
    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }
    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));

      return ar;
    }

    /**
     * Common utilities
     * @module glMatrix
     */
    // Configuration Constants
    var EPSILON = 0.000001;
    var ARRAY_TYPE = typeof Float32Array !== 'undefined' ? Float32Array : Array;
    var RANDOM = Math.random;
    var degree = Math.PI / 180;

    /**
     * 3x3 Matrix
     * @module mat3
     */

    /**
     * Creates a new identity mat3
     *
     * @returns {mat3} a new 3x3 matrix
     */

    function create() {
      var out = new ARRAY_TYPE(9);

      if (ARRAY_TYPE != Float32Array) {
        out[1] = 0;
        out[2] = 0;
        out[3] = 0;
        out[5] = 0;
        out[6] = 0;
        out[7] = 0;
      }

      out[0] = 1;
      out[4] = 1;
      out[8] = 1;
      return out;
    }

    /**
     * 4x4 Matrix<br>Format: column-major, when typed out it looks like row-major<br>The matrices are being post multiplied.
     * @module mat4
     */

    /**
     * Creates a new identity mat4
     *
     * @returns {mat4} a new 4x4 matrix
     */

    function create$1() {
      var out = new ARRAY_TYPE(16);

      if (ARRAY_TYPE != Float32Array) {
        out[1] = 0;
        out[2] = 0;
        out[3] = 0;
        out[4] = 0;
        out[6] = 0;
        out[7] = 0;
        out[8] = 0;
        out[9] = 0;
        out[11] = 0;
        out[12] = 0;
        out[13] = 0;
        out[14] = 0;
      }

      out[0] = 1;
      out[5] = 1;
      out[10] = 1;
      out[15] = 1;
      return out;
    }
    /**
     * Creates a new mat4 initialized with values from an existing matrix
     *
     * @param {mat4} a matrix to clone
     * @returns {mat4} a new 4x4 matrix
     */

    function clone(a) {
      var out = new ARRAY_TYPE(16);
      out[0] = a[0];
      out[1] = a[1];
      out[2] = a[2];
      out[3] = a[3];
      out[4] = a[4];
      out[5] = a[5];
      out[6] = a[6];
      out[7] = a[7];
      out[8] = a[8];
      out[9] = a[9];
      out[10] = a[10];
      out[11] = a[11];
      out[12] = a[12];
      out[13] = a[13];
      out[14] = a[14];
      out[15] = a[15];
      return out;
    }
    /**
     * Copy the values from one mat4 to another
     *
     * @param {mat4} out the receiving matrix
     * @param {mat4} a the source matrix
     * @returns {mat4} out
     */

    function copy(out, a) {
      out[0] = a[0];
      out[1] = a[1];
      out[2] = a[2];
      out[3] = a[3];
      out[4] = a[4];
      out[5] = a[5];
      out[6] = a[6];
      out[7] = a[7];
      out[8] = a[8];
      out[9] = a[9];
      out[10] = a[10];
      out[11] = a[11];
      out[12] = a[12];
      out[13] = a[13];
      out[14] = a[14];
      out[15] = a[15];
      return out;
    }
    /**
     * Create a new mat4 with the given values
     *
     * @param {Number} m00 Component in column 0, row 0 position (index 0)
     * @param {Number} m01 Component in column 0, row 1 position (index 1)
     * @param {Number} m02 Component in column 0, row 2 position (index 2)
     * @param {Number} m03 Component in column 0, row 3 position (index 3)
     * @param {Number} m10 Component in column 1, row 0 position (index 4)
     * @param {Number} m11 Component in column 1, row 1 position (index 5)
     * @param {Number} m12 Component in column 1, row 2 position (index 6)
     * @param {Number} m13 Component in column 1, row 3 position (index 7)
     * @param {Number} m20 Component in column 2, row 0 position (index 8)
     * @param {Number} m21 Component in column 2, row 1 position (index 9)
     * @param {Number} m22 Component in column 2, row 2 position (index 10)
     * @param {Number} m23 Component in column 2, row 3 position (index 11)
     * @param {Number} m30 Component in column 3, row 0 position (index 12)
     * @param {Number} m31 Component in column 3, row 1 position (index 13)
     * @param {Number} m32 Component in column 3, row 2 position (index 14)
     * @param {Number} m33 Component in column 3, row 3 position (index 15)
     * @returns {mat4} A new mat4
     */

    function fromValues(m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33) {
      var out = new ARRAY_TYPE(16);
      out[0] = m00;
      out[1] = m01;
      out[2] = m02;
      out[3] = m03;
      out[4] = m10;
      out[5] = m11;
      out[6] = m12;
      out[7] = m13;
      out[8] = m20;
      out[9] = m21;
      out[10] = m22;
      out[11] = m23;
      out[12] = m30;
      out[13] = m31;
      out[14] = m32;
      out[15] = m33;
      return out;
    }
    /**
     * Set the components of a mat4 to the given values
     *
     * @param {mat4} out the receiving matrix
     * @param {Number} m00 Component in column 0, row 0 position (index 0)
     * @param {Number} m01 Component in column 0, row 1 position (index 1)
     * @param {Number} m02 Component in column 0, row 2 position (index 2)
     * @param {Number} m03 Component in column 0, row 3 position (index 3)
     * @param {Number} m10 Component in column 1, row 0 position (index 4)
     * @param {Number} m11 Component in column 1, row 1 position (index 5)
     * @param {Number} m12 Component in column 1, row 2 position (index 6)
     * @param {Number} m13 Component in column 1, row 3 position (index 7)
     * @param {Number} m20 Component in column 2, row 0 position (index 8)
     * @param {Number} m21 Component in column 2, row 1 position (index 9)
     * @param {Number} m22 Component in column 2, row 2 position (index 10)
     * @param {Number} m23 Component in column 2, row 3 position (index 11)
     * @param {Number} m30 Component in column 3, row 0 position (index 12)
     * @param {Number} m31 Component in column 3, row 1 position (index 13)
     * @param {Number} m32 Component in column 3, row 2 position (index 14)
     * @param {Number} m33 Component in column 3, row 3 position (index 15)
     * @returns {mat4} out
     */

    function set(out, m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33) {
      out[0] = m00;
      out[1] = m01;
      out[2] = m02;
      out[3] = m03;
      out[4] = m10;
      out[5] = m11;
      out[6] = m12;
      out[7] = m13;
      out[8] = m20;
      out[9] = m21;
      out[10] = m22;
      out[11] = m23;
      out[12] = m30;
      out[13] = m31;
      out[14] = m32;
      out[15] = m33;
      return out;
    }
    /**
     * Set a mat4 to the identity matrix
     *
     * @param {mat4} out the receiving matrix
     * @returns {mat4} out
     */

    function identity(out) {
      out[0] = 1;
      out[1] = 0;
      out[2] = 0;
      out[3] = 0;
      out[4] = 0;
      out[5] = 1;
      out[6] = 0;
      out[7] = 0;
      out[8] = 0;
      out[9] = 0;
      out[10] = 1;
      out[11] = 0;
      out[12] = 0;
      out[13] = 0;
      out[14] = 0;
      out[15] = 1;
      return out;
    }
    /**
     * Transpose the values of a mat4
     *
     * @param {mat4} out the receiving matrix
     * @param {mat4} a the source matrix
     * @returns {mat4} out
     */

    function transpose(out, a) {
      // If we are transposing ourselves we can skip a few steps but have to cache some values
      if (out === a) {
        var a01 = a[1],
            a02 = a[2],
            a03 = a[3];
        var a12 = a[6],
            a13 = a[7];
        var a23 = a[11];
        out[1] = a[4];
        out[2] = a[8];
        out[3] = a[12];
        out[4] = a01;
        out[6] = a[9];
        out[7] = a[13];
        out[8] = a02;
        out[9] = a12;
        out[11] = a[14];
        out[12] = a03;
        out[13] = a13;
        out[14] = a23;
      } else {
        out[0] = a[0];
        out[1] = a[4];
        out[2] = a[8];
        out[3] = a[12];
        out[4] = a[1];
        out[5] = a[5];
        out[6] = a[9];
        out[7] = a[13];
        out[8] = a[2];
        out[9] = a[6];
        out[10] = a[10];
        out[11] = a[14];
        out[12] = a[3];
        out[13] = a[7];
        out[14] = a[11];
        out[15] = a[15];
      }

      return out;
    }
    /**
     * Inverts a mat4
     *
     * @param {mat4} out the receiving matrix
     * @param {mat4} a the source matrix
     * @returns {mat4} out
     */

    function invert(out, a) {
      var a00 = a[0],
          a01 = a[1],
          a02 = a[2],
          a03 = a[3];
      var a10 = a[4],
          a11 = a[5],
          a12 = a[6],
          a13 = a[7];
      var a20 = a[8],
          a21 = a[9],
          a22 = a[10],
          a23 = a[11];
      var a30 = a[12],
          a31 = a[13],
          a32 = a[14],
          a33 = a[15];
      var b00 = a00 * a11 - a01 * a10;
      var b01 = a00 * a12 - a02 * a10;
      var b02 = a00 * a13 - a03 * a10;
      var b03 = a01 * a12 - a02 * a11;
      var b04 = a01 * a13 - a03 * a11;
      var b05 = a02 * a13 - a03 * a12;
      var b06 = a20 * a31 - a21 * a30;
      var b07 = a20 * a32 - a22 * a30;
      var b08 = a20 * a33 - a23 * a30;
      var b09 = a21 * a32 - a22 * a31;
      var b10 = a21 * a33 - a23 * a31;
      var b11 = a22 * a33 - a23 * a32; // Calculate the determinant

      var det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;

      if (!det) {
        return null;
      }

      det = 1.0 / det;
      out[0] = (a11 * b11 - a12 * b10 + a13 * b09) * det;
      out[1] = (a02 * b10 - a01 * b11 - a03 * b09) * det;
      out[2] = (a31 * b05 - a32 * b04 + a33 * b03) * det;
      out[3] = (a22 * b04 - a21 * b05 - a23 * b03) * det;
      out[4] = (a12 * b08 - a10 * b11 - a13 * b07) * det;
      out[5] = (a00 * b11 - a02 * b08 + a03 * b07) * det;
      out[6] = (a32 * b02 - a30 * b05 - a33 * b01) * det;
      out[7] = (a20 * b05 - a22 * b02 + a23 * b01) * det;
      out[8] = (a10 * b10 - a11 * b08 + a13 * b06) * det;
      out[9] = (a01 * b08 - a00 * b10 - a03 * b06) * det;
      out[10] = (a30 * b04 - a31 * b02 + a33 * b00) * det;
      out[11] = (a21 * b02 - a20 * b04 - a23 * b00) * det;
      out[12] = (a11 * b07 - a10 * b09 - a12 * b06) * det;
      out[13] = (a00 * b09 - a01 * b07 + a02 * b06) * det;
      out[14] = (a31 * b01 - a30 * b03 - a32 * b00) * det;
      out[15] = (a20 * b03 - a21 * b01 + a22 * b00) * det;
      return out;
    }
    /**
     * Calculates the adjugate of a mat4
     *
     * @param {mat4} out the receiving matrix
     * @param {mat4} a the source matrix
     * @returns {mat4} out
     */

    function adjoint(out, a) {
      var a00 = a[0],
          a01 = a[1],
          a02 = a[2],
          a03 = a[3];
      var a10 = a[4],
          a11 = a[5],
          a12 = a[6],
          a13 = a[7];
      var a20 = a[8],
          a21 = a[9],
          a22 = a[10],
          a23 = a[11];
      var a30 = a[12],
          a31 = a[13],
          a32 = a[14],
          a33 = a[15];
      out[0] = a11 * (a22 * a33 - a23 * a32) - a21 * (a12 * a33 - a13 * a32) + a31 * (a12 * a23 - a13 * a22);
      out[1] = -(a01 * (a22 * a33 - a23 * a32) - a21 * (a02 * a33 - a03 * a32) + a31 * (a02 * a23 - a03 * a22));
      out[2] = a01 * (a12 * a33 - a13 * a32) - a11 * (a02 * a33 - a03 * a32) + a31 * (a02 * a13 - a03 * a12);
      out[3] = -(a01 * (a12 * a23 - a13 * a22) - a11 * (a02 * a23 - a03 * a22) + a21 * (a02 * a13 - a03 * a12));
      out[4] = -(a10 * (a22 * a33 - a23 * a32) - a20 * (a12 * a33 - a13 * a32) + a30 * (a12 * a23 - a13 * a22));
      out[5] = a00 * (a22 * a33 - a23 * a32) - a20 * (a02 * a33 - a03 * a32) + a30 * (a02 * a23 - a03 * a22);
      out[6] = -(a00 * (a12 * a33 - a13 * a32) - a10 * (a02 * a33 - a03 * a32) + a30 * (a02 * a13 - a03 * a12));
      out[7] = a00 * (a12 * a23 - a13 * a22) - a10 * (a02 * a23 - a03 * a22) + a20 * (a02 * a13 - a03 * a12);
      out[8] = a10 * (a21 * a33 - a23 * a31) - a20 * (a11 * a33 - a13 * a31) + a30 * (a11 * a23 - a13 * a21);
      out[9] = -(a00 * (a21 * a33 - a23 * a31) - a20 * (a01 * a33 - a03 * a31) + a30 * (a01 * a23 - a03 * a21));
      out[10] = a00 * (a11 * a33 - a13 * a31) - a10 * (a01 * a33 - a03 * a31) + a30 * (a01 * a13 - a03 * a11);
      out[11] = -(a00 * (a11 * a23 - a13 * a21) - a10 * (a01 * a23 - a03 * a21) + a20 * (a01 * a13 - a03 * a11));
      out[12] = -(a10 * (a21 * a32 - a22 * a31) - a20 * (a11 * a32 - a12 * a31) + a30 * (a11 * a22 - a12 * a21));
      out[13] = a00 * (a21 * a32 - a22 * a31) - a20 * (a01 * a32 - a02 * a31) + a30 * (a01 * a22 - a02 * a21);
      out[14] = -(a00 * (a11 * a32 - a12 * a31) - a10 * (a01 * a32 - a02 * a31) + a30 * (a01 * a12 - a02 * a11));
      out[15] = a00 * (a11 * a22 - a12 * a21) - a10 * (a01 * a22 - a02 * a21) + a20 * (a01 * a12 - a02 * a11);
      return out;
    }
    /**
     * Calculates the determinant of a mat4
     *
     * @param {mat4} a the source matrix
     * @returns {Number} determinant of a
     */

    function determinant(a) {
      var a00 = a[0],
          a01 = a[1],
          a02 = a[2],
          a03 = a[3];
      var a10 = a[4],
          a11 = a[5],
          a12 = a[6],
          a13 = a[7];
      var a20 = a[8],
          a21 = a[9],
          a22 = a[10],
          a23 = a[11];
      var a30 = a[12],
          a31 = a[13],
          a32 = a[14],
          a33 = a[15];
      var b00 = a00 * a11 - a01 * a10;
      var b01 = a00 * a12 - a02 * a10;
      var b02 = a00 * a13 - a03 * a10;
      var b03 = a01 * a12 - a02 * a11;
      var b04 = a01 * a13 - a03 * a11;
      var b05 = a02 * a13 - a03 * a12;
      var b06 = a20 * a31 - a21 * a30;
      var b07 = a20 * a32 - a22 * a30;
      var b08 = a20 * a33 - a23 * a30;
      var b09 = a21 * a32 - a22 * a31;
      var b10 = a21 * a33 - a23 * a31;
      var b11 = a22 * a33 - a23 * a32; // Calculate the determinant

      return b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
    }
    /**
     * Multiplies two mat4s
     *
     * @param {mat4} out the receiving matrix
     * @param {mat4} a the first operand
     * @param {mat4} b the second operand
     * @returns {mat4} out
     */

    function multiply(out, a, b) {
      var a00 = a[0],
          a01 = a[1],
          a02 = a[2],
          a03 = a[3];
      var a10 = a[4],
          a11 = a[5],
          a12 = a[6],
          a13 = a[7];
      var a20 = a[8],
          a21 = a[9],
          a22 = a[10],
          a23 = a[11];
      var a30 = a[12],
          a31 = a[13],
          a32 = a[14],
          a33 = a[15]; // Cache only the current line of the second matrix

      var b0 = b[0],
          b1 = b[1],
          b2 = b[2],
          b3 = b[3];
      out[0] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
      out[1] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
      out[2] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
      out[3] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
      b0 = b[4];
      b1 = b[5];
      b2 = b[6];
      b3 = b[7];
      out[4] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
      out[5] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
      out[6] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
      out[7] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
      b0 = b[8];
      b1 = b[9];
      b2 = b[10];
      b3 = b[11];
      out[8] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
      out[9] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
      out[10] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
      out[11] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
      b0 = b[12];
      b1 = b[13];
      b2 = b[14];
      b3 = b[15];
      out[12] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
      out[13] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
      out[14] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
      out[15] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
      return out;
    }
    /**
     * Translate a mat4 by the given vector
     *
     * @param {mat4} out the receiving matrix
     * @param {mat4} a the matrix to translate
     * @param {vec3} v vector to translate by
     * @returns {mat4} out
     */

    function translate(out, a, v) {
      var x = v[0],
          y = v[1],
          z = v[2];
      var a00, a01, a02, a03;
      var a10, a11, a12, a13;
      var a20, a21, a22, a23;

      if (a === out) {
        out[12] = a[0] * x + a[4] * y + a[8] * z + a[12];
        out[13] = a[1] * x + a[5] * y + a[9] * z + a[13];
        out[14] = a[2] * x + a[6] * y + a[10] * z + a[14];
        out[15] = a[3] * x + a[7] * y + a[11] * z + a[15];
      } else {
        a00 = a[0];
        a01 = a[1];
        a02 = a[2];
        a03 = a[3];
        a10 = a[4];
        a11 = a[5];
        a12 = a[6];
        a13 = a[7];
        a20 = a[8];
        a21 = a[9];
        a22 = a[10];
        a23 = a[11];
        out[0] = a00;
        out[1] = a01;
        out[2] = a02;
        out[3] = a03;
        out[4] = a10;
        out[5] = a11;
        out[6] = a12;
        out[7] = a13;
        out[8] = a20;
        out[9] = a21;
        out[10] = a22;
        out[11] = a23;
        out[12] = a00 * x + a10 * y + a20 * z + a[12];
        out[13] = a01 * x + a11 * y + a21 * z + a[13];
        out[14] = a02 * x + a12 * y + a22 * z + a[14];
        out[15] = a03 * x + a13 * y + a23 * z + a[15];
      }

      return out;
    }
    /**
     * Scales the mat4 by the dimensions in the given vec3 not using vectorization
     *
     * @param {mat4} out the receiving matrix
     * @param {mat4} a the matrix to scale
     * @param {vec3} v the vec3 to scale the matrix by
     * @returns {mat4} out
     **/

    function scale(out, a, v) {
      var x = v[0],
          y = v[1],
          z = v[2];
      out[0] = a[0] * x;
      out[1] = a[1] * x;
      out[2] = a[2] * x;
      out[3] = a[3] * x;
      out[4] = a[4] * y;
      out[5] = a[5] * y;
      out[6] = a[6] * y;
      out[7] = a[7] * y;
      out[8] = a[8] * z;
      out[9] = a[9] * z;
      out[10] = a[10] * z;
      out[11] = a[11] * z;
      out[12] = a[12];
      out[13] = a[13];
      out[14] = a[14];
      out[15] = a[15];
      return out;
    }
    /**
     * Rotates a mat4 by the given angle around the given axis
     *
     * @param {mat4} out the receiving matrix
     * @param {mat4} a the matrix to rotate
     * @param {Number} rad the angle to rotate the matrix by
     * @param {vec3} axis the axis to rotate around
     * @returns {mat4} out
     */

    function rotate(out, a, rad, axis) {
      var x = axis[0],
          y = axis[1],
          z = axis[2];
      var len = Math.sqrt(x * x + y * y + z * z);
      var s, c, t;
      var a00, a01, a02, a03;
      var a10, a11, a12, a13;
      var a20, a21, a22, a23;
      var b00, b01, b02;
      var b10, b11, b12;
      var b20, b21, b22;

      if (len < EPSILON) {
        return null;
      }

      len = 1 / len;
      x *= len;
      y *= len;
      z *= len;
      s = Math.sin(rad);
      c = Math.cos(rad);
      t = 1 - c;
      a00 = a[0];
      a01 = a[1];
      a02 = a[2];
      a03 = a[3];
      a10 = a[4];
      a11 = a[5];
      a12 = a[6];
      a13 = a[7];
      a20 = a[8];
      a21 = a[9];
      a22 = a[10];
      a23 = a[11]; // Construct the elements of the rotation matrix

      b00 = x * x * t + c;
      b01 = y * x * t + z * s;
      b02 = z * x * t - y * s;
      b10 = x * y * t - z * s;
      b11 = y * y * t + c;
      b12 = z * y * t + x * s;
      b20 = x * z * t + y * s;
      b21 = y * z * t - x * s;
      b22 = z * z * t + c; // Perform rotation-specific matrix multiplication

      out[0] = a00 * b00 + a10 * b01 + a20 * b02;
      out[1] = a01 * b00 + a11 * b01 + a21 * b02;
      out[2] = a02 * b00 + a12 * b01 + a22 * b02;
      out[3] = a03 * b00 + a13 * b01 + a23 * b02;
      out[4] = a00 * b10 + a10 * b11 + a20 * b12;
      out[5] = a01 * b10 + a11 * b11 + a21 * b12;
      out[6] = a02 * b10 + a12 * b11 + a22 * b12;
      out[7] = a03 * b10 + a13 * b11 + a23 * b12;
      out[8] = a00 * b20 + a10 * b21 + a20 * b22;
      out[9] = a01 * b20 + a11 * b21 + a21 * b22;
      out[10] = a02 * b20 + a12 * b21 + a22 * b22;
      out[11] = a03 * b20 + a13 * b21 + a23 * b22;

      if (a !== out) {
        // If the source and destination differ, copy the unchanged last row
        out[12] = a[12];
        out[13] = a[13];
        out[14] = a[14];
        out[15] = a[15];
      }

      return out;
    }
    /**
     * Rotates a matrix by the given angle around the X axis
     *
     * @param {mat4} out the receiving matrix
     * @param {mat4} a the matrix to rotate
     * @param {Number} rad the angle to rotate the matrix by
     * @returns {mat4} out
     */

    function rotateX(out, a, rad) {
      var s = Math.sin(rad);
      var c = Math.cos(rad);
      var a10 = a[4];
      var a11 = a[5];
      var a12 = a[6];
      var a13 = a[7];
      var a20 = a[8];
      var a21 = a[9];
      var a22 = a[10];
      var a23 = a[11];

      if (a !== out) {
        // If the source and destination differ, copy the unchanged rows
        out[0] = a[0];
        out[1] = a[1];
        out[2] = a[2];
        out[3] = a[3];
        out[12] = a[12];
        out[13] = a[13];
        out[14] = a[14];
        out[15] = a[15];
      } // Perform axis-specific matrix multiplication


      out[4] = a10 * c + a20 * s;
      out[5] = a11 * c + a21 * s;
      out[6] = a12 * c + a22 * s;
      out[7] = a13 * c + a23 * s;
      out[8] = a20 * c - a10 * s;
      out[9] = a21 * c - a11 * s;
      out[10] = a22 * c - a12 * s;
      out[11] = a23 * c - a13 * s;
      return out;
    }
    /**
     * Rotates a matrix by the given angle around the Y axis
     *
     * @param {mat4} out the receiving matrix
     * @param {mat4} a the matrix to rotate
     * @param {Number} rad the angle to rotate the matrix by
     * @returns {mat4} out
     */

    function rotateY(out, a, rad) {
      var s = Math.sin(rad);
      var c = Math.cos(rad);
      var a00 = a[0];
      var a01 = a[1];
      var a02 = a[2];
      var a03 = a[3];
      var a20 = a[8];
      var a21 = a[9];
      var a22 = a[10];
      var a23 = a[11];

      if (a !== out) {
        // If the source and destination differ, copy the unchanged rows
        out[4] = a[4];
        out[5] = a[5];
        out[6] = a[6];
        out[7] = a[7];
        out[12] = a[12];
        out[13] = a[13];
        out[14] = a[14];
        out[15] = a[15];
      } // Perform axis-specific matrix multiplication


      out[0] = a00 * c - a20 * s;
      out[1] = a01 * c - a21 * s;
      out[2] = a02 * c - a22 * s;
      out[3] = a03 * c - a23 * s;
      out[8] = a00 * s + a20 * c;
      out[9] = a01 * s + a21 * c;
      out[10] = a02 * s + a22 * c;
      out[11] = a03 * s + a23 * c;
      return out;
    }
    /**
     * Rotates a matrix by the given angle around the Z axis
     *
     * @param {mat4} out the receiving matrix
     * @param {mat4} a the matrix to rotate
     * @param {Number} rad the angle to rotate the matrix by
     * @returns {mat4} out
     */

    function rotateZ(out, a, rad) {
      var s = Math.sin(rad);
      var c = Math.cos(rad);
      var a00 = a[0];
      var a01 = a[1];
      var a02 = a[2];
      var a03 = a[3];
      var a10 = a[4];
      var a11 = a[5];
      var a12 = a[6];
      var a13 = a[7];

      if (a !== out) {
        // If the source and destination differ, copy the unchanged last row
        out[8] = a[8];
        out[9] = a[9];
        out[10] = a[10];
        out[11] = a[11];
        out[12] = a[12];
        out[13] = a[13];
        out[14] = a[14];
        out[15] = a[15];
      } // Perform axis-specific matrix multiplication


      out[0] = a00 * c + a10 * s;
      out[1] = a01 * c + a11 * s;
      out[2] = a02 * c + a12 * s;
      out[3] = a03 * c + a13 * s;
      out[4] = a10 * c - a00 * s;
      out[5] = a11 * c - a01 * s;
      out[6] = a12 * c - a02 * s;
      out[7] = a13 * c - a03 * s;
      return out;
    }
    /**
     * Creates a matrix from a vector translation
     * This is equivalent to (but much faster than):
     *
     *     mat4.identity(dest);
     *     mat4.translate(dest, dest, vec);
     *
     * @param {mat4} out mat4 receiving operation result
     * @param {vec3} v Translation vector
     * @returns {mat4} out
     */

    function fromTranslation(out, v) {
      out[0] = 1;
      out[1] = 0;
      out[2] = 0;
      out[3] = 0;
      out[4] = 0;
      out[5] = 1;
      out[6] = 0;
      out[7] = 0;
      out[8] = 0;
      out[9] = 0;
      out[10] = 1;
      out[11] = 0;
      out[12] = v[0];
      out[13] = v[1];
      out[14] = v[2];
      out[15] = 1;
      return out;
    }
    /**
     * Creates a matrix from a vector scaling
     * This is equivalent to (but much faster than):
     *
     *     mat4.identity(dest);
     *     mat4.scale(dest, dest, vec);
     *
     * @param {mat4} out mat4 receiving operation result
     * @param {vec3} v Scaling vector
     * @returns {mat4} out
     */

    function fromScaling(out, v) {
      out[0] = v[0];
      out[1] = 0;
      out[2] = 0;
      out[3] = 0;
      out[4] = 0;
      out[5] = v[1];
      out[6] = 0;
      out[7] = 0;
      out[8] = 0;
      out[9] = 0;
      out[10] = v[2];
      out[11] = 0;
      out[12] = 0;
      out[13] = 0;
      out[14] = 0;
      out[15] = 1;
      return out;
    }
    /**
     * Creates a matrix from a given angle around a given axis
     * This is equivalent to (but much faster than):
     *
     *     mat4.identity(dest);
     *     mat4.rotate(dest, dest, rad, axis);
     *
     * @param {mat4} out mat4 receiving operation result
     * @param {Number} rad the angle to rotate the matrix by
     * @param {vec3} axis the axis to rotate around
     * @returns {mat4} out
     */

    function fromRotation(out, rad, axis) {
      var x = axis[0],
          y = axis[1],
          z = axis[2];
      var len = Math.sqrt(x * x + y * y + z * z);
      var s, c, t;

      if (len < EPSILON) {
        return null;
      }

      len = 1 / len;
      x *= len;
      y *= len;
      z *= len;
      s = Math.sin(rad);
      c = Math.cos(rad);
      t = 1 - c; // Perform rotation-specific matrix multiplication

      out[0] = x * x * t + c;
      out[1] = y * x * t + z * s;
      out[2] = z * x * t - y * s;
      out[3] = 0;
      out[4] = x * y * t - z * s;
      out[5] = y * y * t + c;
      out[6] = z * y * t + x * s;
      out[7] = 0;
      out[8] = x * z * t + y * s;
      out[9] = y * z * t - x * s;
      out[10] = z * z * t + c;
      out[11] = 0;
      out[12] = 0;
      out[13] = 0;
      out[14] = 0;
      out[15] = 1;
      return out;
    }
    /**
     * Creates a matrix from the given angle around the X axis
     * This is equivalent to (but much faster than):
     *
     *     mat4.identity(dest);
     *     mat4.rotateX(dest, dest, rad);
     *
     * @param {mat4} out mat4 receiving operation result
     * @param {Number} rad the angle to rotate the matrix by
     * @returns {mat4} out
     */

    function fromXRotation(out, rad) {
      var s = Math.sin(rad);
      var c = Math.cos(rad); // Perform axis-specific matrix multiplication

      out[0] = 1;
      out[1] = 0;
      out[2] = 0;
      out[3] = 0;
      out[4] = 0;
      out[5] = c;
      out[6] = s;
      out[7] = 0;
      out[8] = 0;
      out[9] = -s;
      out[10] = c;
      out[11] = 0;
      out[12] = 0;
      out[13] = 0;
      out[14] = 0;
      out[15] = 1;
      return out;
    }
    /**
     * Creates a matrix from the given angle around the Y axis
     * This is equivalent to (but much faster than):
     *
     *     mat4.identity(dest);
     *     mat4.rotateY(dest, dest, rad);
     *
     * @param {mat4} out mat4 receiving operation result
     * @param {Number} rad the angle to rotate the matrix by
     * @returns {mat4} out
     */

    function fromYRotation(out, rad) {
      var s = Math.sin(rad);
      var c = Math.cos(rad); // Perform axis-specific matrix multiplication

      out[0] = c;
      out[1] = 0;
      out[2] = -s;
      out[3] = 0;
      out[4] = 0;
      out[5] = 1;
      out[6] = 0;
      out[7] = 0;
      out[8] = s;
      out[9] = 0;
      out[10] = c;
      out[11] = 0;
      out[12] = 0;
      out[13] = 0;
      out[14] = 0;
      out[15] = 1;
      return out;
    }
    /**
     * Creates a matrix from the given angle around the Z axis
     * This is equivalent to (but much faster than):
     *
     *     mat4.identity(dest);
     *     mat4.rotateZ(dest, dest, rad);
     *
     * @param {mat4} out mat4 receiving operation result
     * @param {Number} rad the angle to rotate the matrix by
     * @returns {mat4} out
     */

    function fromZRotation(out, rad) {
      var s = Math.sin(rad);
      var c = Math.cos(rad); // Perform axis-specific matrix multiplication

      out[0] = c;
      out[1] = s;
      out[2] = 0;
      out[3] = 0;
      out[4] = -s;
      out[5] = c;
      out[6] = 0;
      out[7] = 0;
      out[8] = 0;
      out[9] = 0;
      out[10] = 1;
      out[11] = 0;
      out[12] = 0;
      out[13] = 0;
      out[14] = 0;
      out[15] = 1;
      return out;
    }
    /**
     * Creates a matrix from a quaternion rotation and vector translation
     * This is equivalent to (but much faster than):
     *
     *     mat4.identity(dest);
     *     mat4.translate(dest, vec);
     *     let quatMat = mat4.create();
     *     quat4.toMat4(quat, quatMat);
     *     mat4.multiply(dest, quatMat);
     *
     * @param {mat4} out mat4 receiving operation result
     * @param {quat4} q Rotation quaternion
     * @param {vec3} v Translation vector
     * @returns {mat4} out
     */

    function fromRotationTranslation(out, q, v) {
      // Quaternion math
      var x = q[0],
          y = q[1],
          z = q[2],
          w = q[3];
      var x2 = x + x;
      var y2 = y + y;
      var z2 = z + z;
      var xx = x * x2;
      var xy = x * y2;
      var xz = x * z2;
      var yy = y * y2;
      var yz = y * z2;
      var zz = z * z2;
      var wx = w * x2;
      var wy = w * y2;
      var wz = w * z2;
      out[0] = 1 - (yy + zz);
      out[1] = xy + wz;
      out[2] = xz - wy;
      out[3] = 0;
      out[4] = xy - wz;
      out[5] = 1 - (xx + zz);
      out[6] = yz + wx;
      out[7] = 0;
      out[8] = xz + wy;
      out[9] = yz - wx;
      out[10] = 1 - (xx + yy);
      out[11] = 0;
      out[12] = v[0];
      out[13] = v[1];
      out[14] = v[2];
      out[15] = 1;
      return out;
    }
    /**
     * Creates a new mat4 from a dual quat.
     *
     * @param {mat4} out Matrix
     * @param {quat2} a Dual Quaternion
     * @returns {mat4} mat4 receiving operation result
     */

    function fromQuat2(out, a) {
      var translation = new ARRAY_TYPE(3);
      var bx = -a[0],
          by = -a[1],
          bz = -a[2],
          bw = a[3],
          ax = a[4],
          ay = a[5],
          az = a[6],
          aw = a[7];
      var magnitude = bx * bx + by * by + bz * bz + bw * bw; //Only scale if it makes sense

      if (magnitude > 0) {
        translation[0] = (ax * bw + aw * bx + ay * bz - az * by) * 2 / magnitude;
        translation[1] = (ay * bw + aw * by + az * bx - ax * bz) * 2 / magnitude;
        translation[2] = (az * bw + aw * bz + ax * by - ay * bx) * 2 / magnitude;
      } else {
        translation[0] = (ax * bw + aw * bx + ay * bz - az * by) * 2;
        translation[1] = (ay * bw + aw * by + az * bx - ax * bz) * 2;
        translation[2] = (az * bw + aw * bz + ax * by - ay * bx) * 2;
      }

      fromRotationTranslation(out, a, translation);
      return out;
    }
    /**
     * Returns the translation vector component of a transformation
     *  matrix. If a matrix is built with fromRotationTranslation,
     *  the returned vector will be the same as the translation vector
     *  originally supplied.
     * @param  {vec3} out Vector to receive translation component
     * @param  {mat4} mat Matrix to be decomposed (input)
     * @return {vec3} out
     */

    function getTranslation(out, mat) {
      out[0] = mat[12];
      out[1] = mat[13];
      out[2] = mat[14];
      return out;
    }
    /**
     * Returns the scaling factor component of a transformation
     *  matrix. If a matrix is built with fromRotationTranslationScale
     *  with a normalized Quaternion paramter, the returned vector will be
     *  the same as the scaling vector
     *  originally supplied.
     * @param  {vec3} out Vector to receive scaling factor component
     * @param  {mat4} mat Matrix to be decomposed (input)
     * @return {vec3} out
     */

    function getScaling(out, mat) {
      var m11 = mat[0];
      var m12 = mat[1];
      var m13 = mat[2];
      var m21 = mat[4];
      var m22 = mat[5];
      var m23 = mat[6];
      var m31 = mat[8];
      var m32 = mat[9];
      var m33 = mat[10];
      out[0] = Math.sqrt(m11 * m11 + m12 * m12 + m13 * m13);
      out[1] = Math.sqrt(m21 * m21 + m22 * m22 + m23 * m23);
      out[2] = Math.sqrt(m31 * m31 + m32 * m32 + m33 * m33);
      return out;
    }
    /**
     * Returns a quaternion representing the rotational component
     *  of a transformation matrix. If a matrix is built with
     *  fromRotationTranslation, the returned quaternion will be the
     *  same as the quaternion originally supplied.
     * @param {quat} out Quaternion to receive the rotation component
     * @param {mat4} mat Matrix to be decomposed (input)
     * @return {quat} out
     */

    function getRotation(out, mat) {
      // Algorithm taken from http://www.euclideanspace.com/maths/geometry/rotations/conversions/matrixToQuaternion/index.htm
      var trace = mat[0] + mat[5] + mat[10];
      var S = 0;

      if (trace > 0) {
        S = Math.sqrt(trace + 1.0) * 2;
        out[3] = 0.25 * S;
        out[0] = (mat[6] - mat[9]) / S;
        out[1] = (mat[8] - mat[2]) / S;
        out[2] = (mat[1] - mat[4]) / S;
      } else if (mat[0] > mat[5] && mat[0] > mat[10]) {
        S = Math.sqrt(1.0 + mat[0] - mat[5] - mat[10]) * 2;
        out[3] = (mat[6] - mat[9]) / S;
        out[0] = 0.25 * S;
        out[1] = (mat[1] + mat[4]) / S;
        out[2] = (mat[8] + mat[2]) / S;
      } else if (mat[5] > mat[10]) {
        S = Math.sqrt(1.0 + mat[5] - mat[0] - mat[10]) * 2;
        out[3] = (mat[8] - mat[2]) / S;
        out[0] = (mat[1] + mat[4]) / S;
        out[1] = 0.25 * S;
        out[2] = (mat[6] + mat[9]) / S;
      } else {
        S = Math.sqrt(1.0 + mat[10] - mat[0] - mat[5]) * 2;
        out[3] = (mat[1] - mat[4]) / S;
        out[0] = (mat[8] + mat[2]) / S;
        out[1] = (mat[6] + mat[9]) / S;
        out[2] = 0.25 * S;
      }

      return out;
    }
    /**
     * Creates a matrix from a quaternion rotation, vector translation and vector scale
     * This is equivalent to (but much faster than):
     *
     *     mat4.identity(dest);
     *     mat4.translate(dest, vec);
     *     let quatMat = mat4.create();
     *     quat4.toMat4(quat, quatMat);
     *     mat4.multiply(dest, quatMat);
     *     mat4.scale(dest, scale)
     *
     * @param {mat4} out mat4 receiving operation result
     * @param {quat4} q Rotation quaternion
     * @param {vec3} v Translation vector
     * @param {vec3} s Scaling vector
     * @returns {mat4} out
     */

    function fromRotationTranslationScale(out, q, v, s) {
      // Quaternion math
      var x = q[0],
          y = q[1],
          z = q[2],
          w = q[3];
      var x2 = x + x;
      var y2 = y + y;
      var z2 = z + z;
      var xx = x * x2;
      var xy = x * y2;
      var xz = x * z2;
      var yy = y * y2;
      var yz = y * z2;
      var zz = z * z2;
      var wx = w * x2;
      var wy = w * y2;
      var wz = w * z2;
      var sx = s[0];
      var sy = s[1];
      var sz = s[2];
      out[0] = (1 - (yy + zz)) * sx;
      out[1] = (xy + wz) * sx;
      out[2] = (xz - wy) * sx;
      out[3] = 0;
      out[4] = (xy - wz) * sy;
      out[5] = (1 - (xx + zz)) * sy;
      out[6] = (yz + wx) * sy;
      out[7] = 0;
      out[8] = (xz + wy) * sz;
      out[9] = (yz - wx) * sz;
      out[10] = (1 - (xx + yy)) * sz;
      out[11] = 0;
      out[12] = v[0];
      out[13] = v[1];
      out[14] = v[2];
      out[15] = 1;
      return out;
    }
    /**
     * Creates a matrix from a quaternion rotation, vector translation and vector scale, rotating and scaling around the given origin
     * This is equivalent to (but much faster than):
     *
     *     mat4.identity(dest);
     *     mat4.translate(dest, vec);
     *     mat4.translate(dest, origin);
     *     let quatMat = mat4.create();
     *     quat4.toMat4(quat, quatMat);
     *     mat4.multiply(dest, quatMat);
     *     mat4.scale(dest, scale)
     *     mat4.translate(dest, negativeOrigin);
     *
     * @param {mat4} out mat4 receiving operation result
     * @param {quat4} q Rotation quaternion
     * @param {vec3} v Translation vector
     * @param {vec3} s Scaling vector
     * @param {vec3} o The origin vector around which to scale and rotate
     * @returns {mat4} out
     */

    function fromRotationTranslationScaleOrigin(out, q, v, s, o) {
      // Quaternion math
      var x = q[0],
          y = q[1],
          z = q[2],
          w = q[3];
      var x2 = x + x;
      var y2 = y + y;
      var z2 = z + z;
      var xx = x * x2;
      var xy = x * y2;
      var xz = x * z2;
      var yy = y * y2;
      var yz = y * z2;
      var zz = z * z2;
      var wx = w * x2;
      var wy = w * y2;
      var wz = w * z2;
      var sx = s[0];
      var sy = s[1];
      var sz = s[2];
      var ox = o[0];
      var oy = o[1];
      var oz = o[2];
      var out0 = (1 - (yy + zz)) * sx;
      var out1 = (xy + wz) * sx;
      var out2 = (xz - wy) * sx;
      var out4 = (xy - wz) * sy;
      var out5 = (1 - (xx + zz)) * sy;
      var out6 = (yz + wx) * sy;
      var out8 = (xz + wy) * sz;
      var out9 = (yz - wx) * sz;
      var out10 = (1 - (xx + yy)) * sz;
      out[0] = out0;
      out[1] = out1;
      out[2] = out2;
      out[3] = 0;
      out[4] = out4;
      out[5] = out5;
      out[6] = out6;
      out[7] = 0;
      out[8] = out8;
      out[9] = out9;
      out[10] = out10;
      out[11] = 0;
      out[12] = v[0] + ox - (out0 * ox + out4 * oy + out8 * oz);
      out[13] = v[1] + oy - (out1 * ox + out5 * oy + out9 * oz);
      out[14] = v[2] + oz - (out2 * ox + out6 * oy + out10 * oz);
      out[15] = 1;
      return out;
    }
    /**
     * Calculates a 4x4 matrix from the given quaternion
     *
     * @param {mat4} out mat4 receiving operation result
     * @param {quat} q Quaternion to create matrix from
     *
     * @returns {mat4} out
     */

    function fromQuat(out, q) {
      var x = q[0],
          y = q[1],
          z = q[2],
          w = q[3];
      var x2 = x + x;
      var y2 = y + y;
      var z2 = z + z;
      var xx = x * x2;
      var yx = y * x2;
      var yy = y * y2;
      var zx = z * x2;
      var zy = z * y2;
      var zz = z * z2;
      var wx = w * x2;
      var wy = w * y2;
      var wz = w * z2;
      out[0] = 1 - yy - zz;
      out[1] = yx + wz;
      out[2] = zx - wy;
      out[3] = 0;
      out[4] = yx - wz;
      out[5] = 1 - xx - zz;
      out[6] = zy + wx;
      out[7] = 0;
      out[8] = zx + wy;
      out[9] = zy - wx;
      out[10] = 1 - xx - yy;
      out[11] = 0;
      out[12] = 0;
      out[13] = 0;
      out[14] = 0;
      out[15] = 1;
      return out;
    }
    /**
     * Generates a frustum matrix with the given bounds
     *
     * @param {mat4} out mat4 frustum matrix will be written into
     * @param {Number} left Left bound of the frustum
     * @param {Number} right Right bound of the frustum
     * @param {Number} bottom Bottom bound of the frustum
     * @param {Number} top Top bound of the frustum
     * @param {Number} near Near bound of the frustum
     * @param {Number} far Far bound of the frustum
     * @returns {mat4} out
     */

    function frustum(out, left, right, bottom, top, near, far) {
      var rl = 1 / (right - left);
      var tb = 1 / (top - bottom);
      var nf = 1 / (near - far);
      out[0] = near * 2 * rl;
      out[1] = 0;
      out[2] = 0;
      out[3] = 0;
      out[4] = 0;
      out[5] = near * 2 * tb;
      out[6] = 0;
      out[7] = 0;
      out[8] = (right + left) * rl;
      out[9] = (top + bottom) * tb;
      out[10] = (far + near) * nf;
      out[11] = -1;
      out[12] = 0;
      out[13] = 0;
      out[14] = far * near * 2 * nf;
      out[15] = 0;
      return out;
    }
    /**
     * Generates a perspective projection matrix with the given bounds.
     * Passing null/undefined/no value for far will generate infinite projection matrix.
     *
     * @param {mat4} out mat4 frustum matrix will be written into
     * @param {number} fovy Vertical field of view in radians
     * @param {number} aspect Aspect ratio. typically viewport width/height
     * @param {number} near Near bound of the frustum
     * @param {number} far Far bound of the frustum, can be null or Infinity
     * @returns {mat4} out
     */

    function perspective(out, fovy, aspect, near, far) {
      var f = 1.0 / Math.tan(fovy / 2),
          nf;
      out[0] = f / aspect;
      out[1] = 0;
      out[2] = 0;
      out[3] = 0;
      out[4] = 0;
      out[5] = f;
      out[6] = 0;
      out[7] = 0;
      out[8] = 0;
      out[9] = 0;
      out[11] = -1;
      out[12] = 0;
      out[13] = 0;
      out[15] = 0;

      if (far != null && far !== Infinity) {
        nf = 1 / (near - far);
        out[10] = (far + near) * nf;
        out[14] = 2 * far * near * nf;
      } else {
        out[10] = -1;
        out[14] = -2 * near;
      }

      return out;
    }
    /**
     * Generates a perspective projection matrix with the given field of view.
     * This is primarily useful for generating projection matrices to be used
     * with the still experiemental WebVR API.
     *
     * @param {mat4} out mat4 frustum matrix will be written into
     * @param {Object} fov Object containing the following values: upDegrees, downDegrees, leftDegrees, rightDegrees
     * @param {number} near Near bound of the frustum
     * @param {number} far Far bound of the frustum
     * @returns {mat4} out
     */

    function perspectiveFromFieldOfView(out, fov, near, far) {
      var upTan = Math.tan(fov.upDegrees * Math.PI / 180.0);
      var downTan = Math.tan(fov.downDegrees * Math.PI / 180.0);
      var leftTan = Math.tan(fov.leftDegrees * Math.PI / 180.0);
      var rightTan = Math.tan(fov.rightDegrees * Math.PI / 180.0);
      var xScale = 2.0 / (leftTan + rightTan);
      var yScale = 2.0 / (upTan + downTan);
      out[0] = xScale;
      out[1] = 0.0;
      out[2] = 0.0;
      out[3] = 0.0;
      out[4] = 0.0;
      out[5] = yScale;
      out[6] = 0.0;
      out[7] = 0.0;
      out[8] = -((leftTan - rightTan) * xScale * 0.5);
      out[9] = (upTan - downTan) * yScale * 0.5;
      out[10] = far / (near - far);
      out[11] = -1.0;
      out[12] = 0.0;
      out[13] = 0.0;
      out[14] = far * near / (near - far);
      out[15] = 0.0;
      return out;
    }
    /**
     * Generates a orthogonal projection matrix with the given bounds
     *
     * @param {mat4} out mat4 frustum matrix will be written into
     * @param {number} left Left bound of the frustum
     * @param {number} right Right bound of the frustum
     * @param {number} bottom Bottom bound of the frustum
     * @param {number} top Top bound of the frustum
     * @param {number} near Near bound of the frustum
     * @param {number} far Far bound of the frustum
     * @returns {mat4} out
     */

    function ortho(out, left, right, bottom, top, near, far) {
      var lr = 1 / (left - right);
      var bt = 1 / (bottom - top);
      var nf = 1 / (near - far);
      out[0] = -2 * lr;
      out[1] = 0;
      out[2] = 0;
      out[3] = 0;
      out[4] = 0;
      out[5] = -2 * bt;
      out[6] = 0;
      out[7] = 0;
      out[8] = 0;
      out[9] = 0;
      out[10] = 2 * nf;
      out[11] = 0;
      out[12] = (left + right) * lr;
      out[13] = (top + bottom) * bt;
      out[14] = (far + near) * nf;
      out[15] = 1;
      return out;
    }
    /**
     * Generates a look-at matrix with the given eye position, focal point, and up axis.
     * If you want a matrix that actually makes an object look at another object, you should use targetTo instead.
     *
     * @param {mat4} out mat4 frustum matrix will be written into
     * @param {vec3} eye Position of the viewer
     * @param {vec3} center Point the viewer is looking at
     * @param {vec3} up vec3 pointing up
     * @returns {mat4} out
     */

    function lookAt(out, eye, center, up) {
      var x0, x1, x2, y0, y1, y2, z0, z1, z2, len;
      var eyex = eye[0];
      var eyey = eye[1];
      var eyez = eye[2];
      var upx = up[0];
      var upy = up[1];
      var upz = up[2];
      var centerx = center[0];
      var centery = center[1];
      var centerz = center[2];

      if (Math.abs(eyex - centerx) < EPSILON && Math.abs(eyey - centery) < EPSILON && Math.abs(eyez - centerz) < EPSILON) {
        return identity(out);
      }

      z0 = eyex - centerx;
      z1 = eyey - centery;
      z2 = eyez - centerz;
      len = 1 / Math.sqrt(z0 * z0 + z1 * z1 + z2 * z2);
      z0 *= len;
      z1 *= len;
      z2 *= len;
      x0 = upy * z2 - upz * z1;
      x1 = upz * z0 - upx * z2;
      x2 = upx * z1 - upy * z0;
      len = Math.sqrt(x0 * x0 + x1 * x1 + x2 * x2);

      if (!len) {
        x0 = 0;
        x1 = 0;
        x2 = 0;
      } else {
        len = 1 / len;
        x0 *= len;
        x1 *= len;
        x2 *= len;
      }

      y0 = z1 * x2 - z2 * x1;
      y1 = z2 * x0 - z0 * x2;
      y2 = z0 * x1 - z1 * x0;
      len = Math.sqrt(y0 * y0 + y1 * y1 + y2 * y2);

      if (!len) {
        y0 = 0;
        y1 = 0;
        y2 = 0;
      } else {
        len = 1 / len;
        y0 *= len;
        y1 *= len;
        y2 *= len;
      }

      out[0] = x0;
      out[1] = y0;
      out[2] = z0;
      out[3] = 0;
      out[4] = x1;
      out[5] = y1;
      out[6] = z1;
      out[7] = 0;
      out[8] = x2;
      out[9] = y2;
      out[10] = z2;
      out[11] = 0;
      out[12] = -(x0 * eyex + x1 * eyey + x2 * eyez);
      out[13] = -(y0 * eyex + y1 * eyey + y2 * eyez);
      out[14] = -(z0 * eyex + z1 * eyey + z2 * eyez);
      out[15] = 1;
      return out;
    }
    /**
     * Generates a matrix that makes something look at something else.
     *
     * @param {mat4} out mat4 frustum matrix will be written into
     * @param {vec3} eye Position of the viewer
     * @param {vec3} center Point the viewer is looking at
     * @param {vec3} up vec3 pointing up
     * @returns {mat4} out
     */

    function targetTo(out, eye, target, up) {
      var eyex = eye[0],
          eyey = eye[1],
          eyez = eye[2],
          upx = up[0],
          upy = up[1],
          upz = up[2];
      var z0 = eyex - target[0],
          z1 = eyey - target[1],
          z2 = eyez - target[2];
      var len = z0 * z0 + z1 * z1 + z2 * z2;

      if (len > 0) {
        len = 1 / Math.sqrt(len);
        z0 *= len;
        z1 *= len;
        z2 *= len;
      }

      var x0 = upy * z2 - upz * z1,
          x1 = upz * z0 - upx * z2,
          x2 = upx * z1 - upy * z0;
      len = x0 * x0 + x1 * x1 + x2 * x2;

      if (len > 0) {
        len = 1 / Math.sqrt(len);
        x0 *= len;
        x1 *= len;
        x2 *= len;
      }

      out[0] = x0;
      out[1] = x1;
      out[2] = x2;
      out[3] = 0;
      out[4] = z1 * x2 - z2 * x1;
      out[5] = z2 * x0 - z0 * x2;
      out[6] = z0 * x1 - z1 * x0;
      out[7] = 0;
      out[8] = z0;
      out[9] = z1;
      out[10] = z2;
      out[11] = 0;
      out[12] = eyex;
      out[13] = eyey;
      out[14] = eyez;
      out[15] = 1;
      return out;
    }
    /**
     * Returns a string representation of a mat4
     *
     * @param {mat4} a matrix to represent as a string
     * @returns {String} string representation of the matrix
     */

    function str(a) {
      return 'mat4(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + a[3] + ', ' + a[4] + ', ' + a[5] + ', ' + a[6] + ', ' + a[7] + ', ' + a[8] + ', ' + a[9] + ', ' + a[10] + ', ' + a[11] + ', ' + a[12] + ', ' + a[13] + ', ' + a[14] + ', ' + a[15] + ')';
    }
    /**
     * Returns Frobenius norm of a mat4
     *
     * @param {mat4} a the matrix to calculate Frobenius norm of
     * @returns {Number} Frobenius norm
     */

    function frob(a) {
      return Math.sqrt(Math.pow(a[0], 2) + Math.pow(a[1], 2) + Math.pow(a[2], 2) + Math.pow(a[3], 2) + Math.pow(a[4], 2) + Math.pow(a[5], 2) + Math.pow(a[6], 2) + Math.pow(a[7], 2) + Math.pow(a[8], 2) + Math.pow(a[9], 2) + Math.pow(a[10], 2) + Math.pow(a[11], 2) + Math.pow(a[12], 2) + Math.pow(a[13], 2) + Math.pow(a[14], 2) + Math.pow(a[15], 2));
    }
    /**
     * Adds two mat4's
     *
     * @param {mat4} out the receiving matrix
     * @param {mat4} a the first operand
     * @param {mat4} b the second operand
     * @returns {mat4} out
     */

    function add(out, a, b) {
      out[0] = a[0] + b[0];
      out[1] = a[1] + b[1];
      out[2] = a[2] + b[2];
      out[3] = a[3] + b[3];
      out[4] = a[4] + b[4];
      out[5] = a[5] + b[5];
      out[6] = a[6] + b[6];
      out[7] = a[7] + b[7];
      out[8] = a[8] + b[8];
      out[9] = a[9] + b[9];
      out[10] = a[10] + b[10];
      out[11] = a[11] + b[11];
      out[12] = a[12] + b[12];
      out[13] = a[13] + b[13];
      out[14] = a[14] + b[14];
      out[15] = a[15] + b[15];
      return out;
    }
    /**
     * Subtracts matrix b from matrix a
     *
     * @param {mat4} out the receiving matrix
     * @param {mat4} a the first operand
     * @param {mat4} b the second operand
     * @returns {mat4} out
     */

    function subtract(out, a, b) {
      out[0] = a[0] - b[0];
      out[1] = a[1] - b[1];
      out[2] = a[2] - b[2];
      out[3] = a[3] - b[3];
      out[4] = a[4] - b[4];
      out[5] = a[5] - b[5];
      out[6] = a[6] - b[6];
      out[7] = a[7] - b[7];
      out[8] = a[8] - b[8];
      out[9] = a[9] - b[9];
      out[10] = a[10] - b[10];
      out[11] = a[11] - b[11];
      out[12] = a[12] - b[12];
      out[13] = a[13] - b[13];
      out[14] = a[14] - b[14];
      out[15] = a[15] - b[15];
      return out;
    }
    /**
     * Multiply each element of the matrix by a scalar.
     *
     * @param {mat4} out the receiving matrix
     * @param {mat4} a the matrix to scale
     * @param {Number} b amount to scale the matrix's elements by
     * @returns {mat4} out
     */

    function multiplyScalar(out, a, b) {
      out[0] = a[0] * b;
      out[1] = a[1] * b;
      out[2] = a[2] * b;
      out[3] = a[3] * b;
      out[4] = a[4] * b;
      out[5] = a[5] * b;
      out[6] = a[6] * b;
      out[7] = a[7] * b;
      out[8] = a[8] * b;
      out[9] = a[9] * b;
      out[10] = a[10] * b;
      out[11] = a[11] * b;
      out[12] = a[12] * b;
      out[13] = a[13] * b;
      out[14] = a[14] * b;
      out[15] = a[15] * b;
      return out;
    }
    /**
     * Adds two mat4's after multiplying each element of the second operand by a scalar value.
     *
     * @param {mat4} out the receiving vector
     * @param {mat4} a the first operand
     * @param {mat4} b the second operand
     * @param {Number} scale the amount to scale b's elements by before adding
     * @returns {mat4} out
     */

    function multiplyScalarAndAdd(out, a, b, scale) {
      out[0] = a[0] + b[0] * scale;
      out[1] = a[1] + b[1] * scale;
      out[2] = a[2] + b[2] * scale;
      out[3] = a[3] + b[3] * scale;
      out[4] = a[4] + b[4] * scale;
      out[5] = a[5] + b[5] * scale;
      out[6] = a[6] + b[6] * scale;
      out[7] = a[7] + b[7] * scale;
      out[8] = a[8] + b[8] * scale;
      out[9] = a[9] + b[9] * scale;
      out[10] = a[10] + b[10] * scale;
      out[11] = a[11] + b[11] * scale;
      out[12] = a[12] + b[12] * scale;
      out[13] = a[13] + b[13] * scale;
      out[14] = a[14] + b[14] * scale;
      out[15] = a[15] + b[15] * scale;
      return out;
    }
    /**
     * Returns whether or not the matrices have exactly the same elements in the same position (when compared with ===)
     *
     * @param {mat4} a The first matrix.
     * @param {mat4} b The second matrix.
     * @returns {Boolean} True if the matrices are equal, false otherwise.
     */

    function exactEquals(a, b) {
      return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3] && a[4] === b[4] && a[5] === b[5] && a[6] === b[6] && a[7] === b[7] && a[8] === b[8] && a[9] === b[9] && a[10] === b[10] && a[11] === b[11] && a[12] === b[12] && a[13] === b[13] && a[14] === b[14] && a[15] === b[15];
    }
    /**
     * Returns whether or not the matrices have approximately the same elements in the same position.
     *
     * @param {mat4} a The first matrix.
     * @param {mat4} b The second matrix.
     * @returns {Boolean} True if the matrices are equal, false otherwise.
     */

    function equals(a, b) {
      var a0 = a[0],
          a1 = a[1],
          a2 = a[2],
          a3 = a[3];
      var a4 = a[4],
          a5 = a[5],
          a6 = a[6],
          a7 = a[7];
      var a8 = a[8],
          a9 = a[9],
          a10 = a[10],
          a11 = a[11];
      var a12 = a[12],
          a13 = a[13],
          a14 = a[14],
          a15 = a[15];
      var b0 = b[0],
          b1 = b[1],
          b2 = b[2],
          b3 = b[3];
      var b4 = b[4],
          b5 = b[5],
          b6 = b[6],
          b7 = b[7];
      var b8 = b[8],
          b9 = b[9],
          b10 = b[10],
          b11 = b[11];
      var b12 = b[12],
          b13 = b[13],
          b14 = b[14],
          b15 = b[15];
      return Math.abs(a0 - b0) <= EPSILON * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= EPSILON * Math.max(1.0, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= EPSILON * Math.max(1.0, Math.abs(a2), Math.abs(b2)) && Math.abs(a3 - b3) <= EPSILON * Math.max(1.0, Math.abs(a3), Math.abs(b3)) && Math.abs(a4 - b4) <= EPSILON * Math.max(1.0, Math.abs(a4), Math.abs(b4)) && Math.abs(a5 - b5) <= EPSILON * Math.max(1.0, Math.abs(a5), Math.abs(b5)) && Math.abs(a6 - b6) <= EPSILON * Math.max(1.0, Math.abs(a6), Math.abs(b6)) && Math.abs(a7 - b7) <= EPSILON * Math.max(1.0, Math.abs(a7), Math.abs(b7)) && Math.abs(a8 - b8) <= EPSILON * Math.max(1.0, Math.abs(a8), Math.abs(b8)) && Math.abs(a9 - b9) <= EPSILON * Math.max(1.0, Math.abs(a9), Math.abs(b9)) && Math.abs(a10 - b10) <= EPSILON * Math.max(1.0, Math.abs(a10), Math.abs(b10)) && Math.abs(a11 - b11) <= EPSILON * Math.max(1.0, Math.abs(a11), Math.abs(b11)) && Math.abs(a12 - b12) <= EPSILON * Math.max(1.0, Math.abs(a12), Math.abs(b12)) && Math.abs(a13 - b13) <= EPSILON * Math.max(1.0, Math.abs(a13), Math.abs(b13)) && Math.abs(a14 - b14) <= EPSILON * Math.max(1.0, Math.abs(a14), Math.abs(b14)) && Math.abs(a15 - b15) <= EPSILON * Math.max(1.0, Math.abs(a15), Math.abs(b15));
    }
    /**
     * Alias for {@link mat4.multiply}
     * @function
     */

    var mul = multiply;
    /**
     * Alias for {@link mat4.subtract}
     * @function
     */

    var sub = subtract;

    var mat4 = ({
        create: create$1,
        clone: clone,
        copy: copy,
        fromValues: fromValues,
        set: set,
        identity: identity,
        transpose: transpose,
        invert: invert,
        adjoint: adjoint,
        determinant: determinant,
        multiply: multiply,
        translate: translate,
        scale: scale,
        rotate: rotate,
        rotateX: rotateX,
        rotateY: rotateY,
        rotateZ: rotateZ,
        fromTranslation: fromTranslation,
        fromScaling: fromScaling,
        fromRotation: fromRotation,
        fromXRotation: fromXRotation,
        fromYRotation: fromYRotation,
        fromZRotation: fromZRotation,
        fromRotationTranslation: fromRotationTranslation,
        fromQuat2: fromQuat2,
        getTranslation: getTranslation,
        getScaling: getScaling,
        getRotation: getRotation,
        fromRotationTranslationScale: fromRotationTranslationScale,
        fromRotationTranslationScaleOrigin: fromRotationTranslationScaleOrigin,
        fromQuat: fromQuat,
        frustum: frustum,
        perspective: perspective,
        perspectiveFromFieldOfView: perspectiveFromFieldOfView,
        ortho: ortho,
        lookAt: lookAt,
        targetTo: targetTo,
        str: str,
        frob: frob,
        add: add,
        subtract: subtract,
        multiplyScalar: multiplyScalar,
        multiplyScalarAndAdd: multiplyScalarAndAdd,
        exactEquals: exactEquals,
        equals: equals,
        mul: mul,
        sub: sub
    });

    /**
     * 3 Dimensional Vector
     * @module vec3
     */

    /**
     * Creates a new, empty vec3
     *
     * @returns {vec3} a new 3D vector
     */

    function create$2() {
      var out = new ARRAY_TYPE(3);

      if (ARRAY_TYPE != Float32Array) {
        out[0] = 0;
        out[1] = 0;
        out[2] = 0;
      }

      return out;
    }
    /**
     * Creates a new vec3 initialized with values from an existing vector
     *
     * @param {vec3} a vector to clone
     * @returns {vec3} a new 3D vector
     */

    function clone$1(a) {
      var out = new ARRAY_TYPE(3);
      out[0] = a[0];
      out[1] = a[1];
      out[2] = a[2];
      return out;
    }
    /**
     * Calculates the length of a vec3
     *
     * @param {vec3} a vector to calculate length of
     * @returns {Number} length of a
     */

    function length(a) {
      var x = a[0];
      var y = a[1];
      var z = a[2];
      return Math.sqrt(x * x + y * y + z * z);
    }
    /**
     * Creates a new vec3 initialized with the given values
     *
     * @param {Number} x X component
     * @param {Number} y Y component
     * @param {Number} z Z component
     * @returns {vec3} a new 3D vector
     */

    function fromValues$1(x, y, z) {
      var out = new ARRAY_TYPE(3);
      out[0] = x;
      out[1] = y;
      out[2] = z;
      return out;
    }
    /**
     * Copy the values from one vec3 to another
     *
     * @param {vec3} out the receiving vector
     * @param {vec3} a the source vector
     * @returns {vec3} out
     */

    function copy$1(out, a) {
      out[0] = a[0];
      out[1] = a[1];
      out[2] = a[2];
      return out;
    }
    /**
     * Adds two vec3's
     *
     * @param {vec3} out the receiving vector
     * @param {vec3} a the first operand
     * @param {vec3} b the second operand
     * @returns {vec3} out
     */

    function add$1(out, a, b) {
      out[0] = a[0] + b[0];
      out[1] = a[1] + b[1];
      out[2] = a[2] + b[2];
      return out;
    }
    /**
     * Subtracts vector b from vector a
     *
     * @param {vec3} out the receiving vector
     * @param {vec3} a the first operand
     * @param {vec3} b the second operand
     * @returns {vec3} out
     */

    function subtract$1(out, a, b) {
      out[0] = a[0] - b[0];
      out[1] = a[1] - b[1];
      out[2] = a[2] - b[2];
      return out;
    }
    /**
     * Negates the components of a vec3
     *
     * @param {vec3} out the receiving vector
     * @param {vec3} a vector to negate
     * @returns {vec3} out
     */

    function negate(out, a) {
      out[0] = -a[0];
      out[1] = -a[1];
      out[2] = -a[2];
      return out;
    }
    /**
     * Normalize a vec3
     *
     * @param {vec3} out the receiving vector
     * @param {vec3} a vector to normalize
     * @returns {vec3} out
     */

    function normalize(out, a) {
      var x = a[0];
      var y = a[1];
      var z = a[2];
      var len = x * x + y * y + z * z;

      if (len > 0) {
        //TODO: evaluate use of glm_invsqrt here?
        len = 1 / Math.sqrt(len);
      }

      out[0] = a[0] * len;
      out[1] = a[1] * len;
      out[2] = a[2] * len;
      return out;
    }
    /**
     * Calculates the dot product of two vec3's
     *
     * @param {vec3} a the first operand
     * @param {vec3} b the second operand
     * @returns {Number} dot product of a and b
     */

    function dot(a, b) {
      return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
    }
    /**
     * Computes the cross product of two vec3's
     *
     * @param {vec3} out the receiving vector
     * @param {vec3} a the first operand
     * @param {vec3} b the second operand
     * @returns {vec3} out
     */

    function cross(out, a, b) {
      var ax = a[0],
          ay = a[1],
          az = a[2];
      var bx = b[0],
          by = b[1],
          bz = b[2];
      out[0] = ay * bz - az * by;
      out[1] = az * bx - ax * bz;
      out[2] = ax * by - ay * bx;
      return out;
    }
    /**
     * Transforms the vec3 with a mat4.
     * 4th vector component is implicitly '1'
     *
     * @param {vec3} out the receiving vector
     * @param {vec3} a the vector to transform
     * @param {mat4} m matrix to transform with
     * @returns {vec3} out
     */

    function transformMat4(out, a, m) {
      var x = a[0],
          y = a[1],
          z = a[2];
      var w = m[3] * x + m[7] * y + m[11] * z + m[15];
      w = w || 1.0;
      out[0] = (m[0] * x + m[4] * y + m[8] * z + m[12]) / w;
      out[1] = (m[1] * x + m[5] * y + m[9] * z + m[13]) / w;
      out[2] = (m[2] * x + m[6] * y + m[10] * z + m[14]) / w;
      return out;
    }
    /**
     * Transforms the vec3 with a quat
     * Can also be used for dual quaternions. (Multiply it with the real part)
     *
     * @param {vec3} out the receiving vector
     * @param {vec3} a the vector to transform
     * @param {quat} q quaternion to transform with
     * @returns {vec3} out
     */

    function transformQuat(out, a, q) {
      // benchmarks: https://jsperf.com/quaternion-transform-vec3-implementations-fixed
      var qx = q[0],
          qy = q[1],
          qz = q[2],
          qw = q[3];
      var x = a[0],
          y = a[1],
          z = a[2]; // var qvec = [qx, qy, qz];
      // var uv = vec3.cross([], qvec, a);

      var uvx = qy * z - qz * y,
          uvy = qz * x - qx * z,
          uvz = qx * y - qy * x; // var uuv = vec3.cross([], qvec, uv);

      var uuvx = qy * uvz - qz * uvy,
          uuvy = qz * uvx - qx * uvz,
          uuvz = qx * uvy - qy * uvx; // vec3.scale(uv, uv, 2 * w);

      var w2 = qw * 2;
      uvx *= w2;
      uvy *= w2;
      uvz *= w2; // vec3.scale(uuv, uuv, 2);

      uuvx *= 2;
      uuvy *= 2;
      uuvz *= 2; // return vec3.add(out, a, vec3.add(out, uv, uuv));

      out[0] = x + uvx + uuvx;
      out[1] = y + uvy + uuvy;
      out[2] = z + uvz + uuvz;
      return out;
    }
    /**
     * Alias for {@link vec3.subtract}
     * @function
     */

    var sub$1 = subtract$1;
    /**
     * Alias for {@link vec3.length}
     * @function
     */

    var len = length;
    /**
     * Perform some operation over an array of vec3s.
     *
     * @param {Array} a the array of vectors to iterate over
     * @param {Number} stride Number of elements between the start of each vec3. If 0 assumes tightly packed
     * @param {Number} offset Number of elements to skip at the beginning of the array
     * @param {Number} count Number of vec3s to iterate over. If 0 iterates over entire array
     * @param {Function} fn Function to call for each vector in the array
     * @param {Object} [arg] additional argument to pass to fn
     * @returns {Array} a
     * @function
     */

    var forEach = function () {
      var vec = create$2();
      return function (a, stride, offset, count, fn, arg) {
        var i, l;

        if (!stride) {
          stride = 3;
        }

        if (!offset) {
          offset = 0;
        }

        if (count) {
          l = Math.min(count * stride + offset, a.length);
        } else {
          l = a.length;
        }

        for (i = offset; i < l; i += stride) {
          vec[0] = a[i];
          vec[1] = a[i + 1];
          vec[2] = a[i + 2];
          fn(vec, vec, arg);
          a[i] = vec[0];
          a[i + 1] = vec[1];
          a[i + 2] = vec[2];
        }

        return a;
      };
    }();

    /**
     * 4 Dimensional Vector
     * @module vec4
     */

    /**
     * Creates a new, empty vec4
     *
     * @returns {vec4} a new 4D vector
     */

    function create$3() {
      var out = new ARRAY_TYPE(4);

      if (ARRAY_TYPE != Float32Array) {
        out[0] = 0;
        out[1] = 0;
        out[2] = 0;
        out[3] = 0;
      }

      return out;
    }
    /**
     * Creates a new vec4 initialized with values from an existing vector
     *
     * @param {vec4} a vector to clone
     * @returns {vec4} a new 4D vector
     */

    function clone$2(a) {
      var out = new ARRAY_TYPE(4);
      out[0] = a[0];
      out[1] = a[1];
      out[2] = a[2];
      out[3] = a[3];
      return out;
    }
    /**
     * Creates a new vec4 initialized with the given values
     *
     * @param {Number} x X component
     * @param {Number} y Y component
     * @param {Number} z Z component
     * @param {Number} w W component
     * @returns {vec4} a new 4D vector
     */

    function fromValues$2(x, y, z, w) {
      var out = new ARRAY_TYPE(4);
      out[0] = x;
      out[1] = y;
      out[2] = z;
      out[3] = w;
      return out;
    }
    /**
     * Copy the values from one vec4 to another
     *
     * @param {vec4} out the receiving vector
     * @param {vec4} a the source vector
     * @returns {vec4} out
     */

    function copy$2(out, a) {
      out[0] = a[0];
      out[1] = a[1];
      out[2] = a[2];
      out[3] = a[3];
      return out;
    }
    /**
     * Set the components of a vec4 to the given values
     *
     * @param {vec4} out the receiving vector
     * @param {Number} x X component
     * @param {Number} y Y component
     * @param {Number} z Z component
     * @param {Number} w W component
     * @returns {vec4} out
     */

    function set$1(out, x, y, z, w) {
      out[0] = x;
      out[1] = y;
      out[2] = z;
      out[3] = w;
      return out;
    }
    /**
     * Adds two vec4's
     *
     * @param {vec4} out the receiving vector
     * @param {vec4} a the first operand
     * @param {vec4} b the second operand
     * @returns {vec4} out
     */

    function add$2(out, a, b) {
      out[0] = a[0] + b[0];
      out[1] = a[1] + b[1];
      out[2] = a[2] + b[2];
      out[3] = a[3] + b[3];
      return out;
    }
    /**
     * Scales a vec4 by a scalar number
     *
     * @param {vec4} out the receiving vector
     * @param {vec4} a the vector to scale
     * @param {Number} b amount to scale the vector by
     * @returns {vec4} out
     */

    function scale$1(out, a, b) {
      out[0] = a[0] * b;
      out[1] = a[1] * b;
      out[2] = a[2] * b;
      out[3] = a[3] * b;
      return out;
    }
    /**
     * Calculates the length of a vec4
     *
     * @param {vec4} a vector to calculate length of
     * @returns {Number} length of a
     */

    function length$1(a) {
      var x = a[0];
      var y = a[1];
      var z = a[2];
      var w = a[3];
      return Math.sqrt(x * x + y * y + z * z + w * w);
    }
    /**
     * Calculates the squared length of a vec4
     *
     * @param {vec4} a vector to calculate squared length of
     * @returns {Number} squared length of a
     */

    function squaredLength(a) {
      var x = a[0];
      var y = a[1];
      var z = a[2];
      var w = a[3];
      return x * x + y * y + z * z + w * w;
    }
    /**
     * Normalize a vec4
     *
     * @param {vec4} out the receiving vector
     * @param {vec4} a vector to normalize
     * @returns {vec4} out
     */

    function normalize$1(out, a) {
      var x = a[0];
      var y = a[1];
      var z = a[2];
      var w = a[3];
      var len = x * x + y * y + z * z + w * w;

      if (len > 0) {
        len = 1 / Math.sqrt(len);
      }

      out[0] = x * len;
      out[1] = y * len;
      out[2] = z * len;
      out[3] = w * len;
      return out;
    }
    /**
     * Calculates the dot product of two vec4's
     *
     * @param {vec4} a the first operand
     * @param {vec4} b the second operand
     * @returns {Number} dot product of a and b
     */

    function dot$1(a, b) {
      return a[0] * b[0] + a[1] * b[1] + a[2] * b[2] + a[3] * b[3];
    }
    /**
     * Performs a linear interpolation between two vec4's
     *
     * @param {vec4} out the receiving vector
     * @param {vec4} a the first operand
     * @param {vec4} b the second operand
     * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
     * @returns {vec4} out
     */

    function lerp(out, a, b, t) {
      var ax = a[0];
      var ay = a[1];
      var az = a[2];
      var aw = a[3];
      out[0] = ax + t * (b[0] - ax);
      out[1] = ay + t * (b[1] - ay);
      out[2] = az + t * (b[2] - az);
      out[3] = aw + t * (b[3] - aw);
      return out;
    }
    /**
     * Returns whether or not the vectors have exactly the same elements in the same position (when compared with ===)
     *
     * @param {vec4} a The first vector.
     * @param {vec4} b The second vector.
     * @returns {Boolean} True if the vectors are equal, false otherwise.
     */

    function exactEquals$1(a, b) {
      return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3];
    }
    /**
     * Returns whether or not the vectors have approximately the same elements in the same position.
     *
     * @param {vec4} a The first vector.
     * @param {vec4} b The second vector.
     * @returns {Boolean} True if the vectors are equal, false otherwise.
     */

    function equals$1(a, b) {
      var a0 = a[0],
          a1 = a[1],
          a2 = a[2],
          a3 = a[3];
      var b0 = b[0],
          b1 = b[1],
          b2 = b[2],
          b3 = b[3];
      return Math.abs(a0 - b0) <= EPSILON * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= EPSILON * Math.max(1.0, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= EPSILON * Math.max(1.0, Math.abs(a2), Math.abs(b2)) && Math.abs(a3 - b3) <= EPSILON * Math.max(1.0, Math.abs(a3), Math.abs(b3));
    }
    /**
     * Perform some operation over an array of vec4s.
     *
     * @param {Array} a the array of vectors to iterate over
     * @param {Number} stride Number of elements between the start of each vec4. If 0 assumes tightly packed
     * @param {Number} offset Number of elements to skip at the beginning of the array
     * @param {Number} count Number of vec4s to iterate over. If 0 iterates over entire array
     * @param {Function} fn Function to call for each vector in the array
     * @param {Object} [arg] additional argument to pass to fn
     * @returns {Array} a
     * @function
     */

    var forEach$1 = function () {
      var vec = create$3();
      return function (a, stride, offset, count, fn, arg) {
        var i, l;

        if (!stride) {
          stride = 4;
        }

        if (!offset) {
          offset = 0;
        }

        if (count) {
          l = Math.min(count * stride + offset, a.length);
        } else {
          l = a.length;
        }

        for (i = offset; i < l; i += stride) {
          vec[0] = a[i];
          vec[1] = a[i + 1];
          vec[2] = a[i + 2];
          vec[3] = a[i + 3];
          fn(vec, vec, arg);
          a[i] = vec[0];
          a[i + 1] = vec[1];
          a[i + 2] = vec[2];
          a[i + 3] = vec[3];
        }

        return a;
      };
    }();

    /**
     * Quaternion
     * @module quat
     */

    /**
     * Creates a new identity quat
     *
     * @returns {quat} a new quaternion
     */

    function create$4() {
      var out = new ARRAY_TYPE(4);

      if (ARRAY_TYPE != Float32Array) {
        out[0] = 0;
        out[1] = 0;
        out[2] = 0;
      }

      out[3] = 1;
      return out;
    }
    /**
     * Set a quat to the identity quaternion
     *
     * @param {quat} out the receiving quaternion
     * @returns {quat} out
     */

    function identity$1(out) {
      out[0] = 0;
      out[1] = 0;
      out[2] = 0;
      out[3] = 1;
      return out;
    }
    /**
     * Sets a quat from the given angle and rotation axis,
     * then returns it.
     *
     * @param {quat} out the receiving quaternion
     * @param {vec3} axis the axis around which to rotate
     * @param {Number} rad the angle in radians
     * @returns {quat} out
     **/

    function setAxisAngle(out, axis, rad) {
      rad = rad * 0.5;
      var s = Math.sin(rad);
      out[0] = s * axis[0];
      out[1] = s * axis[1];
      out[2] = s * axis[2];
      out[3] = Math.cos(rad);
      return out;
    }
    /**
     * Gets the rotation axis and angle for a given
     *  quaternion. If a quaternion is created with
     *  setAxisAngle, this method will return the same
     *  values as providied in the original parameter list
     *  OR functionally equivalent values.
     * Example: The quaternion formed by axis [0, 0, 1] and
     *  angle -90 is the same as the quaternion formed by
     *  [0, 0, 1] and 270. This method favors the latter.
     * @param  {vec3} out_axis  Vector receiving the axis of rotation
     * @param  {quat} q     Quaternion to be decomposed
     * @return {Number}     Angle, in radians, of the rotation
     */

    function getAxisAngle(out_axis, q) {
      var rad = Math.acos(q[3]) * 2.0;
      var s = Math.sin(rad / 2.0);

      if (s > EPSILON) {
        out_axis[0] = q[0] / s;
        out_axis[1] = q[1] / s;
        out_axis[2] = q[2] / s;
      } else {
        // If s is zero, return any axis (no rotation - axis does not matter)
        out_axis[0] = 1;
        out_axis[1] = 0;
        out_axis[2] = 0;
      }

      return rad;
    }
    /**
     * Multiplies two quat's
     *
     * @param {quat} out the receiving quaternion
     * @param {quat} a the first operand
     * @param {quat} b the second operand
     * @returns {quat} out
     */

    function multiply$1(out, a, b) {
      var ax = a[0],
          ay = a[1],
          az = a[2],
          aw = a[3];
      var bx = b[0],
          by = b[1],
          bz = b[2],
          bw = b[3];
      out[0] = ax * bw + aw * bx + ay * bz - az * by;
      out[1] = ay * bw + aw * by + az * bx - ax * bz;
      out[2] = az * bw + aw * bz + ax * by - ay * bx;
      out[3] = aw * bw - ax * bx - ay * by - az * bz;
      return out;
    }
    /**
     * Rotates a quaternion by the given angle about the X axis
     *
     * @param {quat} out quat receiving operation result
     * @param {quat} a quat to rotate
     * @param {number} rad angle (in radians) to rotate
     * @returns {quat} out
     */

    function rotateX$1(out, a, rad) {
      rad *= 0.5;
      var ax = a[0],
          ay = a[1],
          az = a[2],
          aw = a[3];
      var bx = Math.sin(rad),
          bw = Math.cos(rad);
      out[0] = ax * bw + aw * bx;
      out[1] = ay * bw + az * bx;
      out[2] = az * bw - ay * bx;
      out[3] = aw * bw - ax * bx;
      return out;
    }
    /**
     * Rotates a quaternion by the given angle about the Y axis
     *
     * @param {quat} out quat receiving operation result
     * @param {quat} a quat to rotate
     * @param {number} rad angle (in radians) to rotate
     * @returns {quat} out
     */

    function rotateY$1(out, a, rad) {
      rad *= 0.5;
      var ax = a[0],
          ay = a[1],
          az = a[2],
          aw = a[3];
      var by = Math.sin(rad),
          bw = Math.cos(rad);
      out[0] = ax * bw - az * by;
      out[1] = ay * bw + aw * by;
      out[2] = az * bw + ax * by;
      out[3] = aw * bw - ay * by;
      return out;
    }
    /**
     * Rotates a quaternion by the given angle about the Z axis
     *
     * @param {quat} out quat receiving operation result
     * @param {quat} a quat to rotate
     * @param {number} rad angle (in radians) to rotate
     * @returns {quat} out
     */

    function rotateZ$1(out, a, rad) {
      rad *= 0.5;
      var ax = a[0],
          ay = a[1],
          az = a[2],
          aw = a[3];
      var bz = Math.sin(rad),
          bw = Math.cos(rad);
      out[0] = ax * bw + ay * bz;
      out[1] = ay * bw - ax * bz;
      out[2] = az * bw + aw * bz;
      out[3] = aw * bw - az * bz;
      return out;
    }
    /**
     * Calculates the W component of a quat from the X, Y, and Z components.
     * Assumes that quaternion is 1 unit in length.
     * Any existing W component will be ignored.
     *
     * @param {quat} out the receiving quaternion
     * @param {quat} a quat to calculate W component of
     * @returns {quat} out
     */

    function calculateW(out, a) {
      var x = a[0],
          y = a[1],
          z = a[2];
      out[0] = x;
      out[1] = y;
      out[2] = z;
      out[3] = Math.sqrt(Math.abs(1.0 - x * x - y * y - z * z));
      return out;
    }
    /**
     * Performs a spherical linear interpolation between two quat
     *
     * @param {quat} out the receiving quaternion
     * @param {quat} a the first operand
     * @param {quat} b the second operand
     * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
     * @returns {quat} out
     */

    function slerp(out, a, b, t) {
      // benchmarks:
      //    http://jsperf.com/quaternion-slerp-implementations
      var ax = a[0],
          ay = a[1],
          az = a[2],
          aw = a[3];
      var bx = b[0],
          by = b[1],
          bz = b[2],
          bw = b[3];
      var omega, cosom, sinom, scale0, scale1; // calc cosine

      cosom = ax * bx + ay * by + az * bz + aw * bw; // adjust signs (if necessary)

      if (cosom < 0.0) {
        cosom = -cosom;
        bx = -bx;
        by = -by;
        bz = -bz;
        bw = -bw;
      } // calculate coefficients


      if (1.0 - cosom > EPSILON) {
        // standard case (slerp)
        omega = Math.acos(cosom);
        sinom = Math.sin(omega);
        scale0 = Math.sin((1.0 - t) * omega) / sinom;
        scale1 = Math.sin(t * omega) / sinom;
      } else {
        // "from" and "to" quaternions are very close
        //  ... so we can do a linear interpolation
        scale0 = 1.0 - t;
        scale1 = t;
      } // calculate final values


      out[0] = scale0 * ax + scale1 * bx;
      out[1] = scale0 * ay + scale1 * by;
      out[2] = scale0 * az + scale1 * bz;
      out[3] = scale0 * aw + scale1 * bw;
      return out;
    }
    /**
     * Generates a random quaternion
     *
     * @param {quat} out the receiving quaternion
     * @returns {quat} out
     */

    function random(out) {
      // Implementation of http://planning.cs.uiuc.edu/node198.html
      // TODO: Calling random 3 times is probably not the fastest solution
      var u1 = RANDOM();
      var u2 = RANDOM();
      var u3 = RANDOM();
      var sqrt1MinusU1 = Math.sqrt(1 - u1);
      var sqrtU1 = Math.sqrt(u1);
      out[0] = sqrt1MinusU1 * Math.sin(2.0 * Math.PI * u2);
      out[1] = sqrt1MinusU1 * Math.cos(2.0 * Math.PI * u2);
      out[2] = sqrtU1 * Math.sin(2.0 * Math.PI * u3);
      out[3] = sqrtU1 * Math.cos(2.0 * Math.PI * u3);
      return out;
    }
    /**
     * Calculates the inverse of a quat
     *
     * @param {quat} out the receiving quaternion
     * @param {quat} a quat to calculate inverse of
     * @returns {quat} out
     */

    function invert$1(out, a) {
      var a0 = a[0],
          a1 = a[1],
          a2 = a[2],
          a3 = a[3];
      var dot = a0 * a0 + a1 * a1 + a2 * a2 + a3 * a3;
      var invDot = dot ? 1.0 / dot : 0; // TODO: Would be faster to return [0,0,0,0] immediately if dot == 0

      out[0] = -a0 * invDot;
      out[1] = -a1 * invDot;
      out[2] = -a2 * invDot;
      out[3] = a3 * invDot;
      return out;
    }
    /**
     * Calculates the conjugate of a quat
     * If the quaternion is normalized, this function is faster than quat.inverse and produces the same result.
     *
     * @param {quat} out the receiving quaternion
     * @param {quat} a quat to calculate conjugate of
     * @returns {quat} out
     */

    function conjugate(out, a) {
      out[0] = -a[0];
      out[1] = -a[1];
      out[2] = -a[2];
      out[3] = a[3];
      return out;
    }
    /**
     * Creates a quaternion from the given 3x3 rotation matrix.
     *
     * NOTE: The resultant quaternion is not normalized, so you should be sure
     * to renormalize the quaternion yourself where necessary.
     *
     * @param {quat} out the receiving quaternion
     * @param {mat3} m rotation matrix
     * @returns {quat} out
     * @function
     */

    function fromMat3(out, m) {
      // Algorithm in Ken Shoemake's article in 1987 SIGGRAPH course notes
      // article "Quaternion Calculus and Fast Animation".
      var fTrace = m[0] + m[4] + m[8];
      var fRoot;

      if (fTrace > 0.0) {
        // |w| > 1/2, may as well choose w > 1/2
        fRoot = Math.sqrt(fTrace + 1.0); // 2w

        out[3] = 0.5 * fRoot;
        fRoot = 0.5 / fRoot; // 1/(4w)

        out[0] = (m[5] - m[7]) * fRoot;
        out[1] = (m[6] - m[2]) * fRoot;
        out[2] = (m[1] - m[3]) * fRoot;
      } else {
        // |w| <= 1/2
        var i = 0;
        if (m[4] > m[0]) i = 1;
        if (m[8] > m[i * 3 + i]) i = 2;
        var j = (i + 1) % 3;
        var k = (i + 2) % 3;
        fRoot = Math.sqrt(m[i * 3 + i] - m[j * 3 + j] - m[k * 3 + k] + 1.0);
        out[i] = 0.5 * fRoot;
        fRoot = 0.5 / fRoot;
        out[3] = (m[j * 3 + k] - m[k * 3 + j]) * fRoot;
        out[j] = (m[j * 3 + i] + m[i * 3 + j]) * fRoot;
        out[k] = (m[k * 3 + i] + m[i * 3 + k]) * fRoot;
      }

      return out;
    }
    /**
     * Creates a quaternion from the given euler angle x, y, z.
     *
     * @param {quat} out the receiving quaternion
     * @param {x} Angle to rotate around X axis in degrees.
     * @param {y} Angle to rotate around Y axis in degrees.
     * @param {z} Angle to rotate around Z axis in degrees.
     * @returns {quat} out
     * @function
     */

    function fromEuler(out, x, y, z) {
      var halfToRad = 0.5 * Math.PI / 180.0;
      x *= halfToRad;
      y *= halfToRad;
      z *= halfToRad;
      var sx = Math.sin(x);
      var cx = Math.cos(x);
      var sy = Math.sin(y);
      var cy = Math.cos(y);
      var sz = Math.sin(z);
      var cz = Math.cos(z);
      out[0] = sx * cy * cz - cx * sy * sz;
      out[1] = cx * sy * cz + sx * cy * sz;
      out[2] = cx * cy * sz - sx * sy * cz;
      out[3] = cx * cy * cz + sx * sy * sz;
      return out;
    }
    /**
     * Returns a string representation of a quatenion
     *
     * @param {quat} a vector to represent as a string
     * @returns {String} string representation of the vector
     */

    function str$1(a) {
      return 'quat(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + a[3] + ')';
    }
    /**
     * Creates a new quat initialized with values from an existing quaternion
     *
     * @param {quat} a quaternion to clone
     * @returns {quat} a new quaternion
     * @function
     */

    var clone$3 = clone$2;
    /**
     * Creates a new quat initialized with the given values
     *
     * @param {Number} x X component
     * @param {Number} y Y component
     * @param {Number} z Z component
     * @param {Number} w W component
     * @returns {quat} a new quaternion
     * @function
     */

    var fromValues$3 = fromValues$2;
    /**
     * Copy the values from one quat to another
     *
     * @param {quat} out the receiving quaternion
     * @param {quat} a the source quaternion
     * @returns {quat} out
     * @function
     */

    var copy$3 = copy$2;
    /**
     * Set the components of a quat to the given values
     *
     * @param {quat} out the receiving quaternion
     * @param {Number} x X component
     * @param {Number} y Y component
     * @param {Number} z Z component
     * @param {Number} w W component
     * @returns {quat} out
     * @function
     */

    var set$2 = set$1;
    /**
     * Adds two quat's
     *
     * @param {quat} out the receiving quaternion
     * @param {quat} a the first operand
     * @param {quat} b the second operand
     * @returns {quat} out
     * @function
     */

    var add$3 = add$2;
    /**
     * Alias for {@link quat.multiply}
     * @function
     */

    var mul$1 = multiply$1;
    /**
     * Scales a quat by a scalar number
     *
     * @param {quat} out the receiving vector
     * @param {quat} a the vector to scale
     * @param {Number} b amount to scale the vector by
     * @returns {quat} out
     * @function
     */

    var scale$2 = scale$1;
    /**
     * Calculates the dot product of two quat's
     *
     * @param {quat} a the first operand
     * @param {quat} b the second operand
     * @returns {Number} dot product of a and b
     * @function
     */

    var dot$2 = dot$1;
    /**
     * Performs a linear interpolation between two quat's
     *
     * @param {quat} out the receiving quaternion
     * @param {quat} a the first operand
     * @param {quat} b the second operand
     * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
     * @returns {quat} out
     * @function
     */

    var lerp$1 = lerp;
    /**
     * Calculates the length of a quat
     *
     * @param {quat} a vector to calculate length of
     * @returns {Number} length of a
     */

    var length$2 = length$1;
    /**
     * Alias for {@link quat.length}
     * @function
     */

    var len$1 = length$2;
    /**
     * Calculates the squared length of a quat
     *
     * @param {quat} a vector to calculate squared length of
     * @returns {Number} squared length of a
     * @function
     */

    var squaredLength$1 = squaredLength;
    /**
     * Alias for {@link quat.squaredLength}
     * @function
     */

    var sqrLen = squaredLength$1;
    /**
     * Normalize a quat
     *
     * @param {quat} out the receiving quaternion
     * @param {quat} a quaternion to normalize
     * @returns {quat} out
     * @function
     */

    var normalize$2 = normalize$1;
    /**
     * Returns whether or not the quaternions have exactly the same elements in the same position (when compared with ===)
     *
     * @param {quat} a The first quaternion.
     * @param {quat} b The second quaternion.
     * @returns {Boolean} True if the vectors are equal, false otherwise.
     */

    var exactEquals$2 = exactEquals$1;
    /**
     * Returns whether or not the quaternions have approximately the same elements in the same position.
     *
     * @param {quat} a The first vector.
     * @param {quat} b The second vector.
     * @returns {Boolean} True if the vectors are equal, false otherwise.
     */

    var equals$2 = equals$1;
    /**
     * Sets a quaternion to represent the shortest rotation from one
     * vector to another.
     *
     * Both vectors are assumed to be unit length.
     *
     * @param {quat} out the receiving quaternion.
     * @param {vec3} a the initial vector
     * @param {vec3} b the destination vector
     * @returns {quat} out
     */

    var rotationTo = function () {
      var tmpvec3 = create$2();
      var xUnitVec3 = fromValues$1(1, 0, 0);
      var yUnitVec3 = fromValues$1(0, 1, 0);
      return function (out, a, b) {
        var dot$1 = dot(a, b);

        if (dot$1 < -0.999999) {
          cross(tmpvec3, xUnitVec3, a);
          if (len(tmpvec3) < 0.000001) cross(tmpvec3, yUnitVec3, a);
          normalize(tmpvec3, tmpvec3);
          setAxisAngle(out, tmpvec3, Math.PI);
          return out;
        } else if (dot$1 > 0.999999) {
          out[0] = 0;
          out[1] = 0;
          out[2] = 0;
          out[3] = 1;
          return out;
        } else {
          cross(tmpvec3, a, b);
          out[0] = tmpvec3[0];
          out[1] = tmpvec3[1];
          out[2] = tmpvec3[2];
          out[3] = 1 + dot$1;
          return normalize$2(out, out);
        }
      };
    }();
    /**
     * Performs a spherical linear interpolation with two control points
     *
     * @param {quat} out the receiving quaternion
     * @param {quat} a the first operand
     * @param {quat} b the second operand
     * @param {quat} c the third operand
     * @param {quat} d the fourth operand
     * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
     * @returns {quat} out
     */

    var sqlerp = function () {
      var temp1 = create$4();
      var temp2 = create$4();
      return function (out, a, b, c, d, t) {
        slerp(temp1, a, d, t);
        slerp(temp2, b, c, t);
        slerp(out, temp1, temp2, 2 * t * (1 - t));
        return out;
      };
    }();
    /**
     * Sets the specified quaternion with values corresponding to the given
     * axes. Each axis is a vec3 and is expected to be unit length and
     * perpendicular to all other specified axes.
     *
     * @param {vec3} view  the vector representing the viewing direction
     * @param {vec3} right the vector representing the local "right" direction
     * @param {vec3} up    the vector representing the local "up" direction
     * @returns {quat} out
     */

    var setAxes = function () {
      var matr = create();
      return function (out, view, right, up) {
        matr[0] = right[0];
        matr[3] = right[1];
        matr[6] = right[2];
        matr[1] = up[0];
        matr[4] = up[1];
        matr[7] = up[2];
        matr[2] = -view[0];
        matr[5] = -view[1];
        matr[8] = -view[2];
        return normalize$2(out, fromMat3(out, matr));
      };
    }();

    var quat = ({
        create: create$4,
        identity: identity$1,
        setAxisAngle: setAxisAngle,
        getAxisAngle: getAxisAngle,
        multiply: multiply$1,
        rotateX: rotateX$1,
        rotateY: rotateY$1,
        rotateZ: rotateZ$1,
        calculateW: calculateW,
        slerp: slerp,
        random: random,
        invert: invert$1,
        conjugate: conjugate,
        fromMat3: fromMat3,
        fromEuler: fromEuler,
        str: str$1,
        clone: clone$3,
        fromValues: fromValues$3,
        copy: copy$3,
        set: set$2,
        add: add$3,
        mul: mul$1,
        scale: scale$2,
        dot: dot$2,
        lerp: lerp$1,
        length: length$2,
        len: len$1,
        squaredLength: squaredLength$1,
        sqrLen: sqrLen,
        normalize: normalize$2,
        exactEquals: exactEquals$2,
        equals: equals$2,
        rotationTo: rotationTo,
        sqlerp: sqlerp,
        setAxes: setAxes
    });

    /**
     * Calculates the squared length of a dual quat
     *
     * @param {quat2} a dual quat to calculate squared length of
     * @returns {Number} squared length of a
     * @function
     */

    var squaredLength$2 = squaredLength$1;

    /**
     * 2 Dimensional Vector
     * @module vec2
     */

    /**
     * Creates a new, empty vec2
     *
     * @returns {vec2} a new 2D vector
     */

    function create$5() {
      var out = new ARRAY_TYPE(2);

      if (ARRAY_TYPE != Float32Array) {
        out[0] = 0;
        out[1] = 0;
      }

      return out;
    }
    /**
     * Perform some operation over an array of vec2s.
     *
     * @param {Array} a the array of vectors to iterate over
     * @param {Number} stride Number of elements between the start of each vec2. If 0 assumes tightly packed
     * @param {Number} offset Number of elements to skip at the beginning of the array
     * @param {Number} count Number of vec2s to iterate over. If 0 iterates over entire array
     * @param {Function} fn Function to call for each vector in the array
     * @param {Object} [arg] additional argument to pass to fn
     * @returns {Array} a
     * @function
     */

    var forEach$2 = function () {
      var vec = create$5();
      return function (a, stride, offset, count, fn, arg) {
        var i, l;

        if (!stride) {
          stride = 2;
        }

        if (!offset) {
          offset = 0;
        }

        if (count) {
          l = Math.min(count * stride + offset, a.length);
        } else {
          l = a.length;
        }

        for (i = offset; i < l; i += stride) {
          vec[0] = a[i];
          vec[1] = a[i + 1];
          fn(vec, vec, arg);
          a[i] = vec[0];
          a[i + 1] = vec[1];
        }

        return a;
      };
    }();

    var ELEMENT_NOT_EXIST = function (selector) {
      return "Element with selector \"" + selector + "\" doesn't exist.";
    };
    var MUST_STRING_OR_ELEMENT = function (received) {
      return "Element should be provided in string or HTMLElement. Received: " + received;
    };

    var getElement = function (el, baseElement) {
      if (typeof el === 'string') {
        var queryResult = baseElement ? baseElement.querySelector(el) : document.querySelector(el);

        if (!queryResult) {
          throw new Error(ELEMENT_NOT_EXIST(el));
        }

        return queryResult;
      } else if (el.nodeName && el.nodeType === 1) {
        return el;
      } else {
        throw new Error(MUST_STRING_OR_ELEMENT(el));
      }
    };
    function applyCSS(element, cssObj) {
      Object.keys(cssObj).forEach(function (property) {
        element.style[property] = cssObj[property];
      });
    }
    function getTransformMatrix(elStyle) {
      var trVal = elStyle.getPropertyValue('transform');
      var transformStr = /\(((\s|\S)+)\)/.exec(trVal);
      var matrixVal = transformStr ? transformStr[1].split(',').map(function (val) {
        return parseFloat(val);
      }) : [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];

      if (matrixVal.length === 16) {
        return fromValues.apply(mat4, __spread(matrixVal));
      } else {
        var matrix = create$1();
        identity(matrix);
        matrix[0] = matrixVal[0];
        matrix[1] = matrixVal[1];
        matrix[4] = matrixVal[2];
        matrix[5] = matrixVal[3];
        matrix[12] = matrixVal[4];
        matrix[13] = matrixVal[5];
        return matrix;
      }
    }
    function getOffsetFromParent(currentOffset, parentOffset) {
      var offsetLeft = currentOffset.left + (currentOffset.width - parentOffset.width) / 2;
      var offsetTop = currentOffset.top + (currentOffset.height - parentOffset.height) / 2;
      return fromValues$1(offsetLeft, offsetTop, 0);
    }
    function getRotateOffset(elStyle, currentOffset) {
      var axis = elStyle.transformOrigin.split(' ').map(function (str) {
        return parseFloat(str.substring(0, str.length - 2));
      });
      var ax = axis[0] - currentOffset.width / 2;
      var ay = axis[1] - currentOffset.height / 2;
      return fromValues$1(ax, ay, 0);
    }
    function findIndex(iterable, callback) {
      for (var i = 0; i < iterable.length; i += 1) {
        var element = iterable[i];

        if (element && callback(element)) {
          return i;
        }
      }

      return -1;
    }
    function clamp(val, min, max) {
      return Math.max(Math.min(val, max), min);
    }
    function assign(target) {
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

    function radToDeg(rad) {
      return 180 * rad / Math.PI;
    }
    function quatToEuler(q) {
      var rotM = create$1();
      fromQuat(rotM, q);
      var m11 = rotM[0];
      var m12 = rotM[4];
      var m21 = rotM[1];
      var m22 = rotM[5];
      var m31 = rotM[2];
      var m32 = rotM[6];
      var m33 = rotM[10];
      var euler = create$2();
      euler[1] = Math.asin(-clamp(m31, -1, 1));

      if (Math.abs(m31) < 0.99999) {
        euler[0] = Math.atan2(m32, m33);
        euler[2] = Math.atan2(m21, m11);
      } else {
        euler[0] = 0;
        euler[2] = Math.atan2(-m12, m22);
      }

      return euler.map(function (val) {
        return radToDeg(val);
      });
    }

    var STYLE = {
      VIEWPORT: {
        width: '100%',
        height: '100%',
        'transform-style': 'preserve-3d',
        overflow: 'hidden'
      },
      CAMERA: {
        width: '100%',
        height: '100%',
        'transform-style': 'preserve-3d',
        'will-change': 'transform'
      },
      WORLD: {
        width: '100%',
        height: '100%',
        'transform-style': 'preserve-3d',
        'will-change': 'transform'
      }
    };
    var CLASS = {
      VIEWPORT: 'cc-viewport',
      CAMERA: 'cc-camera',
      WORLD: 'cc-world'
    };
    var OPTIONS = {
      position: [0, 0, 0],
      scale: [1, 1, 1],
      rotation: [0, 0, 0],
      perspective: 0,
      rotateOffset: 0
    };
    var UPDATE_OPTIONS = {
      property: 'transform',
      timingFunction: 'ease-out',
      delay: '0ms'
    };

    var CSSCamera = function () {
      function CSSCamera(el, options) {
        if (options === void 0) {
          options = {};
        }

        this._element = getElement(el);
        var op = assign(assign({}, OPTIONS), options);
        this._position = fromValues$1(op.position[0], op.position[1], op.position[2]);
        this._scale = fromValues$1(op.scale[0], op.scale[1], op.scale[2]);
        this._rotation = fromValues$1(op.rotation[0], op.rotation[1], op.rotation[2]);
        this._perspective = op.perspective;
        this._rotateOffset = op.rotateOffset;
        this._updateTimer = -1;
        var element = this._element;
        var viewport = document.createElement('div');
        var camera = viewport.cloneNode();
        var world = viewport.cloneNode();
        viewport.className = CLASS.VIEWPORT;
        camera.className = CLASS.CAMERA;
        world.className = CLASS.WORLD;
        applyCSS(viewport, STYLE.VIEWPORT);
        applyCSS(camera, STYLE.CAMERA);
        applyCSS(world, STYLE.WORLD);
        camera.appendChild(world);
        viewport.appendChild(camera);
        this._viewportEl = viewport;
        this._cameraEl = camera;
        this._worldEl = world;
        element.parentElement.insertBefore(viewport, element);
        world.appendChild(element);
        this.update(0);
      }

      var __proto = CSSCamera.prototype;
      Object.defineProperty(CSSCamera, "VERSION", {
        get: function () {
          return '1.0.1';
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(__proto, "element", {
        get: function () {
          return this._element;
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(__proto, "viewportEl", {
        get: function () {
          return this._viewportEl;
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(__proto, "cameraEl", {
        get: function () {
          return this._cameraEl;
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(__proto, "worldEl", {
        get: function () {
          return this._worldEl;
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(__proto, "position", {
        get: function () {
          return __spread(this._position);
        },
        set: function (val) {
          this._position = fromValues$1(val[0], val[1], val[2]);
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(__proto, "scale", {
        get: function () {
          return __spread(this._scale);
        },
        set: function (val) {
          this._scale = fromValues$1(val[0], val[1], val[2]);
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(__proto, "rotation", {
        get: function () {
          return __spread(this._rotation);
        },
        set: function (val) {
          this._rotation = fromValues$1(val[0], val[1], val[2]);
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(__proto, "quaternion", {
        get: function () {
          var r = this._rotation;
          var quaternion = fromEuler(create$4(), r[0], r[1], r[2]);
          return __spread(quaternion);
        },
        set: function (val) {
          this._rotation = quatToEuler(fromValues$3(val[0], val[1], val[2], val[3]));
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(__proto, "perspective", {
        get: function () {
          return this._perspective;
        },
        set: function (val) {
          this._perspective = val;
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(__proto, "rotateOffset", {
        get: function () {
          return this._rotateOffset;
        },
        set: function (val) {
          this._rotateOffset = val;
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(__proto, "cameraCSS", {
        get: function () {
          var perspective = this._perspective;
          var rotateOffset = this._rotateOffset;
          var rotation = this._rotation;
          var scale = this._scale;
          return "scale3d(" + scale[0] + ", " + scale[1] + ", " + scale[2] + ") translateZ(" + (perspective - rotateOffset) + "px) rotateX(" + rotation[0] + "deg) rotateY(" + rotation[1] + "deg) rotateZ(" + rotation[2] + "deg)";
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(__proto, "worldCSS", {
        get: function () {
          var position = this._position;
          return "translate3d(" + -position[0] + "px, " + -position[1] + "px, " + -position[2] + "px)";
        },
        enumerable: true,
        configurable: true
      });

      __proto.focus = function (el) {
        var element = getElement(el);

        var focusMatrix = this._getFocusMatrix(element);

        var rotation = create$4();
        var translation = create$2();
        getRotation(rotation, focusMatrix);
        getTranslation(translation, focusMatrix);
        var eulerAngle = quatToEuler(rotation);
        negate(eulerAngle, eulerAngle);
        this._rotation = eulerAngle;
        this._position = translation;
        return this;
      };

      __proto.translateLocal = function (x, y, z) {
        if (x === void 0) {
          x = 0;
        }

        if (y === void 0) {
          y = 0;
        }

        if (z === void 0) {
          z = 0;
        }

        var position = this._position;
        var rotation = this._rotation;
        var transVec = fromValues$1(x, y, z);
        var rotQuat = create$4();
        fromEuler(rotQuat, -rotation[0], -rotation[1], -rotation[2]);
        transformQuat(transVec, transVec, rotQuat);
        add$1(position, position, transVec);
        return this;
      };

      __proto.translate = function (x, y, z) {
        if (x === void 0) {
          x = 0;
        }

        if (y === void 0) {
          y = 0;
        }

        if (z === void 0) {
          z = 0;
        }

        add$1(this._position, this._position, fromValues$1(x, y, z));
        return this;
      };

      __proto.rotate = function (x, y, z) {
        if (x === void 0) {
          x = 0;
        }

        if (y === void 0) {
          y = 0;
        }

        if (z === void 0) {
          z = 0;
        }

        add$1(this._rotation, this._rotation, fromValues$1(x, y, z));
        return this;
      };

      __proto.update = function (duration, options) {
        if (duration === void 0) {
          duration = 0;
        }

        if (options === void 0) {
          options = {};
        }

        return __awaiter(this, void 0, Promise, function () {
          var updateOptions, transitionDuration, updateOption, finalOption_1;

          var _this = this;

          return __generator(this, function (_a) {
            applyCSS(this._viewportEl, {
              perspective: this.perspective + "px"
            });
            applyCSS(this._cameraEl, {
              transform: this.cameraCSS
            });
            applyCSS(this._worldEl, {
              transform: this.worldCSS
            });
            updateOptions = assign(assign({}, UPDATE_OPTIONS), options);

            if (duration > 0) {
              if (this._updateTimer > 0) {
                window.clearTimeout(this._updateTimer);
              }

              transitionDuration = duration + "ms";
              updateOption = Object.keys(updateOptions).reduce(function (option, key) {
                option["transition" + (key.charAt(0).toUpperCase() + key.slice(1))] = updateOptions[key];
                return option;
              }, {});
              finalOption_1 = __assign({
                transitionDuration: transitionDuration
              }, updateOption);
              [this._viewportEl, this._cameraEl, this._worldEl].forEach(function (el) {
                applyCSS(el, finalOption_1);
              });
            }

            return [2, new Promise(function (resolve) {
              if (duration > 0) {
                _this._updateTimer = window.setTimeout(function () {
                  [_this._viewportEl, _this._cameraEl, _this._worldEl].forEach(function (el) {
                    applyCSS(el, {
                      transition: ''
                    });
                  });
                  _this._updateTimer = -1;
                  resolve();
                }, duration);
              } else {
                requestAnimationFrame(function () {
                  resolve();
                });
              }
            })];
          });
        });
      };

      __proto._getFocusMatrix = function (element) {
        var elements = [];

        while (element) {
          elements.push(element);
          if (element === this._element) break;
          element = element.parentElement;
        }

        elements.reverse();
        var elStyles = elements.map(function (el) {
          return window.getComputedStyle(el);
        });
        var firstFlatIndex = findIndex(elStyles, function (style) {
          return style.transformStyle !== 'preserve-3d';
        });

        if (firstFlatIndex > 0) {
          elStyles.splice(firstFlatIndex + 1);
        }

        var parentOffset = {
          left: 0,
          top: 0,
          width: this.viewportEl.offsetWidth,
          height: this.viewportEl.offsetHeight
        };
        var accRotation = identity$1(create$4());
        var centerPos = fromValues$1(0, 0, 0);
        elStyles.forEach(function (style, idx) {
          var el = elements[idx];
          var currentOffset = {
            left: el.offsetLeft,
            top: el.offsetTop,
            width: el.offsetWidth,
            height: el.offsetHeight
          };
          var transformMat = getTransformMatrix(style);
          var offsetFromParent = getOffsetFromParent(currentOffset, parentOffset);
          transformQuat(offsetFromParent, offsetFromParent, accRotation);
          add$1(centerPos, centerPos, offsetFromParent);
          var rotateOffset = getRotateOffset(style, currentOffset);
          transformQuat(rotateOffset, rotateOffset, accRotation);
          var transformOrigin = clone$1(centerPos);
          add$1(transformOrigin, transformOrigin, rotateOffset);
          var centerFromOrigin = create$2();
          sub$1(centerFromOrigin, centerPos, transformOrigin);
          var invAccRotation = invert$1(create$4(), accRotation);
          transformQuat(centerFromOrigin, centerFromOrigin, invAccRotation);
          transformMat4(centerFromOrigin, centerFromOrigin, transformMat);
          transformQuat(centerFromOrigin, centerFromOrigin, accRotation);
          var newCenterPos = add$1(create$2(), transformOrigin, centerFromOrigin);
          var rotation = getRotation(create$4(), transformMat);
          copy$1(centerPos, newCenterPos);
          mul$1(accRotation, accRotation, rotation);
          parentOffset = currentOffset;
        });
        var perspective = fromValues$1(0, 0, this.perspective);
        transformQuat(perspective, perspective, accRotation);
        add$1(centerPos, centerPos, perspective);
        var matrix = create$1();
        fromRotationTranslation(matrix, accRotation, centerPos);
        return matrix;
      };

      return CSSCamera;
    }();

    return CSSCamera;

}));
//# sourceMappingURL=css-camera.pkgd.js.map
