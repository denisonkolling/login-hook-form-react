export interface IButton {
	type: 'button' | 'submit' | 'reset';
	text: string;
  color?: string;
	onClick?: () => void;
}
