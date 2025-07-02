import type { TopBarTheme as ToggleTheme } from "../../TopBarTypes";

export interface ToggleProps {
  onToggle: (havingFun: boolean) => void;
  toggleTheme: ToggleTheme;
}
