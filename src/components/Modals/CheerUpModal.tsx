import { Box, Button, HStack, Input, Text, Textarea, VStack } from "@chakra-ui/react";
import styled from "@emotion/styled";
import type { FC } from "react";
import { type SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";

import axios from "~/api/axios";
import Modal from "~/components/Modals/Modal";
import IcClose from "~/images/ic_close.svg";
import Logo from "~/images/logo_w.svg";

import type { ModalProps } from "./types";

const StyledLogo = styled(Logo)`
  height: 14px;

  @media (min-width: 30em) {
    height: 24px;
  }
`;

type Inputs = {
  name: string;
  phone: string;
  message: string;
};

type CheerUpModalProps = ModalProps;

const CheerUpModal: FC<CheerUpModalProps> = ({ onClose }) => {
  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async data => {
    try {
      await axios.post("/api/cheer-up-messages", { data });
      toast("응원해주셔서 감사합니다!");
      onClose();
    } catch (e) {
      console.error(e);
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
            <Text fontSize={["18px", "32px"]} lineHeight={["18px", "32px"]}>
              💌
            </Text>
            <StyledLogo display="inline" />
            <Text fontSize={["18px", "32px"]} lineHeight={["18px", "32px"]}>
              응원하기
            </Text>
          </HStack>
          <Text fontSize="md" textAlign="center">
            아기사자에게 힘을 실어줄 멋쟁이 선배 사자를 구합니다 🤗
            <br />
            <br />
            💸 소정의 후원금 전달은?
            <br />
            우리은행 1002-246-511299 (예금주: 백승찬)
            <br />
            <br />
            ⬇️ 응원 메세지 전달
          </Text>
          <Text color="rgba(113, 128, 150, 0.8)">* 개인정보는 명단 취합 후 폐기될 예정입니다.</Text>
          <form onSubmit={handleSubmit(onSubmit)}>
            <VStack spacing={4} w="calc(100vw - 48px)" maxW="340px">
              <Input placeholder="이름" {...register("name", { required: true })} />
              <Input placeholder="전화번호 (선택)" {...register("phone")} />
              <Textarea
                placeholder="응원의 한마디를 적어주세요!"
                resize="vertical"
                {...register("message", { required: true })}
              />
              <Button
                type="submit"
                background="mission24.main.800"
                variant="solid"
                size="lg"
                p="8px"
                w="140px"
                borderRadius="50px"
              >
                응원해요!
              </Button>
            </VStack>
          </form>
        </VStack>
      </Box>
    </Modal>
  );
};

export default CheerUpModal;
