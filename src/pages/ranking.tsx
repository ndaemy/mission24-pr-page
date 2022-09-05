import { Box } from "@chakra-ui/react";
import type { NextPage } from "next";

import RankingLists from "~/components/RankingPage/RankingLists";

const Ranking: NextPage = () => {
  return (
    <Box minH="100vh">
      <RankingLists />
    </Box>
  );
};

export default Ranking;
