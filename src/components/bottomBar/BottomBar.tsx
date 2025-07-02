import { NavLink } from "react-router";
import { Typography } from "../shared/typography/Typography";
import { bottomBarThemeMap, type BottomBarProps } from "./BottomBarTypes";
import { Menu } from "./components/menu/Menu";
import { Toggle } from "./components/toggle/Toggle";

export const BottomBar = ({ color }: BottomBarProps) => {
  const bottomBarTheme = bottomBarThemeMap[color];

  return (
    <>
      <div
        className={`${bottomBarTheme.bg} ${bottomBarTheme.text} h-fit shadow-md sticky top-0 lg:px-10 pl-2.5 md:pl-5 py-5 hidden md:flex w-full justify-between items-center`}
      >
        <div className="flex gap-5">
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
        <div className={`${bottomBarTheme.accent} h-fit`}>
          <Toggle
            onToggle={() => console.log("Toggle")}
            toggleTheme={bottomBarTheme}
          />
        </div>
      </div>
      <div className="md:hidden fixed bottom-0 w-full py-[15px] flex justify-center bg-white">
        <Menu />
      </div>
    </>
  );
};
