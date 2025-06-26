export interface TopBarProps {
  color?: TopBarTheme;
}

export type TopBarTheme = "black" | "white" | "blue" | "pink" | "orange";

export const topBatThemeMap: Record<TopBarTheme, string> = {
  black: "bg-black text-white",
  white: "bg-white text-black",
  blue: "bg-blue-700 text-blue-100",
  pink: "bg-pink-700 text-pink-100",
  orange: "bg-orange-700 text-orange-100",
};
