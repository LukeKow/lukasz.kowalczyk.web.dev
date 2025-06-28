import type { PropsWithChildren } from "react";
import { buttonColorMap, type ConatinerProps } from "./ContainerTypes";

export const Container = ({
  bgColor,
  children,
  className,
}: PropsWithChildren<ConatinerProps>) => {
  return (
    <div
      className={`py-5 px-5 flex flex-col h-full md:items-center ${buttonColorMap[bgColor]} ${className}`}
    >
      {children}
    </div>
  );
};
