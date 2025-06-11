import { type IconProps } from "./IconTypes";

export const DetailsIcon = ({ size, className }: IconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect x="0.5" y="0.5" width="24" height="24" />
      <rect x="7.5" y="7.5" width="10" height="10" />
    </svg>
  );
};
