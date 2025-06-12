import { PointerWithText } from "../../../shared/pointerWithText/PointerWithText";
import {
  projectThemeColorMap,
  type ProjectDetailsProps,
} from "./ProjectDetailsTypes";
import { Typography } from "../../../shared/typography/Typography";
import { Separator } from "../../../shared/separator/Separator";
import type { PointerColor } from "../../../topBar/components/pointer/PointerTypes";
import { TopBar } from "../../../topBar/TopBar";

export const ProjectDetails = ({
  projectTheme,
  title,
  role,
  description,
  theJob,
  tools,
  imgSrc,
}: ProjectDetailsProps) => {
  const cardTheme = projectThemeColorMap[projectTheme];
  return (
    <>
      <TopBar name="Łukasz Kowalczyk" color={cardTheme.separator} />
      <div className="w-full flex justify-center">
        <div
          className={`${cardTheme.background} w-full md:max-w-[706px] shadow-md`}
        >
          <div className="flex flex-col gap-5 pt-5 pb-10">
            <div className="flex flex-col gap-0 px-5">
              <PointerWithText
                pointerSize="10px"
                pointerColor="custom"
                pointerCustomStyle={cardTheme.accent}
                text={title}
                fontType="subheader"
                textColor="custom"
                textCustomStyle={cardTheme.text}
              />
              <Typography
                text={role}
                fontType="sideNote"
                textColor="custom"
                textCustomStyle={`${cardTheme.text}`}
              />
            </div>
            <div className="mt-5 mb-10">
              <img src={imgSrc} />
            </div>
            <div className="flex flex-col gap-5 pt-5 px-5 pb-10">
              <Typography
                text="Project description"
                fontType="subheader"
                textColor="custom"
                textCustomStyle={`${cardTheme.text}`}
              />
              <Typography
                text={description}
                fontType="body"
                textColor="custom"
                textCustomStyle={`${cardTheme.text}`}
              />
              <Separator
                color={cardTheme.separator as PointerColor}
                separatorCustomStyle="my-5"
              />
              <Typography
                text="What I was doing"
                fontType="subheader"
                textColor="custom"
                textCustomStyle={`${cardTheme.text}`}
              />
              <Typography
                text={theJob}
                fontType="body"
                textColor="custom"
                textCustomStyle={`${cardTheme.text}`}
              />
              <Separator
                color={cardTheme.separator}
                separatorCustomStyle="my-5"
              />
              <Typography
                text="Tools I've used"
                fontType="subheader"
                textColor="custom"
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
                    textColor="custom"
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
