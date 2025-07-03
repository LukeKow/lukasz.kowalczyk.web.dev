import type { MainTheme } from "../../../shared/SharedTypes";

export type PointerColor =
  | MainTheme
  | "lightBlue"
  | "lightOrange"
  | "lightPink"
  | "custom";

export const pointerColorMap: Record<PointerColor, string> = {
  lightBlue: "text-blue-500",
  blue: "text-blue-700",
  orange: "text-orange-700",
  lightOrange: "text-orange-500",
  pink: "text-pink-700",
  lightPink: "text-pink-500",
  black: "text-white",
  white: "text-black",
  custom: "",
};

export interface PointerProps {
  color?: PointerColor;
  customStyle?: string;
  size?: string;
}
