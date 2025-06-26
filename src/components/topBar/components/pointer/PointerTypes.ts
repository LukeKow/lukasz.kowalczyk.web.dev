import type { MainTheme } from "../../../shared/SharedTypes";

export type PointerColor =
  | MainTheme
  | "lightBlue"
  | "lightOrange"
  | "lightPink"
  | "custom";

export const pointerColorMap: Record<PointerColor, string> = {
  lightBlue: "bg-blue-500",
  blue: "bg-blue-700",
  orange: "bg-orange-700",
  lightOrange: "bg-orange-500",
  pink: "bg-pink-700",
  lightPink: "bg-pink-500",
  black: "bg-black",
  white: "bg-white",
  custom: "",
};

export type PointerProps =
  | {
      color: PointerColor;
      customStyle?: string;
      variant: "animated";
    }
  | {
      color: PointerColor;
      customStyle?: string;
      size: string;
      variant: "steady";
    };
