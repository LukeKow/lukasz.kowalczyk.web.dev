import { iconThemeColorMap, type IconProps } from "./IconTypes";

export const MenuIcon = ({ width, height, color }: IconProps) => {
  const { fill } = iconThemeColorMap[color];

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="0.5" width="5" height="5" className={fill} />
      <rect x="10.5" width="5" height="5" className={fill} />
      <rect x="20.5" width="5" height="5" className={fill} />
      <rect x="0.5" y="10" width="5" height="5" className={fill} />
      <rect x="10.5" y="10" width="5" height="5" className={fill} />
      <rect x="20.5" y="10" width="5" height="5" className={fill} />
      <rect x="0.5" y="20" width="5" height="5" className={fill} />
      <rect x="10.5" y="20" width="5" height="5" className={fill} />
      <rect x="20.5" y="20" width="5" height="5" className={fill} />
    </svg>
  );
};
