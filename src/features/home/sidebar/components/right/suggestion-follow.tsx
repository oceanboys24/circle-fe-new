import {Flex, Heading, Stack} from "@chakra-ui/react";
import {SuggestionFollowLoop} from "@/components/user-profile-other.tsx";

export default function SuggestionFollow() {
    return (
        <Stack bgColor="#272726" rounded="lg" p="3">
            <Heading>Suggestion For You</Heading>
            <Flex direction="column" gap="2">
             <SuggestionFollowLoop/>
            </Flex>
        </Stack>
    )
}