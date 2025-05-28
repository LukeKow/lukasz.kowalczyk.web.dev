import { useState } from "react";
import { Square } from "../square/Square";
import { type MenuProps } from "./MenuTypes";
import { MenuOverlay } from "../../../menuOverlay/MenuOverlay";
import { createPortal } from "react-dom";

export const Menu = ({ color, items }: MenuProps) => {
	const [isMenuVisible, setIsMenuVisible] = useState(false);

	return (
		<>
			<button
				className={`
				py-5 px-5 w-[45px] h-fit flex items-center flex-col gap-[5px] 
				[&>div]:w-[5px] duration-500 transition-all ease-in-out
				hover:w-[65px] hover:cursor-pointer hover:bg-orange-100
				hover:[&>div]:w-full hover:[&>div]:nth-1:self-start 
				hover:[&>div]:nth-2:self-center hover:[&>div]:nth-3:self-end`
				}
				onClick={() => setIsMenuVisible(!isMenuVisible)}>
				<Square variant="animated" color={color} />
				<Square variant="animated" color={color} />
				<Square variant="animated" color={color} />
			</button>
			{isMenuVisible &&
				createPortal(
					<MenuOverlay
						items={items}
						onClose={() => setIsMenuVisible(false)} />,
					document.body)
			}
		</>
	);
}
