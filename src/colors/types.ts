import { grayScale, yellow, blue, red, orange, green } from "./colors";

export type ColorType =
  | (typeof grayScale)[keyof typeof grayScale]
  | (typeof yellow)[keyof typeof yellow]
  | (typeof blue)[keyof typeof blue]
  | (typeof red)[keyof typeof red]
  | (typeof orange)[keyof typeof orange]
  | (typeof green)[keyof typeof green];
