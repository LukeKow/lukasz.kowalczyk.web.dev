import {
  textColorMap,
  textTypeMap,
  type TypographyProps,
} from "./TypographyTypes";

export const Typography = ({
  tType,
  tColor,
  text,
  cssClass,
}: TypographyProps) => {
  return (
    <span
      className={`${textTypeMap[tType]} ${textColorMap[tColor]} ${cssClass}`}
    >
      {text}
    </span>
  );
};
