import { ButtonStyled } from './styles';
import { IButton } from './types'

const Button = ({ text, onClick, type, ...props }: IButton) => {
  return (
    <ButtonStyled type={type} onClick={onClick} {...props}>
      {text}
    </ButtonStyled>
  );
};

export default Button;