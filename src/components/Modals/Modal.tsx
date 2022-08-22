import { Box, Flex } from "@chakra-ui/react";
import type { FC, ReactNode } from "react";

import Portal from "./Portal";

type ModalProps = {
  children: ReactNode;
};

const Modal: FC<ModalProps> = ({ children }) => {
  return (
    <Portal selector="#modal">
      <Box position="fixed" top="0" left="0" w="100vw" h="100vh" zIndex="999">
        <Box position="absolute" bg="black" opacity="0.4" w="100%" h="100%" zIndex="50" />
        <Flex
          position="fixed"
          w="100vw"
          h="100vh"
          alignItems="center"
          justifyContent="center"
          zIndex="55"
        >
          {children}
        </Flex>
      </Box>
    </Portal>
  );
};

export default Modal;
