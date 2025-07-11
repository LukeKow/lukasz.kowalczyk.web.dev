import type { PointerColor } from "../../bottomBar/components/pointer/PointerTypes";
import type { TypographyProps } from "../typography/TypographyTypes";

export interface PointerWithTextProps extends TypographyProps {
  pointerSize?: string;
  pointerColor?: PointerColor;
  pointerCustomStyle?: string;
}
