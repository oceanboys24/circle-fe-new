import { Button, Flex, Float, GridItem, Image } from "@chakra-ui/react";
import MainMenu from "@/features/home/sidebar/components/left/main-menu.tsx";
import Logout from "@/features/home/sidebar/components/left/logout.tsx";
import { useState } from "react";
import { Avatar } from "@/components/ui/avatar";
import OpenArrow from "@/assets/open-arrow.svg";
import CloseArrow from "@/assets/close-arrow.svg";

export default function SidebarLeft() {
  const [isOpen, setIsOpen] = useState<Boolean>(false);

  return (
    <GridItem colSpan={1} gap="4" height="100vh" position="sticky" top={0} display={{base: "none", md: "block"}}>
      <Flex
        w="full"
        direction="column"
        justify="space-between"
        h={"full"}
      
      >
        {/*Main Menu*/}
        <MainMenu />
        {/*Logout Button*/}
        <Logout />
      </Flex>
    </GridItem>
  );
}
