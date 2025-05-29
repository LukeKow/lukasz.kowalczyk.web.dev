export type SquareProps =
  | {
      color?: string;
      variant: "animated";
    }
  | {
      size: string;
      color?: string;
      variant: "steady";
    };
