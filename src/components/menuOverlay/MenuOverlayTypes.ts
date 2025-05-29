export interface MenuOverlayProps {
  onClose: () => void;
}

export type Link = {
  ref: React.RefObject<null>;
  text: string;
};
