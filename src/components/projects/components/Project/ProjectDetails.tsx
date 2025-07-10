import { PointerWithText } from "../../../shared/pointerWithText/PointerWithText";
import {
  projectThemeColorMap,
  type ProjectDetailsProps,
} from "./ProjectDetailsTypes";
import { Typography } from "../../../shared/typography/Typography";
import { Separator } from "../../../shared/separator/Separator";
import { BottomBar } from "../../../bottomBar/BottomBar";
import { useLocation } from "react-router";

const BASE_URL = import.meta.env.VITE_IMG_BASE_URL;

export const ProjectDetails = () => {
  const {
    title,
    myRoleDescription: description,
    myRoleName: role,
    theme,
    image: imgSrc,
    toolsUsed: tools,
    myRoleDescription: whatIWasDoing,
    imageAuthor,
  } = useLocation().state.projectDetails as ProjectDetailsProps;

  const cardTheme = projectThemeColorMap[theme];

  return (
    <>
      <BottomBar color={cardTheme.topBarTheme} />
      <div className="w-full flex justify-center pb-20">
        <div
          className={`${cardTheme.background} w-full md:max-w-[706px] shadow-md mt-5 md:mt-20`}
        >
          <div className="flex flex-col gap-5 pt-5 pb-10">
            <div className="flex flex-col gap-0 pl-2.5 md:px-5">
              <PointerWithText
                pointerSize="10px"
                pointerColor={theme}
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
              <img src={`${BASE_URL}${imgSrc.url}`} alt={imageAuthor} />
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
              <Separator separatorCustomStyle={`my-5 ${cardTheme.accent}`} />
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
              <Separator separatorCustomStyle={`my-5 ${cardTheme.accent}`} />
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
                    pointerColor={theme}
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
