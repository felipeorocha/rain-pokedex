import { ButtonContainer } from './styles';

const Button = ({ children, onClick, id, navigate }) => {
  return (
    <ButtonContainer>
      <button id={id} navigate={navigate} onClick={() => onClick()}>{children}</button>
    </ButtonContainer>
  );
}

export default Button;
