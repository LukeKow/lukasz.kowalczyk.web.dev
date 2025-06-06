import { Square } from "../../topBar/components/square/Square";
import { Typography } from "../typography/Typography";
import {
  type PointerWithTextProps,
  pointerColorMap,
} from "./PointerWithTextTypes";

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
    <div className="h-10 lg:h-20 flex justify-between">
      <div className="flex gap-2.5 items-center ">
        <Square
          variant="steady"
          size={`${pointerSize || "16px"}`}
          color={pointerColorMap[pointerColor] || pointerCustomStyle}
        />
        <Typography
          text={text}
          fontType={fontType}
          textCustomStyle={textCustomStyle}
          textColor={textColor}
        />
      </div>
    </div>
  );
};
