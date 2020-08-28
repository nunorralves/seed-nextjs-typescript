const theme = {
  colors: {
    background: '#121212',
    text: '#e1e1e1',
    linkColor: '#666666'
  }
};

export default theme;

export type Theme = typeof theme;

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends Theme {}
}
