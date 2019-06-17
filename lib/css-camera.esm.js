/*
Copyright (c) 2019 undefined
css-camera JavaScript library
css-camera project is licensed under the MIT license

https://github.com/WoodNeck/css-camera#readme
@version 0.0.1
*/
import { vec3, quat, mat4 } from 'gl-matrix';

var Transform = function () {
  function Transform() {
    this._position = vec3.create();
    this._scale = vec3.fromValues(1, 1, 1);
    this._rotation = vec3.create();
    this._perspective = 0;
  }

  var __proto = Transform.prototype;
  Object.defineProperty(__proto, "position", {
    get: function () {
      return this._position;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(__proto, "scale", {
    get: function () {
      return this._scale;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(__proto, "rotation", {
    get: function () {
      return this._rotation;
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
  Object.defineProperty(__proto, "cameraCSS", {
    get: function () {
      var perspective = this._perspective;
      var rotation = this._rotation;
      return "translateZ(" + perspective + "px) rotateY(" + rotation[1] + "deg) rotateZ(" + rotation[2] + "deg) rotateX(" + rotation[0] + "deg)";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(__proto, "worldCSS", {
    get: function () {
      var perspective = this._perspective;
      var position = this._position;
      return "translate3d(" + -position[0] + "px, " + -position[1] + "px, " + (-position[2] - perspective) + "px)";
    },
    enumerable: true,
    configurable: true
  });

  __proto.translate = function (x, y, z) {
    var transVec = vec3.fromValues(x, y, z);
    var rotation = this._rotation;
    var rotQuat = quat.create();
    quat.fromEuler(rotQuat, rotation[0], rotation[1], rotation[2]);
    quat.invert(rotQuat, rotQuat);
    vec3.transformQuat(transVec, transVec, rotQuat);
    vec3.add(this._position, this._position, transVec);
  };

  __proto.absTranslate = function (x, y, z) {
    vec3.add(this._position, this._position, vec3.fromValues(x, y, z));
  };

  __proto.rotateX = function (deg) {
    this._rotation[0] += deg;
  };

  __proto.rotateY = function (deg) {
    this._rotation[1] += deg;
  };

  __proto.rotateZ = function (deg) {
    this._rotation[2] += deg;
  };

  return Transform;
}();

var BASE_ELEMENT_NOT_EXIST = 'Base element doesn\'t exist.';
var MUST_STRING_OR_ELEMENT = 'Element should be provided in string or HTMLElement.';

var getElement = function (el) {
  if (typeof el === 'string') {
    var queryResult = document.querySelector(el);

    if (!queryResult) {
      throw new Error(BASE_ELEMENT_NOT_EXIST);
    }

    return queryResult;
  } else if (el.nodeName && el.nodeType === 1) {
    return el;
  } else {
    throw new Error(MUST_STRING_OR_ELEMENT);
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
  var matrix = mat4.fromValues.apply(mat4, matrixVal);
  return matrix;
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

var DEFAULT = {
  FOV: 50,
  ORTHOGRAPHIC: false,
  STYLE_VIEWPORT: {
    width: '100%',
    height: '100%',
    'transform-style': 'preserve-3d'
  },
  CLASS: {
    VIEWPORT: 'cc-viewport',
    CAMERA: 'cc-camera',
    WORLD: 'cc-world'
  }
};

var IdentityMatrix4x4 = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];

var Camera = function () {
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

  var __proto = Camera.prototype;
  Object.defineProperty(__proto, "transform", {
    get: function () {
      return this._transform;
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

  __proto.focus = function (element, worldMatrix) {
    if (worldMatrix === void 0) {
      worldMatrix = IdentityMatrix4x4;
    }

    var focusMatrix = this.getFocusMatrix(element, worldMatrix);
    console.log(focusMatrix);
  };

  __proto.getFocusMatrix = function (element, worldMatrix) {
    if (worldMatrix === void 0) {
      worldMatrix = IdentityMatrix4x4;
    }

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

    if (firstFlatIndex >= 0) {
      elStyles.splice(firstFlatIndex + 1);
    }

    var matrix = mat4.fromValues.apply(mat4, worldMatrix);
    elStyles.forEach(function (style) {
      matrix = mat4.mul(matrix, matrix, getTransformMatrix(style));
    });
    return matrix;
  };

  __proto.setPerspective = function (val) {
    applyCSS(this._viewportEl, {
      perspective: val + "px"
    });
    this._transform.perspective = val;
    this.update();
  };

  __proto.update = function () {
    var transform = this._transform;
    this._cameraEl.style.transform = transform.cameraCSS;
    this._worldEl.style.transform = transform.worldCSS;
  };

  return Camera;
}();

export default Camera;
//# sourceMappingURL=css-camera.esm.js.map
