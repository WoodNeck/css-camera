export enum TRANSFORM_MODE {
  // Translation: 0, Rotation: 1, Scaling: 2
  TRS = 0b000110,
  TSR = 0b001001,
  RTS = 0b010010,
  RST = 0b011000,
  STR = 0b100001,
  SRT = 0b100100,
}
