import { Box, Button, Flex, Text } from "@chakra-ui/react";
import type { FC } from "react";

const Header: FC = () => {
  return (
    <Flex height="60px" px={["24px", "36px"]} justifyContent="center">
      <Flex justifyContent="space-between" alignItems="center" maxWidth="1140px" width="100%">
        <Box>Logo</Box>
        <Flex gap="24px">
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
