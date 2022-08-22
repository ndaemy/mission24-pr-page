import { Box, Button, useMediaQuery, VStack } from "@chakra-ui/react";
import { type FC, useState } from "react";
import { toast } from "react-toastify";

import { headerHeight } from "~/components/Header";
import AuditModal from "~/components/Modals/AuditModal";

const Shortcut: FC = () => {
  const [isAuditModalOpen, setIsAuditModalOpen] = useState(false);
  const [isLargerThan1024] = useMediaQuery("(min-width: 1024px)");

  const onClickAuditButton = () => {
    setIsAuditModalOpen(true);
  };

  const onClickCheerUpButton = () => {
    toast.warn("아직 준비중인 기능이에요.. 😭");
  };

  const onCloseAuditModal = () => {
    setIsAuditModalOpen(false);
  };

  return isLargerThan1024 ? (
    <Box position="fixed" top={`calc(${headerHeight} + 48px)`} right="24px">
      <VStack>
        <Button w="240px" bgColor="rgba(249, 226, 185, 0.65)" onClick={onClickAuditButton}>
          👥 MISSION 24 현장 참여하기
        </Button>
        <Button w="240px" bgColor="rgba(249, 226, 185, 0.65)" onClick={onClickCheerUpButton}>
          💌 MISSION 24 응원하기
        </Button>
      </VStack>
      {isAuditModalOpen && <AuditModal onClose={onCloseAuditModal} />}
    </Box>
  ) : null;
};

export default Shortcut;
