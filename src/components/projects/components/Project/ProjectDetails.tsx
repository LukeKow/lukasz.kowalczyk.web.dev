import { PointerWithText } from "../../../shared/pointerWithText/PointerWithText";
import {
  projectThemeColorMap,
  type ProjectDetailsProps,
} from "./ProjectDetailsTypes";
import { Typography } from "../../../shared/typography/Typography";
import { Separator } from "../../../shared/separator/Separator";
import type { PointerColor } from "../../../topBar/components/pointer/PointerTypes";
import { TopBar } from "../../../topBar/TopBar";
import { useLocation } from "react-router";

export const ProjectDetails = () => {
  const { title, description, role, theme, imgSrc, tools, whatIWasDoing } =
    useLocation().state.projectDetails as ProjectDetailsProps;

  const cardTheme = projectThemeColorMap[theme];
  return (
    <>
      <TopBar color={cardTheme.topBarTheme} />
      <div className="w-full flex justify-center pb-20 mt-20">
        <div
          className={`${cardTheme.background} w-full md:max-w-[706px] shadow-md`}
        >
          <div className="flex flex-col gap-5 pt-5 pb-10">
            <div className="flex flex-col gap-0 pl-2.5 md:px-5">
              <PointerWithText
                pointerSize="10px"
                pointerColor="custom"
                pointerCustomStyle={cardTheme.accent}
                text={title}
                fontType="subheader"
                textCustomStyle={`${cardTheme.text} text-[20px]/[30px] w-fit md:text-[24px]/[36px]`}
              />
              <Typography
                text={role}
                fontType="sideNote"
                textCustomStyle={`${cardTheme.text}`}
              />
            </div>
            <div className="mt-5 mb-10">
              <img src={imgSrc} />
            </div>
            <div className="flex flex-col gap-5 pt-5 px-5 pb-5">
              <Typography
                text="Opis projektu"
                fontType="subheader"
                textCustomStyle={`${cardTheme.text}`}
              />
              <Typography
                text={description}
                fontType="body"
                textCustomStyle={`${cardTheme.text}`}
              />
              <Separator
                color={cardTheme.separator as PointerColor}
                separatorCustomStyle="my-5"
              />
              <Typography
                text="Czym się zajmowałem"
                fontType="subheader"
                textCustomStyle={`${cardTheme.text}`}
              />
              <Typography
                text={whatIWasDoing}
                fontType="body"
                textCustomStyle={`${cardTheme.text}`}
              />
              <Separator
                color={cardTheme.separator}
                separatorCustomStyle="my-5"
              />
              <Typography
                text="Narzędzia, których używałem"
                fontType="subheader"
                textCustomStyle={`${cardTheme.text}`}
              />
              <div className="pl-5 flex flex-col gap-5">
                {tools.map((tool, index) => (
                  <PointerWithText
                    key={index}
                    pointerSize="10px"
                    pointerColor="custom"
                    pointerCustomStyle={cardTheme.accent}
                    text={tool}
                    fontType="body"
                    textCustomStyle={cardTheme.text}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
