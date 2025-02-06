import { Flex, GridItem } from "@chakra-ui/react";
import ProfileSidebarRight from "@/features/home/sidebar/components/right/profile";
import SuggestionFollow from "@/features/home/sidebar/components/right/suggestion-follow";
import Credit from "@/features/home/sidebar/components/right/credit";

export default function SidebarRight() {
  return (
    <GridItem
      colSpan={1}
      height="100vh"
      width="60vw"
      bgColor="#1c1d1c"
      p="10"
      maxW="xl"
      position="sticky"
      top={0}
    >
      <Flex gap={"5"} direction="column">
        <ProfileSidebarRight />
        <SuggestionFollow />
        <Credit />
      </Flex>
    </GridItem>
  );
}
