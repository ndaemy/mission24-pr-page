import { extendTheme, type ChakraTheme, type ThemeConfig } from "@chakra-ui/react";

const colors = {
  mission24: {
    main: {
      800: "rgba(249, 226, 185, 0.8)",
      solid: "#ddcd8d",
    },
  },
};

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

const theme = extendTheme({ colors, config, styles });

export default theme;
