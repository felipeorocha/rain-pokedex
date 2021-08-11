import styled from 'styled-components';

export const CardContainer = styled.div`
  background: #fff;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  padding: 30px;
  border-radius: 10px;

  &::before {
    content: '';
  }

  .Card__img {
    text-align: center;    
  }

  .Card__name {
    text-align: center;
    text-transform: capitalize;
    font-weight: 800;
  }
`;

export const CardTypes = styled.div`
  display: flex;
  justify-content: center;

  .Card__type-label {
    background: #3b4ccead;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    border-radius: 5px;
    padding: 8px 12px;
    margin: 10px 10px 10px 0;
    color: #fff;
  }
`;

export const CardInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  margin-top: 18px;

  .Card__data {
    padding-bottom: 10px;
    text-align: center;

    .title {
      font-weight: 700;
      margin-bottom: 8px;
    }
  }
`;
