import parse from "html-react-parser";

import { fontTypeMap, type TypographyProps } from "./TypographyTypes";

// TODO: Think about creating separate components for Typography's fontType
export const Typography = ({
  fontType,
  text,
  textCustomStyle,
  textAsHtml,
}: TypographyProps) => {
  return textAsHtml ? (
    <span className={`${fontTypeMap[fontType]} ${textCustomStyle}`}>
      {parse(text)}
    </span>
  ) : (
    <span className={`${fontTypeMap[fontType]} ${textCustomStyle}`}>
      {text}
    </span>
  );
};
