import { type IconProps } from "./IconTypes";

export const SendMessageIcon = ({ width = "79", height = "79" }: IconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 79 79"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Send message</title>
      <path
        d="M21 50.5L0 29.5L79 0L50 79L29.5 58L63 16L21 50.5Z"
        fill="currentColor"
      />
    </svg>
  );
};
