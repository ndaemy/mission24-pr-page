import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { Slide, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Fonts from "~/theme/Fonts";
import theme from "~/theme/customTheme";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Fonts />
      <Component {...pageProps} />
      <ToastContainer
        position="bottom-center"
        autoClose={3000}
        hideProgressBar
        newestOnTop
        closeOnClick
        theme="dark"
        transition={Slide}
      />
    </ChakraProvider>
  );
};

export default MyApp;
