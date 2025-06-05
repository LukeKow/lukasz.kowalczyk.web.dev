import { Button } from "../shared/button/Button";
import { type CardProps } from "./CardTypes";

export const Card = ({
  title,
  name,
  imgSrc,
  linkedInLink,
  linkedInIcon,
  igLink,
  igIcon,
  gmailIcon,
  mailAddress,
}: CardProps) => {
  return (
    <div className="w-full lg:w-[25%]">
      <div
        className="py-5 px-5 lg:px-20 flex flex-col 
				h-full items-center gap-5 bg-blue-100 w-full"
      >
        <div
          className={`
					bg-contain 
					w-full min-w-[240px]
					h-full min-h-[240px]
				`}
          style={{ backgroundImage: `url(${imgSrc})` }}
        ></div>
        <div
          className="font-medium tracking-wide text-[21px] lg:text-[30px] 
			 text-center flex flex-col gap-2.5 lg:gap-5 items-center"
        >
          {title}
        </div>
      </div>
      <div className="flex py-5 px-5 gap-10 lg:gap-20 bg-white w-full justify-center [&>a]:rounded-xs [&>a]:p-[5px] [&>a]:hover:bg-blue-100">
        <a href={igLink}>
          <img src={igIcon} />
        </a>
        <a href={linkedInLink}>
          <img src={linkedInIcon} />
        </a>
        <a href={`mailto:${mailAddress}`}>
          <img src={gmailIcon} />
        </a>
      </div>
      <div className="bg-blue-100 pb-10"></div>
    </div>
  );
};
