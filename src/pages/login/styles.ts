import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.colors.background};
  /* background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(9, 9, 121, 1) 35%,
    rgba(0, 212, 255, 1) 100%
  ); */
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 32px;
  max-width: 480px;
  margin: 0 auto;
  border: 1px solid ${props => props.theme.colors.backgroundForms};
  border-radius: 8px;
  background-color: ${props => props.theme.colors.backgroundForms};

  h1 {
    color: ${props => props.theme.colors.text};
    margin-bottom: 10px;
  }

  input,
  button {
    color: ${props => props.theme.colors.text};
    padding: 10px 10px;
    margin: 10px 0;
    border: 1px solid ${props => props.theme.colors.backgroundInputForms};
    border-radius: 5px;
    background-color: ${props => props.theme.colors.backgroundInputForms};
    outline-width: 0;
  }

  button {
    background-color: blue;
    border: 1px solid blue;
  }
`;
