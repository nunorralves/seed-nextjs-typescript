import { DefaultTheme } from 'styled-components';

const baseTheme: DefaultTheme = {
  fonts: {
    body: 'Roboto, system-ui, sans-serif',
    heading: 'Roboto, system-ui, sans-serif',
    mono: 'monospace'
  },
  fontWeights: {
    thin: 100,
    light: 300,
    normal: 400,
    medium: 600,
    bold: 700,
    black: 900
  },
  borderRadius: {
    sm: '5px',
    md: '8px',
    lg: '10px'
  },
  fontSizes: {
    default: '16px',
    xs: '0.8rem',
    sm: '0.9rem',
    md: '1rem',
    lg: '1.1rem',
    xl: '1.5rem',
    xl2: '2rem',
    xl3: '3rem',
    xl4: '4rem',
    xl5: '5rem',
    xl6: '6rem'
  },
  colors: {
    transparent: 'transparent',
    black: '#000',
    white: '#fff',
    error: '#dc3545',
    info: '#007bff',
    success: '#28a745',
    warning: '#ffc107',
    background: {
      lighter: '#e1e1e1',
      light: '#a0a0a0',
      regular: '#292929',
      dark: '#202020',
      darker: '#121212'
    },
    text: {
      lighter: '#e6e6e6',
      light: '#b3b3b3',
      regular: '#808080',
      dark: '#4d4d4d',
      darker: '#343434'
    },
    primary: {
      lighter: '#e6e6e6',
      light: '#b3b3b3',
      regular: '#808080',
      dark: '#4d4d4d',
      darker: '#1a1a1a'
    },
    secondary: {
      lighter: '#6666ff',
      light: '#3333ff',
      regular: '#0000ff',
      dark: '#0000cc',
      darker: '#000099'
    },
    tertiary: {
      lighter: '#ff6666',
      light: '#ff3333',
      regular: '#ff0000',
      dark: '#cc0000',
      darker: '#990000'
    }
  }
};

export default baseTheme;
