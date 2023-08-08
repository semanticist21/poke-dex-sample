// Color Types
type RGB = `rgb(${number}, ${number}, ${number})`;
type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`;
type HEX = `#${string}`;

type TXT_COLOR_CLASS_NO_WEIGHT = `text-${string}`;
type TXT_COLOR_CLASS = `$text-${string}-${string}`;

type BG_COLOR_CLASS_NO_WEIGHT = `bg-${string}`;
type BG_COLOR_CLASS = `$bg-${string}-${string}`;

export type Color =
  | RGB
  | RGBA
  | HEX
  | TXT_COLOR_CLASS_NO_WEIGHT
  | TXT_COLOR_CLASS
  | BG_COLOR_CLASS_NO_WEIGHT
  | BG_COLOR_CLASS;
