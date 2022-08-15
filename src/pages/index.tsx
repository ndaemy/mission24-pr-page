import type { NextPage } from "next";

import Header from "~/components/Header";
import StartSection from "~/components/IndexPage/StartSection";

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <StartSection />
    </>
  );
};

export default Home;
