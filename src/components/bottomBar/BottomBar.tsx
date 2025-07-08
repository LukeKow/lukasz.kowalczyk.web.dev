import { NavLink } from "react-router";
import { Typography } from "../shared/typography/Typography";
import { bottomBarThemeMap, type BottomBarProps } from "./BottomBarTypes";
import { Menu } from "./components/menu/Menu";
import { Toggle } from "./components/toggle/Toggle";

//TODO actually it is bottom bar but only on mobile XD - this components needs to be updated
export const BottomBar = ({ color, onToggleContext }: BottomBarProps) => {
  const bottomBarTheme = bottomBarThemeMap[color];

  return (
    <>
      <div
        className={`${bottomBarTheme.bg} ${bottomBarTheme.text} h-fit shadow-md sticky top-0 md:px-10 pl-2.5 md:pl-5 py-5 hidden md:flex w-full justify-between items-center`}
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
        {/* TODO make it visible when the fun part of copy is ready */}
        {onToggleContext && (
          <div className={`${bottomBarTheme.accent} h-fit hidden`}>
            <Toggle onToggle={onToggleContext} toggleTheme={bottomBarTheme} />
          </div>
        )}
      </div>
      <div className="md:hidden fixed bottom-0 w-full py-[15px] pb-safe flex justify-center bg-white">
        <Menu />
      </div>
    </>
  );
};
