import { type SquareProps } from "./SquareTypes";

export const Square = (props: SquareProps) => {
  return (
    <>
      {props.variant === "animated" ? (
        <div
          className={`h-[5px] duration-500 transition-all ease-in-out`}
          style={{ backgroundColor: props.color || "#FFB738" }}
        />
      ) : (
        <div
          style={{
            backgroundColor: props.color || "#FFB738",
            width: props.size,
            height: props.size,
          }}
        />
      )}
    </>
  );
};
