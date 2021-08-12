import styled from 'styled-components';

export const GridContainer = styled.div`
  width: 60%;
  display: grid;
  margin: 0 auto;
  margin-top: 50px;
  justify-items: center;
  grid-gap: 10px;

  img {
    width: 440px;
  }

  form {
    display: grid;
    grid-gap: 34px;
    width: 100%;
    max-width: 360px;
    margin-top: 24px;
  }
`;

export const ButtonsContainer = styled.div`
  grid-gap: 10px;
  display: grid;
  width: 100%;
  justify-items: center;
  
  button {
    padding: 10px;
    border: none;
    border-radius: 5px;
    max-width: 100px;
    min-width: 86px;
  }

  span {
    font-size: 12px;
  }
`;

export const InputsContainer = styled.div`
  display: grid;
  grid-gap: 10px;

  label {
    display: grid;
    width: 100%;
    grid-gap: 3px;
  }

  input {
    border: none;
    padding: 7px;
    border-radius: 5px;
  }
`;

export const ImageAnimation = styled.img`
  width: 230px !important; /* Don't try this, kids at home :| */

  @-webkit-keyframes rotating /* Safari and Chrome */ {
    from {
      -webkit-transform: rotate(0deg);
      -o-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    to {
      -webkit-transform: rotate(360deg);
      -o-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  @keyframes rotating {
    from {
      -ms-transform: rotate(0deg);
      -moz-transform: rotate(0deg);
      -webkit-transform: rotate(0deg);
      -o-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    to {
      -ms-transform: rotate(360deg);
      -moz-transform: rotate(360deg);
      -webkit-transform: rotate(360deg);
      -o-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  
  -webkit-animation: rotating 2s linear infinite;
  -moz-animation: rotating 2s linear infinite;
  -ms-animation: rotating 2s linear infinite;
  -o-animation: rotating 2s linear infinite;
  animation: rotating 2s linear infinite;
`;