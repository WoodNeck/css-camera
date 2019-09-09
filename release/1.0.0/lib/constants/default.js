export var STYLE = {
    VIEWPORT: {
        width: '100%',
        height: '100%',
        'transform-style': 'preserve-3d',
        overflow: 'hidden',
    },
    CAMERA: {
        width: '100%',
        height: '100%',
        'transform-style': 'preserve-3d',
        'will-change': 'transform',
    },
    WORLD: {
        width: '100%',
        height: '100%',
        'transform-style': 'preserve-3d',
        'will-change': 'transform',
    },
};
export var CLASS = {
    VIEWPORT: 'cc-viewport',
    CAMERA: 'cc-camera',
    WORLD: 'cc-world',
};
export var OPTIONS = {
    position: [0, 0, 0],
    scale: [1, 1, 1],
    rotation: [0, 0, 0],
    perspective: 0,
    rotateOffset: 0,
};
export var UPDATE_OPTIONS = {
    property: 'transform',
    timingFunction: 'ease-out',
    delay: '0ms',
};
//# sourceMappingURL=default.js.map