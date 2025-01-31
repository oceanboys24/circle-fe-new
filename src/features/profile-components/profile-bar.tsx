import {Flex} from "@chakra-ui/react";
import TabsUserProfile from "@/features/profile-components/components/tabs.tsx";
import Profile from "@/features/profile-components/components/profile.tsx";


export default function ProfileBar() {
    return (
        <Flex w="full" direction="column">
            <Profile/>
            <TabsUserProfile/>
        </Flex>
    )
}
