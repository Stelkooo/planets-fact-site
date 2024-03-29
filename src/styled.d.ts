import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    breakpoints: {
      tablet: string;
      desktop: string;
    };
    colors: {
      white: string;
      black: string;
      grey: string;
      greyishBlue: string;
      teal: string;
      yellow: string;
      purple: string;
      orange: string;
      red: string;
      brown: string;
      green: string;
      blue: string;
    };
    typography: {
      antonio: string;
      spartan: string;
    };
  }
}
