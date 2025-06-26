import { NavLink } from "react-router";
import { Typography } from "../shared/typography/Typography";
import { topBatThemeMap, type TopBarProps } from "./TopBarTypes";

export const TopBar = ({ color = "blue" }: TopBarProps) => {
  const cardTheme = topBatThemeMap[color];

  return (
    <div
      className={`${cardTheme} h-fit sticky top-0 lg:px-10 pl-2.5 md:pl-5 py-5 flex w-full gap-5 items-center`}
    >
      <NavLink
        to={"/"}
        className="px-2.5 py-2.5 gap-2.5 hover:underline underline-offset-4"
      >
        <Typography text="Home" fontType="subheader" />
      </NavLink>
      <NavLink
        to={"/projects"}
        className="px-2.5 py-2.5 gap-2.5 hover:underline underline-offset-4"
      >
        <Typography text="Projects" fontType="subheader" />
      </NavLink>
    </div>
  );
};
