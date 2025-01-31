import {Flex} from "@chakra-ui/react";
import ProfileSidebarRight from "@/features/sidebar-components/right/profile.tsx";
import SuggestionFollow from "@/features/sidebar-components/right/suggestion-follow.tsx";
import Credit from "@/features/sidebar-components/right/credit.tsx";

export default function SidebarRight() {
    return (
        <Flex direction="column" gap="4" height="100vh" width="60vw" bgColor="#1c1d1c" p="10" minW="sm" maxW="xl"
              position="sticky" top={0}>
            <ProfileSidebarRight/>
            <SuggestionFollow/>
            <Credit/>
        </Flex>
    );
}