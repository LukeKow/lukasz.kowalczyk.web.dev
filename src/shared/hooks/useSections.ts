import { useRef } from "react";
import type { Link } from "../../components/menuOverlay/MenuOverlayTypes";

export type Section = "Skills" | "Experience" | "Home";
export type SectionsRecordsMap = Record<Section, Link>;

export const useSections = () => {
  const homeRef = useRef(null);
  const procjectsRef = useRef(null);
  const resumeRef = useRef(null);

  const sections = [
    {
      text: "Home",
      ref: homeRef,
    },
    {
      text: "Skills",
      ref: procjectsRef,
    },
    {
      text: "Experience",
      ref: resumeRef,
    },
  ];
  return sections;
};
