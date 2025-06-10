import { TopBar } from "../topBar/TopBar";
import { type ProjectsProps } from "./ProjectsTypes";

export const Projects = ({ title }: ProjectsProps) => {
  return (
    <>
      <TopBar name="Łukasz Kowalczyk" />
      <p>{title}</p>
    </>
  );
};
