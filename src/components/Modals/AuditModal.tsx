import { Box, Button, Checkbox, HStack, Input, Text, VStack } from "@chakra-ui/react";
import styled from "@emotion/styled";
import type { FC, FormEventHandler } from "react";
import { toast } from "react-toastify";

import Modal from "~/components/Modals/Modal";
import IcClose from "~/images/ic_close.svg";
import Logo from "~/images/logo_w.svg";

const StyledLogo = styled(Logo)`
  height: 24px;

  @media (min-width: 30em) {
    height: 36px;
  }
`;

type AuditModalProps = {
  onClose: () => void;
};

const AuditModal: FC<AuditModalProps> = ({ onClose }) => {
  const onSubmit: FormEventHandler<HTMLFormElement> = e => {
    e.preventDefault();
    toast.warn("준비중입니다.");
  };

  return (
    <Modal>
      <Box
        position="relative"
        w={["100%", "100%", "auto"]}
        bg="black"
        p="48px 60px"
        border="2px solid white"
        borderRadius="16px"
      >
        <IcClose
          style={{ position: "absolute", top: "24px", right: "24px", cursor: "pointer" }}
          onClick={onClose}
        />
        <VStack alignItems="center">
          <HStack>
            <StyledLogo display="inline" />
            <Text fontSize={["36px", "48px"]} lineHeight={["36px", "48px"]}>
              HERO,
            </Text>
          </HStack>
          <Text fontSize="2xl">경기 남부 연합 해커톤</Text>
          <form onSubmit={onSubmit}>
            <VStack spacing={4} w="calc(100vw - 48px)" maxW="340px">
              <Input placeholder="이름" />
              <Input placeholder="이메일" />
              <Checkbox>
                참관 가능 시간은 8월 28일 오전 9시부터 11시입니다. 이 점을 인지하셨나요?
              </Checkbox>
              <Button
                type="submit"
                background="mission24.main.800"
                variant="solid"
                size="lg"
                p="8px"
                w="140px"
                borderRadius="50px"
              >
                신청
              </Button>
            </VStack>
          </form>
        </VStack>
      </Box>
    </Modal>
  );
};

export default AuditModal;
