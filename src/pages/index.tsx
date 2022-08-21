import type { NextPage } from "next";

import Header from "~/components/Header";
import InformationSection from "~/components/IndexPage/InformationSection";
import StartSection from "~/components/IndexPage/StartSection";

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <StartSection />
      <InformationSection />
    </>
  );
};

export default Home;
