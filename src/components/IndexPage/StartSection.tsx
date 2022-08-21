import { Box, Button, Heading } from "@chakra-ui/react";
import type { FC } from "react";

import Logo from "~/images/logo_w.svg";

import SectionLayout from "./SectionLayout";

const StartSection: FC = () => {
  return (
    <SectionLayout gap="12px" id="start">
      <Box height={["24px", "36px", "48px"]} mb="18px">
        <Logo height="100%" />
      </Box>
      <Heading as="h1" size="md" fontWeight="bold" textAlign="center" lineHeight="36px">
        한국외대 글로벌 X 명지대 X 한양대 에리카 X 을지대
        <br />
        연합 해커톤
      </Heading>
      <img src="https://via.placeholder.com/278x204" alt="letter placeholder" />
      <Heading as="h2" size="md" fontWeight="bold" lineHeight="36px">
        INVITATION LETTER
        <br />
        2022.08.27 MARU180 EVENT HALL
      </Heading>
      <Button
        background="mission24.main.800"
        variant="solid"
        size="lg"
        p="8px 22px"
        borderRadius="50px"
      >
        초대 수락
      </Button>
    </SectionLayout>
  );
};

export default StartSection;