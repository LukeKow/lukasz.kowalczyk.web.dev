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
      className={`${textTypeMap[fontType]} ${textColorMap[textColor]} ${textCustomStyle}`}
    >
      {text}
    </span>
  );
};
