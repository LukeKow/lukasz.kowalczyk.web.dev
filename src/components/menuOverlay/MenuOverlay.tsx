import { useContext } from "react";

import { type MenuOverlayProps } from "./MenuOverlayTypes";

import { SectionsContext } from "../../shared/contexts/sectionContext";
import { PointerWithText } from "../shared/pointerWithText/PointerWithText";

import closeIcon from '../../assets/icons/close-icon.svg';

export const MenuOverlay = ({ onClose }: MenuOverlayProps) => {
	const sections = useContext(SectionsContext);

	const handleItemClick = (ref: React.RefObject<null | HTMLElement>, e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
		e.preventDefault();
		if (ref.current) {
			ref.current.scrollIntoView();
		}
		onClose();
	};
	return (
		<div className="fixed top-0 left-0 w-screen h-screen bg-orange-100 flex flex-col justify-between items-center">
			<div className="w-full flex justify-end px-5 py-5">
				<button className="px-2.5 py-2.5 flex gap-2.5 text-brown-200 hover:cursor-pointer"
					onClick={onClose}>
					close <img src={closeIcon} />
				</button>
			</div>
			<div className="h-full mb-30 flex flex-col gap-10 justify-center">
				{sections.map((i, index) =>
					<a key={index} href="" onClick={(e) => handleItemClick(i.ref, e)} className="hover:-underline-offset-2">
						<PointerWithText text={i.text} />
					</a>
				)}
			</div>
		</div>
	);
};
