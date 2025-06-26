import { type MenuOverlayProps } from "./MenuOverlayTypes";
import { PointerWithText } from "../shared/pointerWithText/PointerWithText";

import { NavLink } from "react-router";
import { CloseIcon } from "../shared/icons/CloseIcon";

export const MenuOverlay = ({ onClose }: MenuOverlayProps) => {
  const handleItemClick = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    e.preventDefault();

    onClose();
  };
  return (
    <div className="fixed top-0 left-0 w-screen h-screen flex flex-col justify-between bg-[rgba(0,0,0,0.5)]">
      <div className="h-full pb-30 pl-5 flex flex-col gap-5 justify-center bg-white w-4/6">
        <NavLink to="/projects" onClick={onClose} className="px-2.5 py-2.5">
          <PointerWithText
            text="Projects"
            pointerColor="blue"
            fontType="thinSubHeader"
          />
        </NavLink>
        <NavLink to={"/"} onClick={onClose} className="px-2.5 py-2.5">
          <PointerWithText
            text="Home"
            pointerColor="blue"
            fontType="thinSubHeader"
          />
        </NavLink>
      </div>
      <div className=" w-full h-fit py-[15px] flex justify-center bottom-bar-gradient">
        <button onClick={handleItemClick} className="py-2.5 px-5">
          <CloseIcon color="blue" />
        </button>
      </div>
    </div>
  );
};
