import baseTheme from './base';

const darkTheme = {
  ...baseTheme,
  colors: {
    ...baseTheme.colors,
    background: {
      lighter: '#292929',
      regular: '#202020',
      darker: '#121212',
      hover: '#5C5C5C'
    }
  }
};

export default darkTheme;
