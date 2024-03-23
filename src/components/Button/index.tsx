import { ButtonStyled } from './styles';
import { IButton } from './types'

const Button = ({ text, onClick, type, color, ...props }: IButton) => {
  return (
    <ButtonStyled type={type} onClick={onClick} {...props}>
      {text}
    </ButtonStyled>
  );
};

export default Button;