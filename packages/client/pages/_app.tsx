import { Global, ThemeProvider } from "@emotion/react";
import type { AppProps } from "next/app";

import { Toast } from "@/components/Toast";

import ThemeOption from "@/styles/common/theme.style";
import { GlobalStyles } from "@/styles/common/global.style";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <ThemeProvider theme={ThemeOption}>
        <Global styles={GlobalStyles} />
        <Component {...pageProps} />

        <Toast />
      </ThemeProvider>
    </>
  );
};

export default App;
