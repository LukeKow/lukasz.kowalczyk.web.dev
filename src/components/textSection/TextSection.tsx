import { Button } from "../button/Button";
import { type TextSectionProps } from "./TextSectionTypes";

export const TextSection = ({ header, subheader, body }: TextSectionProps) => {
	return (
		<section className="py-10 lg:px-10 max-w-[25%]  lg:bg-white">
			<h2 className="text-[100px]/22 font-bold mb-10">
				{header}
			</h2>
			<div className="hidden lg:flex gap-5 mb-10">
				<Button color="orange" variant="contained" label="RESUME" onClick={() => { }} />
				<Button color="orange" variant="outlined" label="PROJECTS" onClick={() => { }} />
			</div>
			<h4 className="text-[25px] mb-10">
				{subheader}
			</h4>
			<p className="text-[17px] font-light">
				{body}
			</p>
		</section>
	);
}
