/*
Copyright (c) 2019 WoodNeck
name: css-camera
license: MIT
author: WoodNeck
repository: git+https://github.com/WoodNeck/css-camera.git
version: 1.0.1
*/
import { vec3, mat4, quat } from 'gl-matrix';

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
    return mat4.fromValues.apply(mat4, __spread(matrixVal));
  } else {
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
function getOffsetFromParent(currentOffset, parentOffset) {
  var offsetLeft = currentOffset.left + (currentOffset.width - parentOffset.width) / 2;
  var offsetTop = currentOffset.top + (currentOffset.height - parentOffset.height) / 2;
  return vec3.fromValues(offsetLeft, offsetTop, 0);
}
function getRotateOffset(elStyle, currentOffset) {
  var axis = elStyle.transformOrigin.split(' ').map(function (str) {
    return parseFloat(str.substring(0, str.length - 2));
  });
  var ax = axis[0] - currentOffset.width / 2;
  var ay = axis[1] - currentOffset.height / 2;
  return vec3.fromValues(ax, ay, 0);
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
    this._position = vec3.fromValues(op.position[0], op.position[1], op.position[2]);
    this._scale = vec3.fromValues(op.scale[0], op.scale[1], op.scale[2]);
    this._rotation = vec3.fromValues(op.rotation[0], op.rotation[1], op.rotation[2]);
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
      this._position = vec3.fromValues(val[0], val[1], val[2]);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(__proto, "scale", {
    get: function () {
      return __spread(this._scale);
    },
    set: function (val) {
      this._scale = vec3.fromValues(val[0], val[1], val[2]);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(__proto, "rotation", {
    get: function () {
      return __spread(this._rotation);
    },
    set: function (val) {
      this._rotation = vec3.fromValues(val[0], val[1], val[2]);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(__proto, "quaternion", {
    get: function () {
      var r = this._rotation;
      var quaternion = quat.fromEuler(quat.create(), r[0], r[1], r[2]);
      return __spread(quaternion);
    },
    set: function (val) {
      this._rotation = quatToEuler(quat.fromValues(val[0], val[1], val[2], val[3]));
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
    var transVec = vec3.fromValues(x, y, z);
    var rotQuat = quat.create();
    quat.fromEuler(rotQuat, -rotation[0], -rotation[1], -rotation[2]);
    vec3.transformQuat(transVec, transVec, rotQuat);
    vec3.add(position, position, transVec);
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

    vec3.add(this._position, this._position, vec3.fromValues(x, y, z));
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

    vec3.add(this._rotation, this._rotation, vec3.fromValues(x, y, z));
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
    var accRotation = quat.identity(quat.create());
    var centerPos = vec3.fromValues(0, 0, 0);
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
}();

export default CSSCamera;
//# sourceMappingURL=css-camera.esm.js.map
