import { Flex, GridItem, Stack } from "@chakra-ui/react";
import MainMenu from "@/features/home/sidebar/components/left/main-menu.tsx";
import Logout from "@/features/home/sidebar/components/left/logout.tsx";

export default function SidebarLeft() {
  return (
    <GridItem
      colSpan={1}
      gap="4"
      height="100vh"
      bgColor="#1c1d1c"
      minW="sm"
      maxW="xl"
      position="sticky"
      top={0}
    >
      <Flex direction="column" justify="space-between" h={"full"}>
        {/*Main Menu*/}
        <MainMenu />
        {/*Logout Button*/}
        <Logout />
      </Flex>
       

    </GridItem>
  );
}
