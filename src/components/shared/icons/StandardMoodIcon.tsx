import { iconThemeColorMap, type IconProps } from "./IconTypes";

export const StandardMoodIcon = ({
  width = "27",
  height = "27",
  color,
}: IconProps) => {
  const { fill, stroke } = iconThemeColorMap[color];

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 27 27"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="13.5" cy="13.5" r="12.5" className={stroke} />
      <circle cx="13.5" cy="13.5" r="12.5" className={stroke} />
      <circle cx="9" cy="10" r="2.5" className={stroke} />
      <circle cx="18" cy="10" r="2.5" className={stroke} />
      <circle cx="9" cy="10" r="1" className={fill} />
      <circle cx="18" cy="10" r="1" className={fill} />
      <path
        d="M11.5 10.5L13.5 9.5L15.5 10.5M20.5 10.5L24.5 7.5M6.5 10.5L2.5 7.5"
        className={stroke}
        stroke-linejoin="round"
      />
      <path
        d="M8 19C8 19 11.85 22 13.5 22C15.15 22 19 19 19 19"
        className={stroke}
        stroke-linecap="round"
      />
    </svg>
  );
};
