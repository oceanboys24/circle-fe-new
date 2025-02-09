import { Flex, GridItem } from "@chakra-ui/react";
import MainMenu from "@/features/home/sidebar/components/left/main-menu.tsx";
import Logout from "@/features/home/sidebar/components/left/logout.tsx";

export default function SidebarLeft() {
  return (
    <GridItem
      colSpan={1}
      gap="4"
      height="100vh"
      position="sticky"
      top={0}
      display={{ base: "none", md: "block" }}
      w={{md: "100%"}}
      
    >
      <Flex direction="column" justify="space-between" h={"full"} p={"5"}>
        {/*Main Menu*/}
        <MainMenu />
        {/*Logout Button*/}
        <Logout />
      </Flex>
    </GridItem>
  );
}
