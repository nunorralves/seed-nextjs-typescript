import 'styled-components';

interface IColor {
  lighter: string;
  regular: string;
  darker: string;
  hover: string;
}

declare module 'styled-components' {
  export interface DefaultTheme {
    fonts: {
      base: string;
      mono: string;
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
    colors: {
      black: string;
      white: string;
      error: string;
      info: string;
      success: string;
      warning: string;
      background: IColor;
      primary: IColor;
      secondary: IColor;
      tertiary: IColor;
      textPrimary: IColor;
      textSecondary: IColor;
    };
  }
}
