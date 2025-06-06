import {
  pointerColorMap,
  type PointerColor as SeparatorColor,
} from "../../topBar/components/pointer/PointerTypes";

export const separatorColorMap = pointerColorMap;
export interface SeparatorProps {
  color: SeparatorColor;
  separatorCustomStyle?: string;
}
