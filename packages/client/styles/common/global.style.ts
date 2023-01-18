import { css } from "@emotion/react";
import localFont from "@next/font/local";

import { ThemeColors } from "./theme.style";

const BazziFont = localFont({
  src: "./fonts/Bazzi.woff",
  weight: "400",
});

export const GlobalStyles = css`
  * {
    ${BazziFont.style}
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    outline: none;
  }

  button,
  input {
    border: solid 2px rgba(0, 0, 0, 0);
    transition: 0.1s border;

    &:focus {
      border: solid 2px ${ThemeColors.main.active};
    }
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
