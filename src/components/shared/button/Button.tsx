import { type ButtonProps, buttonColorMap } from "./ButtonTypes";

export const Button = ({ color, onClick, label, variant }: ButtonProps) => {
	return (
		<button
			className={`${buttonColorMap[color][variant]} hover:cursor-pointer shadow-md rounded-xs
			py-[5px] px-5`}
			onClick={onClick}
		>
			{label.toUpperCase()}
		</button>
	);
}
