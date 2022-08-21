import { Heading } from "@chakra-ui/react";
import type { FC, ReactNode } from "react";

type SubTitleProps = {
  children: ReactNode;
};

const SubTitle: FC<SubTitleProps> = ({ children }) => {
  return (
    <Heading as="h3" size="xl" lineHeight="2em">
      {children}
    </Heading>
  );
};

export default SubTitle;
