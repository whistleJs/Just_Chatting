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

  button:focus,
  input:focus {
    outline: solid ${ThemeColors.main.active};
    outline-width: 2px;
    transition: 0.1s;
  }

  html,
  body {
    width: 100vw;
    height: 100vh;
    overflow: hidden;
  }

  ::selection {
    background-color: ${ThemeColors.main.active};
    color: white;
  }
`;
