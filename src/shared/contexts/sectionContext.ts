import { createContext } from "react";
import type { Link } from "../../menuOverlay/MenuOverlayTypes";

export const SectionsContext = createContext<Link[]>([]);
