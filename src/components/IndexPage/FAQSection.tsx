import { Box, Divider, Text } from "@chakra-ui/react";
import styled from "@emotion/styled";
import type { FC } from "react";
import ReactMarkdown from "react-markdown";
import useSWR from "swr";

import SectionLayout from "~/components/IndexPage/SectionLayout";
import SubTitle from "~/components/SubTitle";

const StyledBox = styled(Box)`
  li {
    list-style-type: none;
  }

  a {
    color: aquamarine;
  }
`;

type FAQ = { id: number; attributes: { question: string; answer: string } };

const FAQSection: FC = () => {
  const { data } = useSWR<{
    data: FAQ[];
  }>("/api/faqs");

  return (
    <SectionLayout gap="12px" id="faqs">
      <SubTitle>자주 묻는 질문</SubTitle>
      <StyledBox textAlign="left" w="100%" maxW="768px">
        {data?.data.map(({ id, attributes: faq }) => (
          <div key={id}>
            <Box my="12px">
              <Text fontSize="lg">Q: {faq.question}</Text>
              <Text
                whiteSpace="pre-line"
                mt="8px"
                ml="12px"
                borderLeft="1px solid gray"
                py="2px"
                pl="8px"
                lineHeight={1.6}
              >
                <ReactMarkdown>{faq.answer}</ReactMarkdown>
              </Text>
            </Box>
            <Divider />
          </div>
        ))}
      </StyledBox>
    </SectionLayout>
  );
};

export default FAQSection;
