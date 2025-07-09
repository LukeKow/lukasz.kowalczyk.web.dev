import { type IconProps } from "./IconTypes";

export const NotSoSeriousMood = ({
  width = "27",
  height = "27",
  className,
}: IconProps) => {
  // const { fill, stroke } = iconThemeColorMap[color];
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 27 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle
        cx="13.5"
        cy="13.5"
        r="12.5"
        transform="rotate(180 13.5 13.5)"
        stroke="currentColor"
        strokeWidth="2"
      />
      <circle
        cx="13.5"
        cy="13.5"
        r="12.5"
        transform="rotate(180 13.5 13.5)"
        stroke="currentColor"
        strokeWidth="2"
      />
      <circle
        cx="18.5"
        cy="16.5"
        r="1.5"
        transform="rotate(180 18.5 16.5)"
        fill="currentColor"
      />
      <circle
        cx="8.5"
        cy="16.5"
        r="1.5"
        transform="rotate(180 8.5 16.5)"
        fill="currentColor"
      />
      <path
        d="M22 12C22 12 18.5 5 14 5C9.5 5 5 12 5 12"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M22 12C22 12 15.65 10 14 10C12.35 10 5 12 5 12"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};
