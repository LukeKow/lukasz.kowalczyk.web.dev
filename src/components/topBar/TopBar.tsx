import { Typography } from "../shared/typography/Typography";
import { Menu } from "./components/menu/Menu";
import { type TopBarProps } from "./TopBarTypes";

export const TopBar = ({ name, color }: TopBarProps) => {
  return (
    <div className="h-fit bg-white sticky top-0 lg:px-10 pl-2.5 md:pl-5 py-5 flex w-full justify-between items-center">
      <Typography
        text={name}
        textColor="blue"
        fontType="custom"
        textCustomStyle="font-medium text-[24px]/[36px]"
      />
      <Menu pointerColor={color || "darkBlue"} />
    </div>
  );
};
