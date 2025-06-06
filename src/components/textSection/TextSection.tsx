import { Typography } from "../shared/typography/Typography";
import { type TextSectionProps } from "./TextSectionTypes";

export const TextSection = ({ header, subheader, body }: TextSectionProps) => {
  return (
    <section className="flex flex-col gap-2.5 lg:py-10 lg:px-10 lg:max-w-[25%]  lg:bg-white">
      {header && (
        <Typography fontType="header" textColor="blue" text={header} />
      )}
      {subheader && (
        <Typography fontType="subheader" textColor="blue" text={subheader} />
      )}
      {body && (
        <Typography
          fontType="body"
          textColor="blue"
          text={body}
          textCustomStyle="mt-5"
        />
      )}
    </section>
  );
};
