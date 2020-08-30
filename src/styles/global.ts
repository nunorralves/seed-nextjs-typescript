import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

*,
::after,
::before{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font: 400 16px Roboto, sans-serif;
}

button, input, select, textarea{
  font: 400 16px Roboto, sans-serif;
}

body {
  background-color: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.text};
}

a {
  color: ${props => props.theme.colors.linkColor};
}

`;
