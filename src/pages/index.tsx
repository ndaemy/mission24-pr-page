import type { NextPage } from "next";

import Footer from "~/components/Footer";
import Header from "~/components/Header";
import FAQSection from "~/components/IndexPage/FAQSection";
import InformationSection from "~/components/IndexPage/InformationSection";
import ShareSection from "~/components/IndexPage/ShareSection";
import Shortcut from "~/components/IndexPage/Shortcut";
import SponsorSection from "~/components/IndexPage/SponsorSection";
import StartSection from "~/components/IndexPage/StartSection";
import TicketSection from "~/components/IndexPage/TicketSection";

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Shortcut />
      <StartSection />
      <InformationSection />
      <TicketSection />
      <SponsorSection />
      <FAQSection />
      <ShareSection />
      <Footer />
    </>
  );
};

export default Home;
