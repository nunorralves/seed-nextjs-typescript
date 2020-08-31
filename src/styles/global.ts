import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

*,
::after,
::before{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  /* font: 400 16px Roboto, sans-serif; */
  font: ${props => props.theme.fontWeights.normal} ${props =>
  props.theme.fontSizes.default}   ${props => props.theme.fonts.base};
}

body {
  font: ${props => props.theme.fontWeights.normal} ${props =>
  props.theme.fontSizes.default} ${props => props.theme.fonts.base};
  background-color: ${props => props.theme.colors.background.darker};
  color: ${props => props.theme.colors.textPrimary.regular}
}

button, input, select, textarea, p{
  font: ${props => props.theme.fontWeights.normal} ${props =>
  props.theme.fontSizes.default} ${props => props.theme.fonts.base};
  color: ${props => props.theme.colors.textPrimary.regular}
}

`;
