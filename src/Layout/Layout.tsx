import {Box, Flex} from "@chakra-ui/react";
import SidebarLeft from "@/components/SidebarLeft/SidebarLeft.tsx";
import SideBarRight from "@/components/SideBarRight/SidebarRight.tsx";

export default function LayoutPages() {
    return (
        <Flex height="100vh" width="100vw" bgColor="black">
            <SidebarLeft/>
            <Box height="100vh" width="90vw" bgColor="#1c1d1c" borderXWidth="1px" borderColor="#3e3e3f">Item 2</Box>
            <SideBarRight/>
        </Flex>
    )
}