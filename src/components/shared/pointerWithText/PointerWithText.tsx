import { Square } from "../../topBar/components/square/Square";
import { Typography } from "../typography/Typography";
import {
  type PointerWithTextProps,
  pointerColorMap,
} from "./PointerWithTextTypes";

export const PointerWithText = ({
  tType,
  tColor,
  text,
  cssClass,
  pointerSize,
  pointerColor,
}: PointerWithTextProps) => {
  return (
    <div className="h-10 lg:h-20 flex justify-between">
      <div className="flex gap-2.5 items-center ">
        <Square
          variant="steady"
          size={`${pointerSize || "16px"}`}
          color={pointerColorMap[pointerColor]}
        />
        <Typography
          text={text}
          tType={tType}
          cssClass={cssClass}
          tColor={tColor}
        />
      </div>
    </div>
  );
};
