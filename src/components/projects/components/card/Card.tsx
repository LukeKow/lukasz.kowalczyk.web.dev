import { PointerWithText } from "../../../shared/pointerWithText/PointerWithText";
import { Typography } from "../../../shared/typography/Typography";
import { cardThemeColorMap } from "./CardTypes";
import { DetailsIcon } from "../../../shared/icons";
import { Link } from "react-router";
import { type ProjectDetailsProps as ProjectDetailsData } from "../Project/ProjectDetailsTypes";
export const Card = (props: ProjectDetailsData) => {
  const { title, description, role, theme: color, imgSrc } = props;
  const cardTheme = cardThemeColorMap[color];
  return (
    <div
      className={`${cardTheme.background} w-full md:max-w-[706px] shadow-md`}
    >
      <div className="flex flex-col gap-5 pt-5 px-5">
        <div className="flex flex-col gap-0">
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
        <Typography
          text={description}
          fontType="body"
          textCustomStyle={`${cardTheme.text}`}
        />
        <Link
          to={`/projects/${title.toLocaleLowerCase().split(" ").join("-")}`}
          state={{ projectDetails: props }}
        >
          <button
            className="flex justify-end w-full gap-2.5 
					hover:cursor-pointer
					hover:[&>svg]:[&>rect]:nth-2:w-[1px] 
					hover:[&>svg]:[&>rect]:nth-2:h-[1px]
					hover:[&>svg]:[&>rect]:nth-2:translate-[0px]
					"
          >
            <span className="">Details</span>
            <DetailsIcon size="25" color={color} />
          </button>
        </Link>
      </div>
      <div className="mt-5">
        <img src={imgSrc} />
      </div>
    </div>
  );
};
