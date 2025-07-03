import { Pointer } from "../../bottomBar/components/pointer/Pointer";
import { Typography } from "../typography/Typography";
import { type PointerWithTextProps } from "./PointerWithTextTypes";

//TODO simplify this component it's weird and messy... XD

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
        <Pointer
          color={pointerColor}
          size={pointerSize}
          customStyle={pointerCustomStyle}
        />
      </div>
      <Typography
        text={text}
        fontType={fontType}
        textCustomStyle={textCustomStyle}
      />
    </div>
  );
};
