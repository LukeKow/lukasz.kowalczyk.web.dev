import { Menu } from "./components/menu/Menu";
import { NameAtTopBar } from "./components/nameAtTopBar/NameAtTopBar";
import { type TopBarProps } from "./TopBarTypes";

export const TopBar = ({ name }: TopBarProps) => {
	return (
		<div className="h-20 flex w-full justify-between items-center">
			<div className="flex gap-2.5">
				<NameAtTopBar name={name} />
			</div>
			<Menu />
		</div>
	);
}
