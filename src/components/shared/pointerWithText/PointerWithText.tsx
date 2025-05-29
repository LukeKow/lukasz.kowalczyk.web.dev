import { Square } from "../../topBar/components/square/Square";
import { type PointerWithTextProps } from "./PointerWithTextTypes";

export const PointerWithText = ({ text }: PointerWithTextProps) => {
	return (
		<div className="h-10 lg:h-20 flex justify-between">
			<div className="flex gap-2.5 items-center ">
				<Square variant="steady" size="16px" />
				<span className="text-xl font-semibold font-">{text}</span>
			</div>
		</div>
	);
};
