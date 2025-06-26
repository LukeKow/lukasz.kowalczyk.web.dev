type FontType =
  | "header"
  | "subheader"
  | "thinSubHeader"
  | "body"
  | "sideNote"
  | "custom";

export interface TypographyProps {
  text: string;
  fontType: FontType;
  textCustomStyle?: string;
}

export const fontTypeMap: Record<FontType, string> = {
  header: "font-semibold text-[32px]/[48px]",
  subheader: "font-normal text-[24px]/[36px]",
  thinSubHeader: "font-light text-[24px]/[36px]",
  body: "font-light text-[18px]/[27px]",
  sideNote: "italic font-light text-[18px]/[27px]",
  custom: "",
};
