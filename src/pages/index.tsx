import type { NextPage } from "next";

import CheerUpSection from "~/components/IndexPage/CheerUpSection";
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
      <Shortcut />
      <StartSection />
      <InformationSection />
      <TicketSection />
      <SponsorSection />
      <FAQSection />
      <CheerUpSection />
      <ShareSection />
    </>
  );
};

export default Home;
