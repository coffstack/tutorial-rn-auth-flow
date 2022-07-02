import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      background: string;
      backgroundSecondary: string;
      onBackground: string;
      primary: string;
    };
    space: {
      default: number;
    };
  }
}
