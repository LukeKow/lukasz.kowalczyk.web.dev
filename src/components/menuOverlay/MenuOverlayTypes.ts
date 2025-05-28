export interface MenuOverlayProps {
	items: Link[];
	onClose: () => void;
}

export type Link = {
	ref: React.RefObject<null>;
	text: string;
}