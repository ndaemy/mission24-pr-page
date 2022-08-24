import { Box, Button, Heading, useMediaQuery } from "@chakra-ui/react";
import { useRouter } from "next/router";
import type { FC } from "react";

import ResponsiveButtons from "~/components/IndexPage/ResponsiveButtons";
import Letter from "~/images/letter_white.svg";
import Logo from "~/images/logo_w.svg";

import SectionLayout from "./SectionLayout";

const StartSection: FC = () => {
  const [isLargerThan1024] = useMediaQuery("(min-width: 1024px)");

  const router = useRouter();

  const onClickAcceptButton = () => {
    router.replace("/#information");
  };

  return (
    <SectionLayout gap="12px" id="start">
      <Box height={["24px", "36px", "48px"]} mb="18px">
        <Logo height="100%" />
      </Box>
      <Heading as="h1" size="md" fontWeight="bold" textAlign="center" lineHeight="36px">
        명지대 X 을지대 X 한국외대 글로벌 X 한양대 에리카
        <br />
        연합 해커톤
      </Heading>
      <Heading as="h2" size="md" fontWeight="bold" lineHeight="36px">
      <Box w={["180px", "240px"]}>
        <Letter width="100%" />
      </Box>
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
        onClick={onClickAcceptButton}
      >
        초대 수락
      </Button>
      {!isLargerThan1024 && <ResponsiveButtons />}
    </SectionLayout>
  );
};

export default StartSection;
