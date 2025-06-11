type FontType = "header" | "subheader" | "body" | "sideNote" | "custom";
export type TextColor = "blue" | "orange" | "pink" | "black" | "custom";

export interface TypographyProps {
  text: string;
  fontType: FontType;
  textColor: TextColor;
  textCustomStyle?: string;
}

export const textTypeMap: Record<FontType, string> = {
  header: "font-semibold text-[32px]/[48px]",
  subheader: "font-normal text-[24px]/[36px]",
  body: "font-light text-[18px]/[27px]",
  sideNote: "italic font-thin text-[18px]/[27px]",
  custom: "",
};

export const textColorMap: Record<TextColor, string> = {
  black: "text-black",
  blue: "text-blue-900",
  orange: "text-orange-900",
  pink: "text-pink-900",
  custom: "",
};
