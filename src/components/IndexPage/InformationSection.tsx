import { Box, Flex, Text, VStack } from "@chakra-ui/react";
import type { FC } from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";

import SubTitle from "~/components/SubTitle";

import SectionLayout from "./SectionLayout";

type TimeBlock = {
  order: number;
  title: string;
  duration: string;
};

const timeline: TimeBlock[] = [
  { order: 1, title: "오프닝 스피치", duration: "19:00 ~ 19:30" },
  { order: 2, title: "네트워킹 타임", duration: "19:30 ~ 20:30" },
  { order: 3, title: "해커톤 주제 발표", duration: "20:30 ~ 21:00" },
  { order: 4, title: "서비스 기획 & 피드백", duration: "21:00 ~ 00:00" },
  { order: 5, title: "야식 시간", duration: "00:00 ~ 01:00" },
  { order: 6, title: "초 집중 개발", duration: "01:00 ~ 09:30" },
  { order: 7, title: "결과물 전시회", duration: "09:30 ~ 11:00" },
];

const InformationSection: FC = () => {
  return (
    <>
      <SectionLayout gap="12px" id="information">
        <SubTitle>경기 남부 연합 해커톤</SubTitle>
        <Text>
          경기권 대학교 4곳에서 모여, 우리만의 해커톤을 만들었습니다.
          <br />
          그 첫번째 행사에 여러분을 초대합니다.
          <br />
          <br />
          2022년 8월 27일 토요일 오후 7시부터 12시까지
          <br />
          MARU180 EVENT HALL
        </Text>
        <Box w="md" maxW="calc(100vw - 48px)" h="sm" borderRadius="md">
          <Map
            center={{ lat: 37.4954178, lng: 127.0388462 }}
            style={{ width: "100%", height: "100%" }}
          >
            <MapMarker position={{ lat: 37.4954178, lng: 127.0388462 }} />
          </Map>
          <Text>서울특별시 강남구 역삼로 180 지하 1층</Text>
        </Box>
      </SectionLayout>
      <SectionLayout gap="12px" id="timeline">
        <SubTitle>TIMELINE</SubTitle>
        <VStack spacing={4} align="flex-start">
          {timeline.map(timeBlock => (
            <Flex
              key={timeBlock.order}
              bgColor="mission24.main.timelineBg"
              p="10px 20px"
              w="calc(100vw - 48px)"
              maxW="440px"
              justifyContent="space-between"
              borderRadius="16px"
            >
              <Text>{timeBlock.title}</Text>
              <Text>{timeBlock.duration}</Text>
            </Flex>
          ))}
          <Text fontSize="xs" w="calc(100vw - 48px)" maxW="440px" textAlign="left">
            * MISSION 24 현장에서는 배포 이전 단계까지만 구현하여 결과물 전시회를 진행할 예정입니다.
          </Text>
        </VStack>
      </SectionLayout>
    </>
  );
};

export default InformationSection;
