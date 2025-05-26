import { type ButtonProps, buttonColorMap } from "./ButtonTypes";

export const Button = ({ color, handleClick, label, variant }: ButtonProps) => {
	return (
		<button
			className={`${buttonColorMap[color][variant]} shadow-md rounded-xs font-fira-sans
			py-[5px] px-5`}
			onClick={handleClick}
		>
			{label.toUpperCase()}
		</button>
	);
}
