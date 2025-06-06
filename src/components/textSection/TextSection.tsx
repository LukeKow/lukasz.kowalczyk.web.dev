import { Typography } from "../shared/typography/Typography";
import { type TextSectionProps } from "./TextSectionTypes";

export const TextSection = ({ header, subheader, body }: TextSectionProps) => {
  return (
    <section className="flex flex-col gap-2.5">
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
