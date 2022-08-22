import { Box, Button, Heading, useMediaQuery } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { type FC, useState } from "react";

import AuditModal from "~/components/Modals/AuditModal";
import Letter from "~/images/letter.svg";
import Logo from "~/images/logo_w.svg";

import SectionLayout from "./SectionLayout";

const StartSection: FC = () => {
  const [isAuditModalOpen, setIsAuditModalOpen] = useState(false);
  const [isLargerThan1024] = useMediaQuery("(min-width: 1024px)");

  const router = useRouter();

  const onClickAcceptButton = () => {
    router.replace("/#information");
  };

  const onClickAudit = () => {
    setIsAuditModalOpen(true);
  };

  const onCloseAuditModal = () => {
    setIsAuditModalOpen(false);
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
      <Letter width="240px" />
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
        onClick={onClickAcceptButton}
      >
        초대 수락
      </Button>
      {!isLargerThan1024 && (
        <Box>
          <Button bgColor="rgba(249, 226, 185, 0.65)" onClick={onClickAudit}>
            👥 MISSION 24 현장 참여하기
          </Button>
        </Box>
      )}
      {isAuditModalOpen && <AuditModal onClose={onCloseAuditModal} />}
    </SectionLayout>
  );
};

export default StartSection;
