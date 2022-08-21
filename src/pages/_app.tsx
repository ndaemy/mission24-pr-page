import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";

import Fonts from "~/theme/Fonts";
import theme from "~/theme/customTheme";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Fonts />
      <Component {...pageProps} />
    </ChakraProvider>
  );
};

export default MyApp;
