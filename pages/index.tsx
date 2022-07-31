import { Center, Heading } from "@chakra-ui/react";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <Center bg="tomato" h="100px" color="white">
      <Heading>Hello</Heading>
    </Center>
  );
};

export default Home;
