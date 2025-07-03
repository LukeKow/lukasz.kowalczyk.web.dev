import { SmallSquareIcon } from "../../../shared/icons/SmallSquareIcon";
import { pointerColorMap, type PointerProps } from "./PointerTypes";

export const Pointer = ({ size, color, customStyle }: PointerProps) => {
  return (
    <div className={`${customStyle} ${color ? pointerColorMap[color] : ""}`}>
      <SmallSquareIcon width={size} height={size} />
    </div>
  );
};
