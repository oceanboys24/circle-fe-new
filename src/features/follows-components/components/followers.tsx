import {Flex} from "@chakra-ui/react";
import {Followers, Following} from "@/components/user-profile-other.tsx";

export default function FollowersTabs() {
    return (
        <Flex direction="column" p="4" gap="4">
            <Followers/>
            <Following/>
            <Followers/>
            <Following/>
        </Flex>
    )
}