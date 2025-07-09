import { type IconProps } from "./IconTypes";

export const StandardMoodIcon = ({
  className,
  width = "27",
  height = "27",
}: IconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 27 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className || ""}
    >
      <circle
        cx="13.5"
        cy="13.5"
        r="12.5"
        stroke="currentColor"
        strokeWidth="2"
      />
      <circle
        cx="13.5"
        cy="13.5"
        r="12.5"
        stroke="currentColor"
        strokeWidth="2"
      />
      <circle cx="9" cy="10" r="2.5" stroke="currentColor" />
      <circle cx="18" cy="10" r="2.5" stroke="currentColor" />
      <circle cx="9" cy="10" r="1" fill="currentColor" />
      <circle cx="18" cy="10" r="1" fill="currentColor" />
      <path
        d="M11.6838 9.05132C11.1598 9.22596 10.8767 9.79228 11.0513 10.3162C11.226 10.8402 11.7923 11.1233 12.3162 10.9487L11.6838 9.05132ZM14.6838 10.9487C15.2077 11.1233 15.774 10.8402 15.9487 10.3162C16.1233 9.79228 15.8402 9.22596 15.3162 9.05132L14.6838 10.9487ZM13.5 9.5L13.8162 8.55132C13.611 8.48289 13.389 8.48289 13.1838 8.55132L13.5 9.5ZM20.4188 9.18627C19.9693 9.50728 19.8653 10.1318 20.1863 10.5812C20.5073 11.0307 21.1318 11.1347 21.5812 10.8137L20.4188 9.18627ZM5.41876 10.8137C5.86817 11.1347 6.49272 11.0307 6.81373 10.5812C7.13474 10.1318 7.03065 9.50728 6.58124 9.18627L5.41876 10.8137ZM12 10L12.3162 10.9487L13.8162 10.4487L13.5 9.5L13.1838 8.55132L11.6838 9.05132L12 10ZM13.5 9.5L13.1838 10.4487L14.6838 10.9487L15 10L15.3162 9.05132L13.8162 8.55132L13.5 9.5ZM21 10L21.5812 10.8137L25.0812 8.31373L24.5 7.5L23.9188 6.68627L20.4188 9.18627L21 10ZM6 10L6.58124 9.18627L3.08124 6.68627L2.5 7.5L1.91876 8.31373L5.41876 10.8137L6 10Z"
        fill="currentColor"
      />
      <path
        d="M8 19C8 19 11.85 22 13.5 22C15.15 22 19 19 19 19"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};
