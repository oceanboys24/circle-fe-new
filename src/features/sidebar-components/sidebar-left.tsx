import {Flex} from "@chakra-ui/react";
import MainMenu from "@/features/sidebar-components/left/main-menu.tsx";
import Logout from "@/features/sidebar-components/left/logout.tsx";
import HeadingSideBarLeft from "@/features/sidebar-components/left/heading.tsx";


export default function SidebarLeft() {
    return (
        <Flex bgColor="#1c1d1c" direction="column" minW="sm" position="sticky" top={0}>
            {/*Title*/}
            <HeadingSideBarLeft/>
            {/*Main Menu*/}
            <MainMenu/>
            {/*Logout Button*/}
            <Logout/>
        </Flex>
    )
}