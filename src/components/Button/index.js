import { ButtonContainer } from './styles';

const Button = ({ children, onClick }) => {
  return (
    <ButtonContainer>
      <button onClick={() => onClick()}>{children}</button>
    </ButtonContainer>
  );
}

export default Button;
