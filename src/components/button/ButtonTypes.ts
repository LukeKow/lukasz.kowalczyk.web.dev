type ButtonColor = 'orange' | 'blue' | 'turquoise';
type ButtonVariant = 'contained' | 'text' | 'outlined';

export interface ButtonProps {
	color: ButtonColor;
	label: string;
	variant: ButtonVariant;
	handleClick: () => void;
}

export const buttonColorMap: Record<ButtonColor, Record<ButtonVariant, string>> = {
	orange: {
		contained: "text-white bg-linear-to-b from-orange-400 to-orange-600",
		text: 'text-orange-500 bg-linear-to-b from-white to-orange-100',
		outlined: 'text-orange-500 bg-linear-to-b from-white to-orange-100 border-orange-500 border'
	},
	blue: { 
		contained: "text-white bg-linear-to-b from-blue-400 to-blue-600",
		text: 'text-blue-500 bg-linear-to-b from-white to-blue-100',
		outlined: 'text-blue-500 bg-linear-to-b from-white to-blue-100 border-blue-500 border'
		
	},
	turquoise: { 
		contained: "text-white bg-linear-to-b from-turquoise-400 to-turquoise-600",
		text: 'text-turquoise-500 bg-linear-to-b from-white to-turquoise-100',
		outlined: 'text-turquoise-500 bg-linear-to-b from-white to-turquoise-100 border-turquoise-500 border'
		
	},
}

