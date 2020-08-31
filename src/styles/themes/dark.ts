import baseTheme from './base';

const darkTheme = {
  ...baseTheme,
  colors: {
    ...baseTheme.colors,
    background: {
      lighter: '#e1e1e1',
      light: '#a0a0a0',
      regular: '#292929',
      dark: '#202020',
      darker: '#121212'
    },
    primary: {
      lighter: '#ff6666',
      light: '#ff3333',
      regular: '#ff0000',
      dark: '#cc0000',
      darker: '#990000'
    }
  }
};

export default darkTheme;
