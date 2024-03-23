export interface IButton {
	title: string;
	variant: string;
	type: 'button' | 'submit' | 'reset';
	text: string;
	onClick?: () => void;
}
