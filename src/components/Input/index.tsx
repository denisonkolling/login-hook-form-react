import { InputStyled } from './styles';
import { IInput } from './types';

const Input = ({ type, placeholder, value, onChange }: IInput) => {
	return (
		<InputStyled
			value={value}
			onChange={onChange}
			type={type}
			placeholder={placeholder}
		/>
	);
};

export default Input;
