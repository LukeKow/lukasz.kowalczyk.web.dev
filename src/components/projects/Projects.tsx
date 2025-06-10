import { PointerWithText } from "../shared/pointerWithText/PointerWithText";
import { Typography } from "../shared/typography/Typography";
import { TopBar } from "../topBar/TopBar";
import { type ProjectsProps } from "./ProjectsTypes";

export const Projects = ({ title }: ProjectsProps) => {
  return (
    <>
      <TopBar name="Łukasz Kowalczyk" />
      <div className="px-5">
        <PointerWithText
          pointerColor="blue"
          text="PROJECTS"
          fontType="subheader"
          textColor="blue"
        />
        <Typography
          textColor="blue"
          fontType="body"
          text="Niektóre projekty, w których brałem udział"
        />
      </div>
      {/* TODO: Create ProjectCard component */}
      <p> Here's a place for project Card</p>
    </>
  );
};
