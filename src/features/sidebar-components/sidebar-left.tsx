import {Flex, Heading} from "@chakra-ui/react";
import MainMenu from "@/features/sidebar-components/left/main-menu.tsx";
import Logout from "@/features/sidebar-components/left/logout.tsx";


export default function SidebarLeft() {
    return (
        <Flex bgColor="#1c1d1c" direction="column" minW="sm" position="sticky" top={0}>
            {/*Title*/}
            <Heading size="7xl" color="#04a41f" textAlign="center">circle</Heading>
            {/*Main Menu*/}
            <MainMenu/>
            {/*Logout Button*/}
            <Logout/>
        </Flex>
    )
}