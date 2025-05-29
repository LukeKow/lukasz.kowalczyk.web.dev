import { PointerWithText } from "../shared/pointerWithText/PointerWithText";
import { Menu } from "./components/menu/Menu";
import { type TopBarProps } from "./TopBarTypes";

export const TopBar = ({ name }: TopBarProps) => {
  return (
    <div className="h-fit bg-white sticky top-0 px-5 lg:px-10 py-5 lg:py-10 flex w-full justify-between items-center">
      <div className="flex gap-2.5">
        <PointerWithText text={name} />
      </div>
      <Menu />
    </div>
  );
};
