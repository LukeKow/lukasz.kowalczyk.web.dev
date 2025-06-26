import { fontTypeMap, type TypographyProps } from "./TypographyTypes";

export const Typography = ({
  fontType,
  text,
  textCustomStyle,
}: TypographyProps) => {
  return (
    <span className={`${fontTypeMap[fontType]} ${textCustomStyle}`}>
      {text}
    </span>
  );
};
