import type { BottomBarTheme as ToggleTheme } from "../../BottomBarTypes";

export interface ToggleProps {
  onToggle: (havingFun: boolean) => void;
  toggleTheme: ToggleTheme;
}
