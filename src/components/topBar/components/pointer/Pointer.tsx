import { pointerColorMap, type PointerProps } from "./PointerTypes";

export const Pointer = (props: PointerProps) => {
  return (
    <>
      {props.variant === "animated" ? (
        <div
          className={`${pointerColorMap[props.color]} h-[5px] duration-500 transition-all ease-in-out`}
        />
      ) : (
        <div
          className={`${pointerColorMap[props.color]}`}
          style={{
            width: props.size,
            height: props.size,
          }}
        />
      )}
    </>
  );
};
