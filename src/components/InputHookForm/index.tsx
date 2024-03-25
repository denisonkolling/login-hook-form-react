import { InputContainer, IconContainer, InputText, ErrorText } from './styles';
import { Controller } from 'react-hook-form';
import { IInputHookForm } from './types';

const Input = ({ leftIcon, name, control, errorMessage, ...rest }: IInputHookForm) => {
	return (
		<>
		<InputContainer>
			{leftIcon ? <IconContainer>{leftIcon}</IconContainer> : null}
			<Controller
				name={name}
				control={control}
				rules={{ required: true }}
				render={({ field: {value, onChange} }) => <InputText value={value} onChange={onChange} {...rest} />}
			/>
		</InputContainer>
				{errorMessage ? <ErrorText>{errorMessage}</ErrorText> : null}
				</>
			);
		};

export default Input;
