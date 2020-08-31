import 'styled-components';

interface IColor {
  lighter: string;
  light: string;
  regular: string;
  dark: string;
  darker: string;
}

declare module 'styled-components' {
  export interface DefaultTheme {
    fonts: {
      body: string;
      heading: string;
      mono: string;
    };
    fontWeights: {
      thin: number;
      light: number;
      normal: number;
      medium: number;
      bold: number;
      black: number;
    };
    borderRadius: {
      sm: string;
      md: string;
      lg: string;
    };
    fontSizes: {
      default: string;
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      xl2: string;
      xl3: string;
      xl4: string;
      xl5: string;
      xl6: string;
    };
    colors: {
      transparent: string;
      black: string;
      white: string;
      error: string;
      info: string;
      success: string;
      warning: string;
      background: IColor;
      text: IColor;
      primary: IColor;
      secondary: IColor;
      tertiary: IColor;
    };
  }
}
