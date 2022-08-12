import { extendTheme, type ChakraTheme, type ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const styles: ChakraTheme["styles"] = {
  global: {
    body: {
      backgroundColor: "black",
    },
  },
};

const theme = extendTheme({ config, styles });

export default theme;
