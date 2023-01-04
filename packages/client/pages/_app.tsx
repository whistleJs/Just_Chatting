import { Global } from "@emotion/react";
import type { AppProps } from "next/app";

import { GlobalStyles } from "@/styles/global.style";

export default ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Global styles={GlobalStyles} />
      <Component {...pageProps} />
    </>
  );
};
