import { Flex } from "@chakra-ui/react";
import type { FC, ReactNode } from "react";

import { footerHeight } from "~/components/Footer";

type SectionLayoutProps = {
  gap: string | number;
  id: string;
  lastSection?: boolean;
  children: ReactNode;
};

const SectionLayout: FC<SectionLayoutProps> = ({ gap, id, lastSection = false, children }) => {
  return (
    <Flex
      id={id}
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height={lastSection ? `calc(100vh - ${footerHeight})` : "100vh"}
      gap={gap}
      textAlign="center"
      px="24px"
    >
      {children}
    </Flex>
  );
};

export default SectionLayout;
