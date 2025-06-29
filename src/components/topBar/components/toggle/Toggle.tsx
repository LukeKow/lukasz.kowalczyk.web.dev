import { type ToggleProps } from "./ToggleTypes";

export const Toggle = ({ onToggle }: ToggleProps) => {
  return (
    <label className="relative inline-block w-16 h-9">
      <input
        type="checkbox"
        className="opacity-0 w-0 h-0 peer"
        onChange={onToggle}
      />
      <span className="peer-checked:bg-blue-700 peer-focus:shadow-md peer-checked:before:translate-x-6 before:absolute before:content-[''] before:h-6 before:w-6 before:left-1 before:bottom-1 before:bg-white before:duration-500 absolute cursor-pointer top-0 left-0 bottom-0 right-0 bg-blue-300 duration-500"></span>
    </label>
  );
};
