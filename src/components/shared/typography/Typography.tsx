import {
  textColorMap,
  textTypeMap,
  type TypographyProps,
} from "./TypographyTypes";

export const Typography = ({
  fontType,
  textColor,
  text,
  textCustomStyle,
}: TypographyProps) => {
  return (
    <span
      className={`${textCustomStyle} ${textTypeMap[fontType]} ${textColorMap[textColor]}`}
    >
      {text}
    </span>
  );
};
