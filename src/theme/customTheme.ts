import { extendTheme, type ChakraTheme, type ThemeConfig } from "@chakra-ui/react";

export const colors = {
  mission24: {
    main: {
      800: "rgba(249, 226, 185, 0.8)",
      solid: "#ddcd8d",
      timelineBg: "rgba(221, 205, 141, 0.8)",
    },
    univ: {
      mju: "#8cc9d7",
      eulji: "#fff598",
      hufs: "#cbacd0",
      erica: "#aed291",
    },
  },
};

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const fonts = {
  body: "'Poppins', sans-serif",
};

const styles: ChakraTheme["styles"] = {
  global: {
    body: {
      backgroundColor: "black",
      fontWeight: "semibold",
    },
  },
};

const theme = extendTheme({ colors, config, fonts, styles });

export default theme;
