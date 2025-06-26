import { type MenuOverlayProps } from "./MenuOverlayTypes";
import { PointerWithText } from "../shared/pointerWithText/PointerWithText";

import backToHome from "../../assets/icons/back-to-home.svg";
import closeIcon from "../../assets/icons/close-icon.svg";
import { NavLink } from "react-router";

export const MenuOverlay = ({ onClose }: MenuOverlayProps) => {
  const handleItemClick = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) => {
    e.preventDefault();

    onClose();
  };
  return (
    <div className="fixed top-0 left-0 w-screen h-screen bg-orange-100 flex flex-col justify-between items-center">
      <div className="w-full flex justify-between px-5 py-5">
        <NavLink
          onClick={onClose}
          to={"/"}
          className="px-2.5 py-2.5 gap-2.5 text-brown-200 hover:cursor-pointer hover:text-brown-900"
        >
          <img src={backToHome} />
        </NavLink>
        <button
          className="px-2.5 py-2.5 flex items-center gap-2.5 text-brown-200 hover:cursor-pointer"
          onClick={onClose}
        >
          zamknij <img src={closeIcon} className="h-[12px]" />
        </button>
      </div>
      <div className="h-full mb-30 flex flex-col gap-10 justify-center">
        <NavLink to="/projects">
          <PointerWithText
            text="Projects"
            pointerColor="blue"
            fontType="subheader"
          />
        </NavLink>
        <a
          href=""
          onClick={(e) => handleItemClick(e)}
          className="hover:-underline-offset-2 hidden"
        ></a>
      </div>
    </div>
  );
};
