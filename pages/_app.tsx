import "@theme/normalize.css";
import "@theme/style.css";
import { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import theme from "@theme/index";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Main Component={Component} pageProps={pageProps} />
    </ThemeProvider>
  );
}

const Main = ({ Component, pageProps }: any) => {
  return <Component {...pageProps} />;
};

export default MyApp;
