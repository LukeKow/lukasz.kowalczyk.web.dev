import type { MainTheme } from "../SharedTypes";

export interface IconProps {
  width?: string;
  height?: string;
  color?: MainTheme;
  className?: React.HTMLAttributes<SVGElement>["className"];
}

export type IconTheme = {
  fill: React.HTMLAttributes<SVGElement>["className"];
  stroke: React.HTMLAttributes<SVGElement>["className"];
};

export const iconThemeColorMap: Record<MainTheme, IconTheme> = {
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
  black: {
    fill: "fill-on-black",
    stroke: "stroke-on-black",
  },
  white: {
    fill: "fill-on-white",
    stroke: "stroke-on-white",
  },
};
