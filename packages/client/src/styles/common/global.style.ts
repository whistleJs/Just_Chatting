import { css } from "@emotion/react";

import { ThemeColors } from "./theme.style";

export const GlobalStyles = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Spoqa Han Sans Neo";
    text-decoration: none;
    outline: none;
  }

  button,
  input {
    background-color: white;
    transition: 0.1s background-color;

    &:focus {
      background-color: #f6f6f6;
    }
  }

  ::placeholder {
    color: #cccccc;
  }

  html,
  body {
    width: 100vw;
    height: 100vh;
    background-color: ${ThemeColors.main.default};
    overflow: hidden;
  }

  ::selection {
    background-color: ${ThemeColors.main.active};
    color: white;
  }
`;
