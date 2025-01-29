import {Flex} from "@chakra-ui/react";
import SidebarLeft from "@/components/SidebarLeft/SidebarLeft.tsx";
import SideBarRight from "@/components/SideBarRight/SidebarRight.tsx";
import HomeBar from "@/components/HomeBar/HomeBar.tsx";

export default function LayoutPages() {
    return (
        <Flex height="100vh" width="100vw" bgColor="black">
            <SidebarLeft/>
            <HomeBar/>
            <SideBarRight/>
        </Flex>
    )
}