import { Box, Button, HStack, Input, Text, useMediaQuery, VStack } from "@chakra-ui/react";
import type { FC } from "react";
import { toast } from "react-toastify";

import SectionLayout from "~/components/IndexPage/SectionLayout";
import SubTitle from "~/components/SubTitle";
import BlackTicket from "~/components/styledSvgs/BlankTicket";
import { univInfo } from "~/constants";
import { colors } from "~/theme/customTheme";

const TicketSection: FC = () => {
  const [isLargerThan656] = useMediaQuery("(min-width: 656px)");

  const onClickIssue = () => {
    toast.warn("준비중입니다.");
  };

  return (
    <SectionLayout gap="12px" id="ticket">
      <SubTitle>Ticket 발급하기</SubTitle>
      <Text mb="12px">등록한 정보를 입력하세요.</Text>
      <VStack spacing={4} w="calc(100vw - 48px)" maxW="340px">
        <Input placeholder="이름" />
        <Input placeholder="이메일" />
        <Button
          background="mission24.main.800"
          variant="solid"
          p="8px 22px"
          borderRadius="50px"
          onClick={onClickIssue}
        >
          발급하기
        </Button>
      </VStack>
      <HStack
        spacing={4}
        mt="24px"
        px="24px"
        width={isLargerThan656 ? "auto" : "100%"}
        overflow="scroll"
      >
        {univInfo.map(({ slug, univName }) => (
          <Box key={slug} position="relative">
            <Text
              as="div"
              position="absolute"
              top="32px"
              left="0"
              right="0"
              style={{ whiteSpace: "pre-line" }}
            >
              {univName.replace(" ", "\n")}
            </Text>
            <BlackTicket color={colors.mission24.univ[slug]} />
          </Box>
        ))}
      </HStack>
    </SectionLayout>
  );
};

export default TicketSection;
