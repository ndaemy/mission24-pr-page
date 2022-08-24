import { Box, Button, HStack, Input, Text, useMediaQuery, VStack } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { useEffect, useRef, useState } from "react";
import type { FC } from "react";
import { type SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";

import axios from "~/api/axios";
import SectionLayout from "~/components/IndexPage/SectionLayout";
import SubTitle from "~/components/SubTitle";
import BlackTicket from "~/components/styledSvgs/BlankTicket";
import { type Slug, univInfo } from "~/constants";
import Logo from "~/images/logo_w.svg";
import { colors } from "~/theme/customTheme";
import { createImageBlobFromRef, downloadImgFromBlob, getUnivSlug } from "~/utils";

const Animation = styled.div`
  position: relative;

  .disappear {
    transition: opacity 1s;
    opacity: 0;
  }

  .ticket {
    position: absolute;
    top: 0;
    left: 0;
    transition: opacity 1s;
    transition-delay: 0.5s;
    opacity: 0;
  }

  .appear {
    opacity: 1;
  }
`;

const UnivTickets = styled(HStack)`
  .transparent {
    transition: opacity 1s;
    opacity: 0.5;
  }

  .disapper {
    transition: opacity 1s;
    opacity: 0;
  }
`;

type FieldValues = {
  name: string;
  email: string;
};

const TicketSection: FC = () => {
  const [disappear, setDisappear] = useState(false);
  const [removed, setRemoved] = useState(false);
  const [participantName, setParticipantName] = useState("");
  const [participantUnivName, setParticipantUnivName] = useState("");
  const [participantUnivSlug, setParticipantUnivSlug] = useState<Slug>("mju");
  const ticketImgRef = useRef<HTMLDivElement>(null);

  const { register, handleSubmit } = useForm<FieldValues>();
  const [isLargerThan656] = useMediaQuery("(min-width: 656px)");

  useEffect(() => {
    let id: NodeJS.Timeout;
    if (disappear) {
      id = setTimeout(() => {
        setRemoved(true);
      }, 1000);
    }
    return () => {
      clearTimeout(id);
    };
  });

  const onSubmit: SubmitHandler<FieldValues> = async data => {
    try {
      const res = await axios.get(
        `/api/participants?filter[name][$eq]=${data.name}&filters[email][$eq]=${data.email}`,
      );
      if (!res.data.data.length) {
        toast.warn("해당 이름과 이메일 조합을 가지는 참가자를 찾지 못했습니다. 다시 시도해주세요.");
        return;
      }
      console.log(res.data.data[0]);
      setParticipantName(res.data.data[0].attributes.name);
      setParticipantUnivName(res.data.data[0].attributes.univ);
      setParticipantUnivSlug(getUnivSlug(res.data.data[0].attributes.univ));
      setDisappear(true);
    } catch (e) {
      console.error(e);
      toast.error("응답이 정상적이지 않습니다.");
    }
  };

  const onClickDownloadTicket = async () => {
    const image = await createImageBlobFromRef(ticketImgRef);
    downloadImgFromBlob(image, "ticket.png");
  };

  return (
    <SectionLayout gap="12px" id="ticket">
      <Animation>
        <div className={disappear ? "ticket appear" : "ticket"}>
          <HStack w="calc(100vw - 48px)" maxW="340px" justifyContent="space-between">
            <Box bgColor="black" position="relative" ref={ticketImgRef}>
              <BlackTicket color={colors.mission24.univ[participantUnivSlug]} />
              <Box
                position="absolute"
                top="0"
                left="0"
                right="0"
                style={{ whiteSpace: "pre-line" }}
              >
                <Box w="80px" mx="auto" mt="28px">
                  <Logo />
                </Box>
                <Text fontSize="12px" mt="8px">
                  {participantName}
                </Text>
                <Text fontSize="10px">{participantUnivName}</Text>
              </Box>
              <Box position="absolute" bottom="8px" right="12px">
                <Text fontSize="8px">멋쟁이사자처럼</Text>
              </Box>
            </Box>
            <VStack>
              <Text>{participantName}님, 안녕하세요.</Text>
              <Text>함께해서 영광이에요.</Text>
              <Button
                background="mission24.main.800"
                variant="solid"
                p="8px 22px"
                borderRadius="50px"
                onClick={onClickDownloadTicket}
              >
                저장하기
              </Button>
            </VStack>
          </HStack>
        </div>
        {!removed ? (
          <div className={disappear ? "disappear" : undefined}>
            <SubTitle>Ticket 발급하기</SubTitle>
            <Text mb="12px">등록한 정보를 입력하세요.</Text>
            <form onSubmit={handleSubmit(onSubmit)}>
              <VStack spacing={4} w="calc(100vw - 48px)" maxW="340px">
                <Input placeholder="이름" {...register("name", { required: true })} />
                <Input placeholder="이메일" {...register("email", { required: true })} />
                <Button
                  type="submit"
                  background="mission24.main.800"
                  variant="solid"
                  p="8px 22px"
                  borderRadius="50px"
                >
                  발급하기
                </Button>
              </VStack>
            </form>
          </div>
        ) : (
          <Box w="calc(100vw - 48px)" maxW="340px" h="260px" />
        )}
      </Animation>
      <UnivTickets
        spacing={4}
        mt="24px"
        px="24px"
        width={isLargerThan656 ? "auto" : "100vw"}
        overflow="scroll"
      >
        {univInfo.map(({ slug, univName }) => (
          <Box
            key={slug}
            className={
              // eslint-disable-next-line no-nested-ternary
              disappear ? (participantUnivSlug === slug ? "disapper" : "transparent") : undefined
            }
            position="relative"
          >
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
      </UnivTickets>
    </SectionLayout>
  );
};

export default TicketSection;
