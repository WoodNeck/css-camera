export default {
  FOV: 50,
  ORTHOGRAPHIC: false,
  STYLE: {
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
  },
  CLASS: {
    VIEWPORT: 'cc-viewport',
    CAMERA: 'cc-camera',
    WORLD: 'cc-world',
  },
};
