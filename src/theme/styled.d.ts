// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      background: string;
      onBackground: string;
      primary: string;
    };

    spaces: {
      default: number;
    };
  }
}
