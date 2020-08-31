import { DefaultTheme } from 'styled-components';

const baseTheme: DefaultTheme = {
  fonts: {
    base: 'Roboto, system-ui, sans-serif',
    mono: 'monospace'
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
  colors: {
    black: '#000',
    white: '#fff',
    error: '#dc3545',
    info: '#007bff',
    success: '#28a745',
    warning: '#ffc107',
    background: {
      lighter: '#5C5C5C',
      regular: '#292929',
      darker: '#101010',
      hover: '#5C5C5C'
    },
    primary: {
      lighter: '#B3B3B3',
      regular: '#808080',
      darker: '#4D4D4D',
      hover: '#B3B3B3'
    },
    secondary: {
      lighter: '#3333FF',
      regular: '#0000ff',
      darker: '#0000CC',
      hover: '#3333FF'
    },
    tertiary: {
      lighter: '#FF3333',
      regular: '#ff0000',
      darker: '#CC0000',
      hover: '#FF6666'
    },
    textPrimary: {
      lighter: '#B3B3B3',
      regular: '#808080',
      darker: '#4D4D4D',
      hover: '#B3B3B3'
    },
    textSecondary: {
      lighter: '#B3B3B3',
      regular: '#808080',
      darker: '#4D4D4D',
      hover: '#B3B3B3'
    }
  }
};

export default baseTheme;
