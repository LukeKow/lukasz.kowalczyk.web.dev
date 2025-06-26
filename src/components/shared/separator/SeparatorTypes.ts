import {
  pointerColorMap,
  type PointerColor,
} from "../../topBar/components/pointer/PointerTypes";

export type SeparatorColor =  PointerColor;

export const separatorColorMap = pointerColorMap;
export interface SeparatorProps {
  color: SeparatorColor;
  separatorCustomStyle?: string;
}
