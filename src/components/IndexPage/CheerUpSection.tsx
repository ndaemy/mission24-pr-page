import { Box, Text, VStack } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import type { FC } from "react";
import useSWR from "swr";

import SectionLayout from "~/components/IndexPage/SectionLayout";
import SubTitle from "~/components/SubTitle";

type CheerUpMessage = { id: number; attributes: { name: string; message: string } };

const CheerUpSection: FC = () => {
  const [curTopIndex, setCurTopIndex] = useState(0);
  const scrollBoxRef = useRef<HTMLDivElement>(null);

  const { data } = useSWR<{
    data: CheerUpMessage[];
    meta: { pagination: { page: number; pageSize: number; pageCount: number; total: number } };
  }>("/api/cheer-up-messages?sort=id:DESC");

  useEffect(() => {
    let nextTopIndex = -1;

    const id = setInterval(() => {
      if (data && data.meta.pagination.total > 5) {
        nextTopIndex += 1;

        if (nextTopIndex > data.meta.pagination.total - 5) {
          nextTopIndex = 0;
        }

        setCurTopIndex(nextTopIndex);
      }
    }, 3000);

    return () => {
      clearInterval(id);
    };
  }, [data]);

  useEffect(() => {
    if (scrollBoxRef.current) {
      scrollBoxRef.current.scroll({ top: 79 * curTopIndex, behavior: "smooth" });
    }
  }, [curTopIndex]);

  return (
    <SectionLayout gap="12px" id="cheer-up">
      <SubTitle>{data?.meta.pagination.total}명이 응원하고 있어요!</SubTitle>
      <VStack w="calc(100% - 48px)" gap="8px" h="379px" overflow="hidden" ref={scrollBoxRef}>
        {data?.data.map(({ id, attributes: { name, message } }) => (
          <Box
            key={id}
            w="100%"
            bgColor="rgba(217, 217, 217, 0.5)"
            p="18px"
            textAlign="left"
            borderRadius="12px"
          >
            <Text fontSize="lg" noOfLines={1}>
              {`<${name}>`} {message}
            </Text>
          </Box>
        ))}
      </VStack>
    </SectionLayout>
  );
};

export default CheerUpSection;
