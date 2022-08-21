import type { NextPage } from "next";

import Footer from "~/components/Footer";
import Header from "~/components/Header";
import InformationSection from "~/components/IndexPage/InformationSection";
import ShareSection from "~/components/IndexPage/ShareSection";
import SponsorSection from "~/components/IndexPage/SponsorSection";
import StartSection from "~/components/IndexPage/StartSection";

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <StartSection />
      <InformationSection />
      <SponsorSection />
      <ShareSection />
      <Footer />
    </>
  );
};

export default Home;
