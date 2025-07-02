import type { MainTheme } from "../shared/SharedTypes";

export interface TopBarProps {
  color: MainTheme;
}

export type TopBarTheme = {
  text: string;
  bg: string;
  accent: string;
  accentBg?: string;
};

export const topBarThemeMap: Record<MainTheme, TopBarTheme> = {
  black: {
    text: "text-white",
    bg: "bg-black",
    accent: "text-black",
    accentBg: "bg-white",
  },
  white: {
    text: "text-black",
    bg: "bg-white",
    accent: "text-black",
    accentBg: "bg-white",
  },
  blue: {
    text: "text-blue-100",
    bg: "bg-blue-700",
    accent: "text-blue-700",
    accentBg: "bg-blue-100",
  },
  pink: {
    text: "text-pink-100",
    bg: "bg-pink-700",
    accent: "text-pink-700",
    accentBg: "bg-pink-100",
  },
  orange: {
    text: "text-orange-100",
    bg: "bg-orange-700",
    accent: "text-orange-700",
    accentBg: "bg-orange-100",
  },
};
