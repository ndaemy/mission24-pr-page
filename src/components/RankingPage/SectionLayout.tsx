import { Flex } from "@chakra-ui/react";
import type { FC, ReactNode } from "react";

type SectionLayoutProps = {
  gap?: string | number;
  id: string;
  children: ReactNode;
};

const SectionLayout: FC<SectionLayoutProps> = ({ gap = "12px", id, children }) => {
  return (
    <Flex
      id={id}
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      gap={gap}
      textAlign="center"
      py="80px"
      px="24px"
    >
      {children}
    </Flex>
  );
};

export default SectionLayout;
