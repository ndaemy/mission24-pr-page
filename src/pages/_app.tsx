import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import theme from "~theme/customTheme";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
};

export default MyApp;
