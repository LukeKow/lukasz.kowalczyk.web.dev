import { type SeparatorProps, separatorColorMap } from "./SeparatorTypes";

export const Separator = ({ color }: SeparatorProps) => {
  return <div className={`${separatorColorMap[color]} w-full h-0.5`}></div>;
};
