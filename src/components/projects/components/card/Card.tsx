import { PointerWithText } from "../../../shared/pointerWithText/PointerWithText";
import { Typography } from "../../../shared/typography/Typography";
import { cardThemeColorMap, type CardProps } from "./CardTypes";
// import detailsIcon from "../../../../assets/icons/square.svg";
import { DetailsIcon } from "../../../shared/icons";

export const Card = ({ projectTitle, projectDesc, role, theme }: CardProps) => {
  const cardTheme = cardThemeColorMap[theme];
  return (
    <div className={`${cardTheme.background} flex flex-col`}>
      <PointerWithText
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
        textCustomStyle={`${cardTheme.text} font-extralight`}
      />
      <Typography
        text={projectDesc}
        fontType="body"
        textColor="custom"
        textCustomStyle={`${cardTheme.text}`}
      />
      <button className="flex justify-end w-full gap-2.5 ">
        Details{" "}
        <DetailsIcon
          size="25"
          color=""
          className="[&>rect]:nth-2:fill-pink-700 stroke-pink-700"
        />
      </button>
    </div>
  );
};
