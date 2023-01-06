import { Global, ThemeProvider } from "@emotion/react";
import type { AppProps } from "next/app";

import CommonToast from "@/components/common/common-toast";

import ThemeOption from "@/styles/common/theme.style";
import { GlobalStyles } from "@/styles/common/global.style";

export default ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <ThemeProvider theme={ThemeOption}>
        <Global styles={GlobalStyles} />
        <Component {...pageProps} />

        <CommonToast />
      </ThemeProvider>
    </>
  );
};
