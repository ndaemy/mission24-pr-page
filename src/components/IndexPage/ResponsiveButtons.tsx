import { Button, VStack } from "@chakra-ui/react";
import Link from "next/link";
import { type FC, useState } from "react";

import AuditModal from "~/components/Modals/AuditModal";
import CheerUpModal from "~/components/Modals/CheerUpModal";

const ResponsiveButtons: FC = () => {
  const [isAuditModalOpen, setIsAuditModalOpen] = useState(false);
  const [isCheerUpModalOpen, setIsCheerUpModalOpen] = useState(false);

  const onClickAuditButton = () => {
    setIsAuditModalOpen(true);
  };

  const onClickCheerUpButton = () => {
    setIsCheerUpModalOpen(true);
  };

  const onCloseAuditModal = () => {
    setIsAuditModalOpen(false);
  };

  const onCloseCheerUpModal = () => {
    setIsCheerUpModalOpen(false);
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
        {/* 투표 기간이 끝났으므로 파기 */}
        {/* <Button w="240px" bgColor="rgba(249, 226, 185, 0.65)"> */}
        {/*   <a href="https://mission24.herokuapp.com/" target="_blank" rel="noreferrer"> */}
        {/*     🗳 MISSION 24 투표하기 */}
        {/*   </a> */}
        {/* </Button> */}
        <Button w="240px" bgColor="rgba(249, 226, 185, 0.65)">
          <Link href="/ranking">🏆 MISSION 24 결과 보러가기</Link>
        </Button>
      </VStack>
      {isAuditModalOpen && <AuditModal onClose={onCloseAuditModal} />}
      {isCheerUpModalOpen && <CheerUpModal onClose={onCloseCheerUpModal} />}
    </>
  );
};

export default ResponsiveButtons;
