import styled from 'styled-components';

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px 0;

  .btn--login {
    margin: 0;

    button {
      margin: 0;
    }
  }

  button {
    /* display: flex; */
    display: grid;
    align-items: center;
    border-style: none;
    color: #fff;
    font-size: 1em;
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    border-radius: 5px;
    padding: 12px 18px;
    margin: 10px 10px 10px 0;
    background: ${props => props.children.props.primary ? '#3b4cce' : '#666666d9'};

    &:hover {
      transform: scale(1.05);
      transition: 0.2s;
    }
  }
`;
