import { Box, Button, useMediaQuery } from "@chakra-ui/react";
import { type FC, useState } from "react";

import { headerHeight } from "~/components/Header";
import AuditModal from "~/components/Modals/AuditModal";

const Shortcut: FC = () => {
  const [isAuditModalOpen, setIsAuditModalOpen] = useState(false);
  const [isLargerThan1024] = useMediaQuery("(min-width: 1024px)");

  const onClickAudit = () => {
    setIsAuditModalOpen(true);
  };

  const onCloseAuditModal = () => {
    setIsAuditModalOpen(false);
  };

  return isLargerThan1024 ? (
    <Box position="fixed" top={`calc(${headerHeight} + 48px)`} right="24px">
      <Box>
        <Button bgColor="rgba(249, 226, 185, 0.65)" onClick={onClickAudit}>
          👥 MISSION 24 현장 참여하기
        </Button>
      </Box>
      {isAuditModalOpen && <AuditModal onClose={onCloseAuditModal} />}
    </Box>
  ) : null;
};

export default Shortcut;
