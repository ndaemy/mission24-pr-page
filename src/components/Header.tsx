import { Button, Flex } from "@chakra-ui/react";
import type { FC } from "react";

import Logo from "~/images/logo_w.svg";

const Header: FC = () => {
  return (
    <Flex
      position="fixed"
      width="100vw"
      height="60px"
      backgroundColor="black"
      px={["24px", "36px"]}
      justifyContent="center"
      zIndex={10}
    >
      <Flex justifyContent="space-between" alignItems="center" maxWidth="1140px" width="100%">
        <Logo height="16px" />
        <Flex gap={["12px", "24px"]}>
          <Button variant="ghost">Start</Button>
          <Button variant="ghost">Information</Button>
          <Button variant="ghost">Ticket</Button>
          <Button variant="ghost">FAQ</Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Header;
