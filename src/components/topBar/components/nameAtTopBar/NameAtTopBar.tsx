import { Square } from "../square/Square";
import { type NameAtTopBarProps } from "./NameAtTopBarTypes";

export const NameAtTopBar = ({ name }: NameAtTopBarProps) => {
	return (
		<div className="h-20 flex justify-between">
			<div className="flex gap-2.5 items-center ">
				<Square variant="steady" size="18px" /><span>{name}</span>
			</div>
		</div>
	);
}
