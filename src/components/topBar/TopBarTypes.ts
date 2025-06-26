import type { MainTheme } from "../shared/SharedTypes";

export interface TopBarProps {
  color: MainTheme;
}

export const topBatThemeMap: Record<MainTheme, string> = {
  black: "bg-black text-white",
  white: "bg-white text-black",
  blue: "bg-blue-700 text-blue-100",
  pink: "bg-pink-700 text-pink-100",
  orange: "bg-orange-700 text-orange-100",
};
