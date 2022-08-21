import { Button, Text } from "@chakra-ui/react";
import { type FC, useState } from "react";

import SectionLayout from "~/components/IndexPage/SectionLayout";
import LinkIcon from "~/images/link.svg";
import Logo from "~/images/logo_w.svg";
import ShareIcon from "~/images/share.svg";

const ShareSection: FC = () => {
  const [showCopied, setShowCopied] = useState(false);
  const [timeoutId, setTimeoutId] = useState<ReturnType<typeof setTimeout>>();

  const onClickShareButton = async () => {
    await navigator.clipboard.writeText(window.location.href);
    setShowCopied(true);
    const id = setTimeout(() => {
      setShowCopied(false);
    }, 3000);
    setTimeoutId(id);
  };

  const onClickMessage = () => {
    clearTimeout(timeoutId);
    setShowCopied(false);
  };

  return (
    <>
      <SectionLayout gap="12px" id="share" lastSection>
        <Text>같이 가고 싶은 친구에게 공유해보세요!</Text>
        <Logo width="240px" />
        <Button
          background="mission24.main.800"
          variant="solid"
          p="8px 22px"
          mt="12px"
          borderRadius="50px"
          rightIcon={<ShareIcon />}
          onClick={onClickShareButton}
        >
          공유하기
        </Button>
      </SectionLayout>
      <Button
        w="240px"
        background="rgba(217, 217, 217, 0.8)"
        color="black"
        borderRadius="20px"
        leftIcon={<LinkIcon />}
        position="fixed"
        left="calc(50vw - 120px)"
        bottom={showCopied ? "20px" : "-40px"}
        transition="all 0.3s ease"
        onClick={onClickMessage}
      >
        링크를 복사했어요!
      </Button>
    </>
  );
};

export default ShareSection;
