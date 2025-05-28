type ButtonColor = 'orange' | 'blue' | 'turquoise';
type ButtonVariant = 'contained' | 'text' | 'outlined';
export const ButtonVariants = ['contained', 'text', 'outlined'];

export interface ButtonProps {
	color: ButtonColor;
	label: string;
	variant: ButtonVariant;
	onClick: () => void;
}

export const buttonColorMap: Record<ButtonColor, Record<ButtonVariant, string>> = {
	orange: {
		contained: "text-white bg-linear-to-b from-orange-400 to-orange-600 hover:from-orange-500 hover:to-orange-600",
		text: 'text-orange-500 bg-linear-to-b from-white to-orange-100 hover:to-orange-150',
		outlined: 'text-orange-500 bg-linear-to-b from-white to-orange-100 hover:to-orange-150 border-orange-500 border'
	},
	blue: { 
		contained: "text-white bg-linear-to-b from-blue-400 to-blue-600 hover:from-blue-500 hover:to-blue-600",
		text: 'text-blue-500 bg-linear-to-b from-white to-blue-100 hover:to-blue-150',
		outlined: 'text-blue-500 bg-linear-to-b from-white to-blue-100 hover:to-blue-150 border-blue-500 border'
		
	},
	turquoise: { 
		contained: "text-white bg-linear-to-b from-turquoise-400 to-turquoise-600 hover:from-turquoise-500 hover:to-turquoise-600",
		text: 'text-turquoise-500 bg-linear-to-b from-white to-turquoise-100 hover hover:to-turquoise-150',
		outlined: 'text-turquoise-500 bg-linear-to-b from-white to-turquoise-100 hover:to-turquoise-150 border-turquoise-500 border'
		
	},
}

