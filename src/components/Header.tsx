import { Button, Flex } from "@chakra-ui/react";
import { useRouter } from "next/router";
import type { FC } from "react";

import Logo from "~/images/logo_w.svg";

export const headerHeight = "60px";

const Header: FC = () => {
  const router = useRouter();

  const onClickSectionButton = (section: string) => () => {
    router.replace(`/#${section}`);
  };

  return (
    <Flex
      position="fixed"
      width="100vw"
      height={headerHeight}
      backgroundColor="black"
      px={["24px", "36px"]}
      justifyContent="center"
      zIndex={10}
    >
      <Flex justifyContent="space-between" alignItems="center" maxWidth="1140px" width="100%">
        <Logo height="16px" />
        <Flex gap={["12px", "24px"]}>
          <Button variant="ghost" onClick={onClickSectionButton("start")}>
            Start
          </Button>
          <Button variant="ghost" onClick={onClickSectionButton("information")}>
            Information
          </Button>
          <Button variant="ghost" onClick={onClickSectionButton("ticket")}>
            Ticket
          </Button>
          <Button variant="ghost" onClick={onClickSectionButton("faq")}>
            FAQ
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Header;
