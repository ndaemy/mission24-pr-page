import { Center, Heading } from "@chakra-ui/react";
import type { NextPage } from "next";
import Header from "~components/Header";

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Center bg="tomato" h="100px" color="white">
        <Heading>Hello</Heading>
      </Center>
    </>
  );
};

export default Home;
