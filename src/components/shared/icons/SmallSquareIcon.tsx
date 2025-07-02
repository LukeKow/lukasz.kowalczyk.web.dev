import { type IconProps } from "./IconTypes";

export const SmallSquareIcon = ({ width = "9", height = "10" }: IconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 9 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect y="0.5" width="9" height="9" fill="currentColor" />
    </svg>
  );
};
