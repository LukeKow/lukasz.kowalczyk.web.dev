import { PointerWithText } from "../../../shared/pointerWithText/PointerWithText";
import { Typography } from "../../../shared/typography/Typography";
import { cardThemeColorMap, type CardProps } from "./CardTypes";
import { DetailsIcon } from "../../../shared/icons";

export const Card = ({
  projectTitle,
  projectDesc,
  role,
  color,
  imgSrc,
}: CardProps) => {
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
            text={projectTitle}
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
        <Typography
          text={projectDesc}
          fontType="body"
          textColor="custom"
          textCustomStyle={`${cardTheme.text}`}
        />
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
      </div>
      <div className="mt-5">
        <img src={imgSrc} />
      </div>
    </div>
  );
};
