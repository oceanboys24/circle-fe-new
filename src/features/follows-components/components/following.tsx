import {Flex} from "@chakra-ui/react";
import {Following} from "@/components/user-profile-other.tsx";

export default function FollowingTabs() {
    return (
        <Flex direction="column" p="4" gap="4">
            <Following/>
            <Following/>
            <Following/>
            <Following/>
        </Flex>
    )
}