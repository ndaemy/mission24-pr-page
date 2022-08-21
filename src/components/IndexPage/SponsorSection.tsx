import { Box, Text } from "@chakra-ui/react";
import type { FC } from "react";

import SectionLayout from "~/components/IndexPage/SectionLayout";
import SubTitle from "~/components/SubTitle";
import DoodlinLogo from "~/images/doodlin_logo.svg";

const SponsorSection: FC = () => {
  return (
    <SectionLayout gap="12px" id="sponsor">
      <SubTitle>함께하는 기업을 소개합니다</SubTitle>
      <Text>Special Thanks to</Text>
      <Box w={["120px", "180px"]}>
        <a href="https://www.doodlin.co.kr/" target="_blank" rel="noreferrer">
          <DoodlinLogo width="100%" />
        </a>
      </Box>
    </SectionLayout>
  );
};

export default SponsorSection;
