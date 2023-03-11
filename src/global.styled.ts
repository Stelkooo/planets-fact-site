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
  background-image: url('assets/background-stars.svg');

  counter-reset: info;
}`;

export default GlobalStyle;
