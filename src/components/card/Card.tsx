import { Button } from "../button/Button";
import { type CardProps } from "./CardTypes";

export const Card = ({ title, imgSrc, linkedInLink, linkedInIcon, igLink, igIcon, gmailIcon, mailAddress }: CardProps) => {
	return (
		<div className="py-5 flex flex-col items-center gap-5 bg-orange-100 shadow-md w-fit max-w-[375px] min-w-[280px]">
			<div
				style={{ backgroundImage: `url(${imgSrc})` }}
				className={`border-orange-500 border-2 rounded-full bg-contain w-[120px] h-[120px]`}></div>
			<div className="font-bold text-[21px] max-w-[120px] text-center flex flex-col gap-2.5 items-center">
				{title}
				<div className="h-0.5 bg-orange-500 w-3/4" />
			</div>
			<div className="flex mt-5 mx-5 gap-5 lg:hidden">
				<Button color="orange" variant="contained" label="RESUME" handleClick={() => { }} />
				<Button color="orange" variant="outlined" label="PROJECTS" handleClick={() => { }} />
			</div>
			<div className="flex py-5 gap-5 bg-white w-full justify-center">
				<a href={igLink}>
					<img src={igIcon} />
				</a>
				<a href={linkedInLink}>
					<img src={linkedInIcon} />
				</a>
				<a href={`mailto:${mailAddress}`}>
					<img src={gmailIcon} />
				</a>
			</div>
		</div>
	);
}
