import { useState } from "react";
import { MenuOverlay } from "../../../menuOverlay/MenuOverlay";
import { createPortal } from "react-dom";
import { MenuIcon } from "../../../shared/icons/MenuIcon";

export const Menu = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  return (
    <>
      <button
        className="py-2.5 px-5 flex text-blue-700"
        onClick={() => setIsMenuVisible(!isMenuVisible)}
      >
        <MenuIcon width="26" height="25" />
      </button>
      {isMenuVisible &&
        createPortal(
          <MenuOverlay onClose={() => setIsMenuVisible(false)} />,
          document.body,
        )}
    </>
  );
};
