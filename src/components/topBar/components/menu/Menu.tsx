import { useState } from "react";
import { type MenuProps } from "./MenuTypes";
import { MenuOverlay } from "../../../menuOverlay/MenuOverlay";
import { createPortal } from "react-dom";
import { MenuIcon } from "../../../shared/icons/MenuIcon";

export const Menu = ({ menuTheme = "pink" }: MenuProps) => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  return (
    <>
      <button
        className="py-2.5 px-5 flex "
        onClick={() => setIsMenuVisible(!isMenuVisible)}
      >
        <MenuIcon color={menuTheme} width="26" height="25" />
      </button>
      {isMenuVisible &&
        createPortal(
          <MenuOverlay onClose={() => setIsMenuVisible(false)} />,
          document.body,
        )}
    </>
  );
};
