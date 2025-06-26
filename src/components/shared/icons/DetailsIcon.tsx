import { iconThemeColorMap, type IconProps } from "./IconTypes";

export const DetailsIcon = ({ width, height, color }: IconProps) => {
  const { fill, stroke } = iconThemeColorMap[color];

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="0.5" y="0.5" width="24" height="24" className={stroke} />
      <rect
        x="50%"
        y="50%"
        width="9"
        height="9"
        className={`${fill} translate-[-4.5px] duration-500 transition-all ease-in-out`}
        id="fill-rect"
      />
    </svg>
  );
};
