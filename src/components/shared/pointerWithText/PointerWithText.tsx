import { Pointer } from "../../topBar/components/pointer/Pointer";
import { Typography } from "../typography/Typography";
import { type PointerWithTextProps } from "./PointerWithTextTypes";

export const PointerWithText = ({
  fontType,
  textColor,
  text,
  textCustomStyle,
  pointerSize,
  pointerColor,
  pointerCustomStyle,
}: PointerWithTextProps) => {
  return (
    <div className="flex gap-2.5 items-center ">
      <Pointer
        variant="steady"
        size={`${pointerSize || "16px"}`}
        color={pointerColor}
        customStyle={pointerCustomStyle}
      />
      <Typography
        text={text}
        fontType={fontType}
        textCustomStyle={textCustomStyle}
        textColor={textColor}
      />
    </div>
  );
};
