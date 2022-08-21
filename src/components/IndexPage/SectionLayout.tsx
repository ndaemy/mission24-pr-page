import { Flex } from "@chakra-ui/react";
import type { FC, ReactNode } from "react";

type SectionLayoutProps = {
  gap: string | number;
  id: string;
  children: ReactNode;
};

const SectionLayout: FC<SectionLayoutProps> = ({ gap, id, children }) => {
  return (
    <Flex
      id={id}
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
      gap={gap}
      textAlign="center"
    >
      {children}
    </Flex>
  );
};

export default SectionLayout;
