import { Box, Button, Checkbox, HStack, Input, Text, VStack } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { AxiosError } from "axios";
import type { FC } from "react";
import { type SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";

import axios from "~/api/axios";
import Modal from "~/components/Modals/Modal";
import IcClose from "~/images/ic_close.svg";
import Logo from "~/images/logo_w.svg";

import type { ModalProps } from "./types";

const StyledLogo = styled(Logo)`
  height: 24px;

  @media (min-width: 30em) {
    height: 36px;
  }
`;

type Inputs = {
  name: string;
  email: string;
  confirm: boolean;
};

type AuditModalProps = ModalProps;

const AuditModal: FC<AuditModalProps> = ({ onClose }) => {
  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async data => {
    if (!data.confirm) {
      toast.warn("안내사항을 체크하셔야 합니다!");
      return;
    }
    try {
      await axios.post("/api/auditors", { data });
      toast("성공적으로 등록되었습니다.");
      onClose();
    } catch (e) {
      if (e instanceof AxiosError) {
        if (e.response?.data.error.message === "This attribute must be unique") {
          toast.error("이미 등록된 참관자입니다.");
          return;
        }
      }
      toast.error("요청이 정상적으로 마무리되지 않았습니다.");
    }
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
        <VStack alignItems="center" gap="8px">
          <HStack>
            <StyledLogo display="inline" />
            <Text fontSize={["36px", "48px"]} lineHeight={["36px", "48px"]}>
              HERO,
            </Text>
          </HStack>
          <Text fontSize="2xl">경기 남부 연합 해커톤 참관 신청</Text>
          <form onSubmit={handleSubmit(onSubmit)}>
            <VStack spacing={4} w="calc(100vw - 48px)" maxW="340px">
              <Input placeholder="이름" {...register("name", { required: true })} />
              <Input placeholder="이메일" {...register("email", { required: true })} />
              <Checkbox {...register("confirm")}>
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
