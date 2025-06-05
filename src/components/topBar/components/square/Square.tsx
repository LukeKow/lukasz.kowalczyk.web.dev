import { type SquareProps } from "./SquareTypes";

export const Square = (props: SquareProps) => {
  return (
    <>
      {props.variant === "animated" ? (
        <div
          className={`${props.color} h-[5px] duration-500 transition-all ease-in-out`}
        />
      ) : (
        <div
          className={`${props.color}`}
          style={{
            width: props.size,
            height: props.size,
          }}
        />
      )}
    </>
  );
};
