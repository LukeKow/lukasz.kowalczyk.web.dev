import type { CardThemeColor } from "../../projects/components/card/CardTypes";

export interface IconProps {
  size: string;
  color: CardThemeColor;
}

export type IconTheme = {
  fill: React.HTMLAttributes<SVGElement>["className"];
  stroke: React.HTMLAttributes<SVGElement>["className"];
};

export const iconThemeColorMap: Record<CardThemeColor, IconTheme> = {
  blue: {
    fill: "fill-blue-700",
    stroke: "stroke-blue-700",
  },
  orange: {
    fill: "fill-orange-700",
    stroke: "stroke-orange-700",
  },
  pink: {
    fill: "fill-pink-700",
    stroke: "stroke-pink-700",
  },
  bnw: {
    fill: "fill-black",
    stroke: "stroke-black",
  },
};
