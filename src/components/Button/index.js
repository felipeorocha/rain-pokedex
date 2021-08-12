import { ButtonContainer } from './styles';

const Button = ({ children, className, onClick, id, primary }) => {
  return (
    <ButtonContainer>
      <button className={className} id={id} primary={primary} onClick={() => onClick && onClick()}>{children}</button>
    </ButtonContainer>
  );
}

export default Button;
