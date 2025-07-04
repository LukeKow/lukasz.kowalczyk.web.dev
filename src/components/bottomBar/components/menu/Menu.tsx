import { useContext, useState } from "react";
import { MenuOverlay } from "../../../menuOverlay/MenuOverlay";
import { createPortal } from "react-dom";
import { MenuIcon } from "../../../shared/icons/MenuIcon";
import { FunContext } from "../../../../funContext";

export const Menu = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const havingFun = useContext(FunContext);

  return (
    <>
      <button
        className={`py-2.5 px-5 flex ${havingFun ? "text-orange-600" : "text-blue-700"}`}
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
