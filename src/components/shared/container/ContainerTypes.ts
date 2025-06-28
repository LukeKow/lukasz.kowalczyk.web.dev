type ContainerBackgroundColor = "orange" | "blue" | "pink" | "white" | "none";

export interface ConatinerProps {
  bgColor: ContainerBackgroundColor;
  className?: React.HTMLAttributes<HTMLDivElement>["className"];
}

export const buttonColorMap: Record<ContainerBackgroundColor, string> = {
  orange: "bg-orange-100",
  blue: "bg-blue-100",
  pink: "bg-pink-100",
  white: "bg-white",
  none: "",
};
