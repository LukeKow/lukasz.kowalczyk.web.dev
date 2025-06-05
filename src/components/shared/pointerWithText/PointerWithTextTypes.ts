import type { TypographyProps } from "../typography/TypographyTypes";

export type PointerColor =
  | "blue"
  | "darkBlue"
  | "orange"
  | "darkOrange"
  | "pink"
  | "darkPink"
  | "black";

export const pointerColorMap: Record<PointerColor, string> = {
  blue: "bg-blue-500",
  darkBlue: "bg-blue-700",
  orange: "bg-orange-500",
  darkOrange: "bg-orange-700",
  pink: "bg-pink-500",
  darkPink: "bg-pink-700",
  black: "bg-black",
};

export interface PointerWithTextProps extends TypographyProps {
  pointerSize?: string;
  pointerColor: PointerColor;
}
