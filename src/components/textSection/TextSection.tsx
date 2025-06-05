import { Typography } from "../shared/typography/Typography";
import { type TextSectionProps } from "./TextSectionTypes";

export const TextSection = ({ header, subheader, body }: TextSectionProps) => {
  return (
    <section className="flex flex-col gap-2.5 lg:py-10 lg:px-10 lg:max-w-[25%]  lg:bg-white">
      {header && <Typography tType="header" tColor="blue" text={header} />}
      {subheader && (
        <Typography tType="subheader" tColor="blue" text={subheader} />
      )}
      {body && (
        <Typography tType="body" tColor="blue" text={body} cssClass="mt-5" />
      )}
    </section>
  );
};
