import { SuggestionFollowLoop } from "@/components/user-profile-other";
import {Flex} from "@chakra-ui/react";

export default function FollowersTabs() {
    return (
        <Flex direction="column" p="4" gap="4">
            <SuggestionFollowLoop/>
        </Flex>
    )
}