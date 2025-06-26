import { NavLink } from "react-router";
import { Typography } from "../shared/typography/Typography";
import { topBatThemeMap, type TopBarProps } from "./TopBarTypes";
import { Menu } from "./components/menu/Menu";

export const TopBar = ({ color }: TopBarProps) => {
  const cardTheme = topBatThemeMap[color];

  return (
    <>
      <div
        className={`${cardTheme} h-fit sticky top-0 lg:px-10 pl-2.5 md:pl-5 py-5 hidden md:flex w-full gap-5`}
      >
        <NavLink
          to={"/"}
          className="px-2.5 py-2.5 gap-2.5 hover:underline underline-offset-4"
        >
          <Typography text="Home" fontType="thinSubHeader" />
        </NavLink>
        <NavLink
          to={"/projects"}
          className="px-2.5 py-2.5 gap-2.5 hover:underline underline-offset-4"
        >
          <Typography text="Projects" fontType="thinSubHeader" />
        </NavLink>
      </div>
      <div className="md:hidden fixed bottom-0 w-full py-[15px] flex justify-center bg-white">
        <Menu menuTheme={color} />
      </div>
    </>
  );
};
