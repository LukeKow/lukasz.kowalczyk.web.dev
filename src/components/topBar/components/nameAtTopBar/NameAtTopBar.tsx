import { Square } from "../square/Square";
import { type NameAtTopBarProps } from "./NameAtTopBarTypes";

export const NameAtTopBar = ({ name }: NameAtTopBarProps) => {
	return (
		<div className="h-10 lg:h-20 flex justify-between">
			<div className="flex gap-2.5 items-center ">
				<Square variant="steady" size="18px" /><span className="lg:text-2xl lg:font-semibold">{name}</span>
			</div>
		</div>
	);
}
