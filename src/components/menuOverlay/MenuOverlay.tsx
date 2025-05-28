import { PointerWithText } from "../shared/pointerWithText/PointerWithText";
import { type MenuOverlayProps } from "./MenuOverlayTypes";

import closeIcon from '../../assets/icons/close-icon.svg';

export const MenuOverlay = ({ items, onClose }: MenuOverlayProps) => {
	const handleItemClick = (ref: React.RefObject<null | HTMLElement>, e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
		e.preventDefault();
		if (ref.current) {
			ref.current.scrollIntoView();
		}
		onClose();
	}
	return (
		<div className="fixed top-0 left-0 w-screen h-screen bg-orange-100 flex gap-10 flex-col justify-between items-center">
			<div className="h-full flex flex-col justify-center">
				{items.map((i, index) =>
					<a key={index} href="" onClick={(e) => handleItemClick(i.ref, e)} className="hover:-underline-offset-2">
						<PointerWithText text={i.text} />
					</a>
				)}
			</div>
			<button className="px-5 py-5 flex gap-2.5 w-full justify-end text-brown-200 hover:cursor-pointer"
				onClick={onClose}>
				close <img src={closeIcon} />
			</button>
		</div>
	);
}
