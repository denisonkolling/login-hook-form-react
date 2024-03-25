export interface IButton {
	type: 'button' | 'submit' | 'reset';
	text: string;
  color?: string;
	disabled: boolean;
	onClick?: () => void;
}