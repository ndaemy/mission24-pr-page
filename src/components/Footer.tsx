import { Flex, Grid, HStack, Text, VStack } from "@chakra-ui/react";
import type { FC, ReactNode } from "react";

import IcInstagram from "~/components/styledSvgs/IcInstagram";
import { colors } from "~/theme/customTheme";
import type { Slug } from "~/types";

export const footerHeight = "120px";

const people = ["고도희", "박소연", "백승찬", "유예빈", "임연수", "임은영", "정우진", "최준형"];

const instaLinks: { slug: Slug; univ: string; link: string }[] = [
  { slug: "mju", univ: "명지대학교", link: "https://www.instagram.com/mju_likelion/" },
  { slug: "eulji", univ: "을지대학교", link: "https://www.instagram.com/likelion_eulji/" },
  {
    slug: "hufs",
    univ: "한국외국어대학교 글로벌",
    link: "https://www.instagram.com/hufsglobal_likelion/",
  },
  { slug: "erica", univ: "한양대학교 에리카", link: "https://www.instagram.com/likelion_erica/" },
];

type FooterBlockProps = {
  title: string;
  children: ReactNode;
};

const FooterBlock: FC<FooterBlockProps> = ({ title, children }) => {
  return (
    <VStack>
      <Text>{title}</Text>
      {children}
    </VStack>
  );
};

const Footer: FC = () => {
  return (
    <Flex width="100vw" height={footerHeight} px={["24px", "36px"]} justifyContent="center">
      <Flex justifyContent="space-around" alignItems="center" maxWidth="1140px" width="100%">
        <FooterBlock title="People">
          <Grid templateColumns={["repeat(2, 1fr)", "repeat(4, 1fr)"]}>
            {people.map(person => (
              <Text key={person} px="6px">
                {person}
              </Text>
            ))}
          </Grid>
        </FooterBlock>
        <FooterBlock title="Contacts">
          <HStack>
            {instaLinks.map(({ slug, link }) => (
              <a href={link} key={slug} target="_blank" rel="noreferrer">
                <IcInstagram width={24} height={24} color={colors.mission24.univ[slug]} />
              </a>
            ))}
          </HStack>
        </FooterBlock>
      </Flex>
    </Flex>
  );
};

export default Footer;
