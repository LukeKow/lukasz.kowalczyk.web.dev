export type CardThemeColor = "blue" | "pink" | "orange" | "bnw";

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
  theme: CardThemeColor;
  imgSrc: string;
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
