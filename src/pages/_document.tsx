import { ColorModeScript } from "@chakra-ui/react";
import { Html, Head, Main, NextScript } from "next/document";

import theme from "~/theme/customTheme";

const Document = () => {
  return (
    <Html>
      <Head>
        <script
          type="text/javascript"
          src="//dapi.kakao.com/v2/maps/sdk.js?appkey=e3fb0ce1efdaa74039c9d98cde40856c&libraries=services,clusterer"
        />
        <meta property="og:title" content="Mission24" />
        <meta property="og:description" content="멋쟁이사자처럼 경기남부연합 해커톤" />
        <meta property="og:image" content="/og.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
      </Head>
      <body>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <Main />
        <div id="modal" />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
