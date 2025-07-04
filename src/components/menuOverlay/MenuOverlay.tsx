import { type MenuOverlayProps } from "./MenuOverlayTypes";
import { PointerWithText } from "../shared/pointerWithText/PointerWithText";

import { NavLink } from "react-router";
import { CloseIcon } from "../shared/icons/CloseIcon";
import { useContext } from "react";
import { FunContext } from "../../funContext";

export const MenuOverlay = ({ onClose }: MenuOverlayProps) => {
  const handleItemClick = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    e.preventDefault();

    onClose();
  };
  const havingFun = useContext(FunContext);

  return (
    <div className="fixed touch-none top-0 left-0 w-screen h-full pb-safe flex flex-col justify-between items-stretch bg-[rgba(0,0,0,0.5)]">
      <div className="h-full pb-30 pl-5 flex flex-col gap-5 justify-center bg-white w-4/6">
        <NavLink to="/projects" onClick={onClose} className="px-2.5 py-2.5">
          <PointerWithText
            text="Projects"
            pointerColor="blue"
            fontType="thinSubHeader"
            pointerCustomStyle={`${havingFun ? "text-orange-600" : "text-blue-700"}`}
          />
        </NavLink>
        <NavLink to={"/"} onClick={onClose} className="px-2.5 py-2.5">
          <PointerWithText
            text="Home"
            pointerColor="blue"
            fontType="thinSubHeader"
            pointerCustomStyle={`${havingFun ? "text-orange-600" : "text-blue-700"}`}
          />
        </NavLink>
      </div>
      <div className=" w-full py-[15px] flex justify-center bottom-bar-gradient">
        <button
          onClick={handleItemClick}
          className={`py-2.5 px-5 ${havingFun ? "text-orange-600" : "text-blue-700"}`}
        >
          <CloseIcon />
        </button>
      </div>
    </div>
  );
};
