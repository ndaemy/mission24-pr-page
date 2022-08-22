import { Box, useMediaQuery } from "@chakra-ui/react";
import type { FC } from "react";

import { headerHeight } from "~/components/Header";
import ResponsiveButtons from "~/components/IndexPage/ResponsiveButtons";

const Shortcut: FC = () => {
  const [isLargerThan1024] = useMediaQuery("(min-width: 1024px)");

  return isLargerThan1024 ? (
    <Box position="fixed" top={`calc(${headerHeight} + 48px)`} right="24px">
      <ResponsiveButtons />
    </Box>
  ) : null;
};

export default Shortcut;
