import { type SeparatorProps, separatorColorMap } from "./SeparatorTypes";

export const Separator = ({ color, separatorCustomStyle }: SeparatorProps) => {
  return (
    <div
      className={`${separatorCustomStyle} ${color ? separatorColorMap[color] : ""} w-full h-0.5`}
    ></div>
  );
};
