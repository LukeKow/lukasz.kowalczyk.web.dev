import type { PropsWithChildren } from "react";
import { buttonColorMap, type ConatinerProps } from "./ContainerTypes";

export const Container = ({
  bgColor,
  children,
}: PropsWithChildren<ConatinerProps>) => {
  return (
    <div className={`py-10 px-5 flex flex-col ${buttonColorMap[bgColor]}`}>
      {children}
    </div>
  );
};
