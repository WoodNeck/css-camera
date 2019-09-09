export const STYLE = {
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

export const CLASS = {
  VIEWPORT: 'cc-viewport',
  CAMERA: 'cc-camera',
  WORLD: 'cc-world',
};

export const OPTIONS = {
  position: [0, 0, 0],
  scale: [1, 1, 1],
  rotation: [0, 0, 0],
  perspective: 0,
  rotateOffset: 0,
};

export const UPDATE_OPTIONS = {
  property: 'transform',
  timingFunction: 'ease-out',
  delay: '0ms',
};
