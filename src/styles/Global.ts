import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: var(--gray-900);
  color: var(--gray-300);
  -webkit-font-smoothing: antialiased;

  background: ${({ theme }) => theme.colors.primary};
}
`;

export default GlobalStyle;
