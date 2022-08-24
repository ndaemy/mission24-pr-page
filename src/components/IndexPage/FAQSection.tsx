import { Box, Divider, Text } from "@chakra-ui/react";
import type { FC } from "react";
import useSWR from "swr";

import SectionLayout from "~/components/IndexPage/SectionLayout";
import SubTitle from "~/components/SubTitle";

type FAQ = { id: number; attributes: { question: string; answer: string } };

const FAQSection: FC = () => {
  const { data } = useSWR<{
    data: FAQ[];
  }>("/api/faqs");

  return (
    <SectionLayout gap="12px" id="faqs">
      <SubTitle>자주 묻는 질문</SubTitle>
      {data?.data.map(({ id, attributes: faq }) => (
        <div key={id}>
          <Box textAlign="left" mb="12px">
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
              {faq.answer}
            </Text>
          </Box>
          <Divider />
        </div>
      ))}
    </SectionLayout>
  );
};

export default FAQSection;
