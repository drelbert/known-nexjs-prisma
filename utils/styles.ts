import { createGlobalStyle } from "styled-components";

export const theme = {
  colors: {
    white: "F1F2EB",
    grey: "D8DAD3",
    black: "4A4A48",
  },
  font:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
};

export const Styles = createGlobalStyle`
  ${({ theme }) => `
    body {
      text-align: center;
      margin: 0;
      background-color: ${theme.colors.black};
      color: ${theme.colors.white};
      font-family: ${theme.font};
    }
  `}
`;

