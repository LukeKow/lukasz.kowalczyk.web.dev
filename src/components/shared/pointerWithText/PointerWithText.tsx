import { Pointer } from "../../bottomBar/components/pointer/Pointer";
import { Typography } from "../typography/Typography";
import { type PointerWithTextProps } from "./PointerWithTextTypes";

export const PointerWithText = ({
  fontType,
  text,
  textCustomStyle,
  pointerSize,
  pointerColor,
  pointerCustomStyle,
}: PointerWithTextProps) => {
  return (
    <div className="flex gap-2.5 items-center ">
      <div className={pointerCustomStyle}>
        <Pointer color={pointerColor} size={pointerSize} />
      </div>
      <Typography
        text={text}
        fontType={fontType}
        textCustomStyle={textCustomStyle}
      />
    </div>
  );
};
