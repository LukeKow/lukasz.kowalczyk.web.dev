import type { MainTheme } from "../../../shared/SharedTypes";

type CardTheme = {
  background: string;
  text: string;
  stroke?: React.HTMLAttributes<SVGElement>["className"];
  fill?: React.HTMLAttributes<SVGElement>["className"];
  accent: string;
};

export interface CardProps {
  title: string;
  description: string;
  role: string;
  theme: MainTheme;
  imgSrc: string;
}

export const cardThemeColorMap: Record<MainTheme, CardTheme> = {
  blue: {
    background: "bg-blue-100",
    text: "text-blue-900",
    accent: "text-blue-700",
  },
  orange: {
    background: "bg-orange-100",
    text: "text-orange-900",
    accent: "text-orange-700",
  },
  pink: {
    background: "bg-pink-100",
    text: "text-pink-900",
    accent: "text-pink-700",
  },
  white: {
    background: "bg-white",
    text: "text-black",
    accent: "text-black",
  },
  black: {
    background: "bg-black",
    text: "text-white",
    accent: "text-white",
  },
};
