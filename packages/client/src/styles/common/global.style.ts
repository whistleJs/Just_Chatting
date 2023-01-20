import { css } from "@emotion/react";
import localFont from "@next/font/local";

import { ThemeColors } from "./theme.style";

const SpoqaHanSansNeoFont = localFont({
  src: [
    {
      path: './fonts/SpoqaHanSansNeo-Thin.otf',
      weight: '100',
      style: 'thin'
    },
    {
      path: './fonts/SpoqaHanSansNeo-Light.otf',
      weight: '300',
      style: 'light'
    },
    {
      path: './fonts/SpoqaHanSansNeo-Regular.otf',
      weight: '400',
      style: 'normal'
    },
    {
      path: './fonts/SpoqaHanSansNeo-Medium.otf',
      weight: '500',
      style: 'medium'
    },
    {
      path: './fonts/SpoqaHanSansNeo-Bold.otf',
      weight: '700',
      style: 'bold'
    }
  ]
});

export const GlobalStyles = css`
  * {
    ${SpoqaHanSansNeoFont.style}
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
