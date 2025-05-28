import { Button } from "../button/Button";
import { type CardProps } from "./CardTypes";

export const Card = ({ title, name, imgSrc, linkedInLink, linkedInIcon, igLink, igIcon, gmailIcon, mailAddress }: CardProps) => {
	return (
		<div
			className="bg-orange-100 shadow-md w-full lg:w-[25%]">

			<div className="py-10 px-5 lg:px-20 flex flex-col items-center gap-5 bg-orange-100 shadow-md w-full">
				<div
					className={`
					border-orange-500 border-2 rounded-full bg-contain 
					w-[160px] lg:w-[205px] 
					h-[160px] lg:h-[205px] 
				`}
					style={{ backgroundImage: `url(${imgSrc})` }}
				></div>
				<div className="font-bold tracking-wide text-[21px] lg:text-[30px] max-w-[120px]
			 text-center flex flex-col gap-2.5 lg:gap-5 items-center">
					{name}
					<div className="h-0.5 bg-orange-500 w-3/4" />
				</div>
				<div className="font-light text-[16px] tracking-widest text-center">
					{title.toUpperCase()}
				</div>
				<div className="flex mt-5 mx-5 gap-5 lg:gap-10 lg:hidden">
					<Button color="orange" variant="contained" label="RESUME" onClick={() => { }} />
					<Button color="orange" variant="outlined" label="PROJECTS" onClick={() => { }} />
				</div>
			</div>
			<div className="flex py-5 gap-20 bg-white w-full justify-center">
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
			<div className="bg-orange-100 pb-10">

			</div>
		</div>
	);
}
