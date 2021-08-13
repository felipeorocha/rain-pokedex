import styled from 'styled-components';

export const Header = styled.div`
    background: #3b4cce;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 24px;
    padding: 10px 32px;
    color: #fff;

    img {
      width: 70px;
      margin-right: 18px;
    }
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const StaredContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 180px;
`;

export const Star = styled.div`
  display: flex;
  align-items: center;
  padding: 16px;
  cursor: pointer;
  border-radius: 50%;
  box-shadow: rgb(0 0 0 / 35%) 0px 5px 15px;

  &:hover {
    box-shadow: rgb(0 0 0 / 60%) 0px 5px 20px;
    transition: 0.2s;
  }
`;
