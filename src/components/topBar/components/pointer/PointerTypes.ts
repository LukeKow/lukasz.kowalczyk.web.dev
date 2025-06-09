export type PointerColor =
  | "blue"
  | "darkBlue"
  | "orange"
  | "darkOrange"
  | "pink"
  | "darkPink"
  | "black"
  | "custom";

export const pointerColorMap: Record<PointerColor, string> = {
  blue: "bg-blue-500",
  darkBlue: "bg-blue-700",
  orange: "bg-orange-500",
  darkOrange: "bg-orange-700",
  pink: "bg-pink-500",
  darkPink: "bg-pink-700",
  black: "bg-black",
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
