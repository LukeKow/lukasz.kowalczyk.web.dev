import { Square } from "../square/Square";
import { type MenuProps } from "./MenuTypes";

export const Menu = ({ color, onClick }: MenuProps) => {
	return (
		<button
			className={`
				py-5 px-5 w-[45px] h-fit flex items-center flex-col gap-[5px] 
				[&>div]:w-[5px] duration-500 transition-all ease-in-out
				hover:w-[65px] hover:cursor-pointer hover:bg-orange-100
				hover:[&>div]:w-full hover:[&>div]:nth-1:self-start 
				hover:[&>div]:nth-2:self-center hover:[&>div]:nth-3:self-end`
			}
			onClick={onClick}>
			<Square variant="animated" color={color} />
			<Square variant="animated" color={color} />
			<Square variant="animated" color={color} />
		</button>
	);
}
