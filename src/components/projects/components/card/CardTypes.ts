import type { TextColor } from "../../../shared/typography/TypographyTypes";
import type { PointerColor } from "../../../topBar/components/pointer/PointerTypes";

type CardThemeColor = "blue" | "pink" | "orange" | "bnw";
type CardTheme = {
  background: string;
  text: string;
  accent: string;
};

export interface CardProps {
  projectTitle: string;
	projectDesc: string;
  role: string;
  theme: CardThemeColor;
}

export const cardThemeColorMap: Record<CardThemeColor, CardTheme> = {
  blue: {
    background: "bg-blue-100",
    text: "text-blue-900",
    accent: "bg-blue-700",
  },
  orange: {
    background: "bg-orange-100",
    text: "text-orange-900",
    accent: "bg-orange-700",
  },
  pink: {
    background: "bg-pink-100",
    text: "text-pink-900",
    accent: "bg-pink-700",
  },
  bnw: {
    background: "bg-white",
    text: "text-black",
    accent: "bg-black",
  },
};
