import type { MainTheme } from "../../../shared/SharedTypes";

export interface ProjectDetailsProps {
  theme: MainTheme;
  title: string;
  myRoleName: string;
  description: string;
  myRoleDescription: string;
  toolsUsed: string[];
  image: { url: string };
}

type ProjectTheme = {
  background: string;
  text: string;
  separator: MainTheme;
  accent: string;
  topBarTheme: MainTheme;
};

export const projectThemeColorMap: Record<MainTheme, ProjectTheme> = {
  blue: {
    background: "bg-blue-100",
    text: "text-blue-900",
    accent: "bg-blue-700",
    separator: "blue",
    topBarTheme: "blue",
  },
  orange: {
    background: "bg-orange-100",
    text: "text-orange-900",
    accent: "bg-orange-700",
    separator: "orange",
    topBarTheme: "orange",
  },
  pink: {
    background: "bg-pink-100",
    text: "text-pink-900",
    accent: "bg-pink-700",
    separator: "pink",
    topBarTheme: "pink",
  },
  black: {
    background: "bg-black",
    text: "text-white",
    accent: "bg-white",
    separator: "white",
    topBarTheme: "white",
  },
  white: {
    background: "bg-white",
    text: "text-black",
    accent: "bg-black",
    separator: "black",
    topBarTheme: "black",
  },
};
