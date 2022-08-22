import { Button, VStack } from "@chakra-ui/react";
import { type FC, useState } from "react";
import { toast } from "react-toastify";

import AuditModal from "~/components/Modals/AuditModal";

const ResponsiveButtons: FC = () => {
  const [isAuditModalOpen, setIsAuditModalOpen] = useState(false);

  const onClickAuditButton = () => {
    setIsAuditModalOpen(true);
  };

  const onClickCheerUpButton = () => {
    toast.warn("아직 준비중인 기능이에요.. 😭");
  };

  const onCloseAuditModal = () => {
    setIsAuditModalOpen(false);
  };

  return (
    <>
      <VStack>
        <Button w="240px" bgColor="rgba(249, 226, 185, 0.65)" onClick={onClickAuditButton}>
          👥 MISSION 24 현장 참여하기
        </Button>
        <Button w="240px" bgColor="rgba(249, 226, 185, 0.65)" onClick={onClickCheerUpButton}>
          💌 MISSION 24 응원하기
        </Button>
      </VStack>
      {isAuditModalOpen && <AuditModal onClose={onCloseAuditModal} />}
    </>
  );
};

export default ResponsiveButtons;
