import { useContext } from "react";
import { StandardMoodIcon } from "../../../shared/icons/StandardMoodIcon";
import { type ToggleProps } from "./ToggleTypes";
import { NotSoSeriousMood } from "../../../shared/icons/NotSoSeriousMoodIcon";
import { FunContext } from "../../../../funContext";

export const Toggle = ({ onToggle, toggleTheme }: ToggleProps) => {
  const havingFun = useContext(FunContext);

  const handleToggle = () => {
    const updatedFun = !havingFun;
    onToggle(updatedFun);
  };
  return (
    <div className="relative">
      <label
        className={`${toggleTheme.accentBg || toggleTheme.bg} inset-shadow-sm/50 peer relative inline-block w-16 h-8 cursor-pointer rounded-l-full rounded-r-full`}
      >
        <input
          type="checkbox"
          className="opacity-0 w-0 h-0 peer"
          onChange={handleToggle}
        />
        <span className="absolute top-0 left-0 right-0 bottom-0 peer-checked:hidden peer:not-checked:inline duration-500 transition-all ease-in-out">
          <StandardMoodIcon
            className="absolute top-1 left-1  rounded-l-full rounded-r-full shadow-md/50"
            width="24"
            height="24"
          />
        </span>
        <span className="absolute top-0 left-0 right-0 bottom-0 peer-not-checked:hidden peer:checked:inline ">
          <NotSoSeriousMood
            className="absolute top-1 right-1  rounded-l-full rounded-r-full shadow-md/50"
            width="25"
            height="25"
          />
        </span>
      </label>
      <span className="select-none text-blue-900 font-extralight hidden peer-hover:absolute peer-hover:inline -top-6 left-0 whitespace-nowrap">
        Zmień styl
      </span>
    </div>
  );
};
