import 'styled-components';

declare module 'styled-components' {
  // export type Theme = typeof theme;

  // // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme {
    colors: {
      background: string;
      backgroundForms: string;
      backgroundInputForms: string;
      text: string;
      linkColor: string;
    };
  }
}
