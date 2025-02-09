import { Flex, GridItem } from "@chakra-ui/react";
import ProfileSidebarRight from "@/features/home/sidebar/components/right/profile.tsx";
import SuggestionFollow from "@/features/home/sidebar/components/right/suggestion-follow.tsx";
import Credit from "@/features/home/sidebar/components/right/credit.tsx";

export default function SidebarRight() {
  return (
    <GridItem
      colSpan={1}
      height="100vh"
      display={{base: "none", md: "block"}}
      maxW="xl"
      position="sticky"
      top={0}
     
    >
      <Flex gap={"5"} direction="column"  p="10" w="full" >
        <ProfileSidebarRight />
        <SuggestionFollow />
        <Credit />
      </Flex>
    </GridItem>
  );
}
