import { css } from "@emotion/react";
import localFont from "@next/font/local";

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
  }

  html,
  body {
    width: 100vw;
    height: 100vh;
    overflow: hidden;
  }
`;
