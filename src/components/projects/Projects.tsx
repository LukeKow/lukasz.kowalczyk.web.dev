import { PointerWithText } from "../shared/pointerWithText/PointerWithText";
import { Typography } from "../shared/typography/Typography";
import { BottomBar } from "../bottomBar/BottomBar";
import { Card } from "./components/card/Card";
import { useProjects } from "./useProjects";

export const Projects = () => {
  const { fetching, projects } = useProjects();
  console.log(projects);
  return (
    <>
      <BottomBar color="blue" />
      <div className="flex flex-col gap-10 items-center pb-20 mt-5 md:mt-20">
        <div className="px-5 flex flex-col gap-2.5 w-full max-w-[706px] mx-auto">
          <PointerWithText
            pointerColor="blue"
            text="PROJEKTY"
            fontType="subheader"
          />
          <Typography
            fontType="body"
            text="Niektóre projekty, w których brałem udział:"
          />
        </div>
        <div className="flex flex-col gap-20">
          {fetching === "error" ? (
            <div>
              <p>Ups... nie można w tej chwili pobrać listy projektów.</p>
              <p>Spróbuj ponownie później.</p>
            </div>
          ) : fetching === "fetching" ? (
            <div>
              <p>Trwa pobieranie listy projektów...</p>
            </div>
          ) : fetching === "finished" ? (
            projects.map((project, index) => <Card key={index} {...project} />)
          ) : (
            <div>
              <p>"Wydarzyło się coś nieoczekiwanego..."</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
