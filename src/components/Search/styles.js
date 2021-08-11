import styled from 'styled-components';

export const Filter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 40%;
  padding: 12px;
  margin: 0 auto;

  input {
    width: 100%;
    padding: 8px 8px 8px 34px;
    border-radius: 8px;
    border: none;
  }

  .icon-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    height: 0;
    width: 100%;
    padding: 0 22px;

    svg {
      color: #666666d9;

      &:nth-child(2):hover {
        cursor: pointer;
      }
    }
  }
`;
