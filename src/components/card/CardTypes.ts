export interface CardProps {
	title: string;
	handlePrimaryAction: () => void;
	handleSecondaryAction: () => void;
	igLink?: string;
	igIcon?: string;
	linkedInLink?: string;
	linkedInIcon?: string;
	mailAddress?: string;
	gmailIcon?: string;
	imgSrc?: string;
}