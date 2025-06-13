import type { PointerColor } from "../../../topBar/components/pointer/PointerTypes";
import type { CardThemeColor } from "../card/CardTypes";

export interface ProjectDetailsProps {
  projectTheme: CardThemeColor;
  title: string;
  role: string;
  description: string;
  theJob: string;
  tools: string[];
  imgSrc: string;
}

type ProjectTheme = {
  background: string;
  text: string;
  separator: Exclude<PointerColor, "blue" | "orange" | "pink" | "custom">;
  accent: string;
};

export const projectThemeColorMap: Record<CardThemeColor, ProjectTheme> = {
  blue: {
    background: "bg-blue-100",
    text: "text-blue-900",
    accent: "bg-blue-700",
    separator: "darkBlue",
  },
  orange: {
    background: "bg-orange-100",
    text: "text-orange-900",
    accent: "bg-orange-700",
    separator: "darkOrange",
  },
  pink: {
    background: "bg-pink-100",
    text: "text-pink-900",
    accent: "bg-pink-700",
    separator: "darkPink",
  },
  bnw: {
    background: "bg-white",
    text: "text-black",
    accent: "bg-black",
    separator: "black",
  },
};
