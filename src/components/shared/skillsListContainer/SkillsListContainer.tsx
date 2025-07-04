import type { PropsWithChildren } from "react";

export const SkillsListContainer = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="pl-5 mt-5 mb-10 flex flex-col gap-5">{children}</div>
    </>
  );
};
