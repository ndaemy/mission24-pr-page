import { Box, Heading, Image, Text } from "@chakra-ui/react";
import type { FC } from "react";
import ReactMarkdown from "react-markdown";
import useSWR from "swr";

import type { StrapiResponse } from "~/api/responseTypes";
import SectionLayout from "~/components/RankingPage/SectionLayout";
import SubTitle from "~/components/SubTitle";

type Service = {
  id: number;
  attributes: {
    rank: number;
    name: string;
    description: string;
    image_links: string[];
    participants: {
      data: {
        attributes: {
          name: string;
          [key: string]: unknown;
        };
      }[];
    };
  };
};

const rankingTitle = ["대상", "최우수", "우수"];

const RankingLists: FC = () => {
  const { data } = useSWR<StrapiResponse<Service[]>>(
    "/api/services?populate[participants][fields][0]=name&populate[participants][sort][0]=name:asc",
  );

  return (
    <SectionLayout id="ranking" gap="24px">
      <SubTitle>수상 팀 🎉</SubTitle>
      {data?.data.map(service => (
        <Box>
          <Heading as="p" fontSize="20px" lineHeight="32px">
            {rankingTitle[service.attributes.rank - 1]}
          </Heading>
          <Heading as="h3" fontSize="24px">
            {service.attributes.name}
          </Heading>
          <Text fontSize="18px" lineHeight="32px">
            제작자:{" "}
            {service.attributes.participants.data.map(user => user.attributes.name).join(" ")}
          </Text>
          <Image
            src={service.attributes.image_links[0]}
            borderRadius="8px"
            w="calc(100vw - 48px)"
            maxW="480px"
            h="auto"
            my="12px"
          />
          <Text w="calc(100vw - 48px)" maxW="480px">
            <ReactMarkdown linkTarget="_blank">{service.attributes.description}</ReactMarkdown>
          </Text>
        </Box>
      ))}
    </SectionLayout>
  );
};

export default RankingLists;
