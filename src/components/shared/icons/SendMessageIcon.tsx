import { iconThemeColorMap, type IconProps } from "./IconTypes";

export const SendMessageIcon = ({
  width = "79",
  height = "79",
  color,
}: IconProps) => {
  const { fill } = iconThemeColorMap[color];

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 79 79"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Send message</title>
      <path
        d="M21 50.5L0 29.5L79 0L50 79L29.5 58L63 16L21 50.5Z"
        className={fill}
      />
    </svg>
  );
};
