import { type IconProps } from "./IconTypes";

export const CloseIcon = ({ width = "26", height = "25" }: IconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 26 25"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
    >
      <path d="M1.5 3.5L4 1L24.5 21.5L22 24L1.5 3.5Z" stroke="currentColor" />
      <path d="M4 24L1.5 21.5L22 1L24.5 3.5L4 24Z" stroke="currentColor" />
    </svg>
  );
};
