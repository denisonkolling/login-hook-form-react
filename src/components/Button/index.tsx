import { ButtonStyled } from './styles';
import { IButton } from './types'

const Button = ({ text, onClick, type, color, disabled, ...props }: IButton) => {
  return (
    <ButtonStyled type={type} onClick={onClick} color={color} disabled={!disabled} {...props}>
      {text}
    </ButtonStyled>
  );
};

export default Button;