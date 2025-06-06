import {
  pointerColorMap,
  type PointerColor as SeparatorColor,
} from "../pointerWithText/PointerWithTextTypes";

export const separatorColorMap = pointerColorMap;
export interface SeparatorProps {
  color: SeparatorColor;
  separatorCustomStyle?: string;
}
