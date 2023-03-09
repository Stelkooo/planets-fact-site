import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
*,
*::after,
*::before {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  font-family: ${({ theme }) => theme.typography.spartan};
  color: ${({ theme }) => theme.colors.white};
}

body {
  background-color: ${({ theme }) => theme.colors.black};
}`;

export default GlobalStyle;
