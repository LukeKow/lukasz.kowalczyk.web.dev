import { Typography } from "../shared/typography/Typography";
import { type TextSectionProps } from "./TextSectionTypes";

export const TextSection = ({ header, subheader, body }: TextSectionProps) => {
  return (
    <section className="flex flex-col gap-2.5">
      {header && (
        <Typography
          fontType="header"
          textCustomStyle="text-blue-100"
          text={header}
        />
      )}
      {subheader && (
        <Typography
          fontType="subheader"
          textCustomStyle="text-blue-100"
          text={subheader}
        />
      )}
      {body && (
        <Typography
          fontType="body"
          textCustomStyle="mt-5 text-blue-100"
          text={body}
        />
      )}
    </section>
  );
};
