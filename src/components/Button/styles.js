import styled from 'styled-components';

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;

  button {
    display: flex;
    align-items: center;
    border-style: none;
    color: #fff;
    font-size: 1em;
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    border-radius: 5px;
    padding: 12px 18px;
    margin: 10px 10px 10px 0;
    background: ${props => props.children.props.navigate ? '#3b4cce' : '#666666d9'};

    &:hover {
      transform: scale(1.05);
      transition: 0.2s;
    }
  }
`;
