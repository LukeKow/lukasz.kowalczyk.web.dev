import { PointerWithText } from "../shared/pointerWithText/PointerWithText";
import { Typography } from "../shared/typography/Typography";
import { TopBar } from "../topBar/TopBar";
import { Card } from "./components/card/Card";
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
      <Card
        projectTitle={"Dummy title"}
        projectDesc={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        }
        theme={"pink"}
        role={"Web developer"}
      />
    </>
  );
};
