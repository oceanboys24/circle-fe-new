import {Flex, Heading, Stack} from "@chakra-ui/react";
import InputPost from "@/features/home-components/components/input-post.tsx";
import StatusPost from "@/features/home-components/components/status-post.tsx";
import StatusPostImage from "@/features/home-components/components/status-post-image.tsx";


export default function HomeBar() {
    return (
        <Flex direction="column" w="full">
            <Stack p="4">
                <Heading fontSize="3xl" color="gray.400">Home</Heading>
                <InputPost/>
                <StatusPost/>
                <StatusPostImage/>
                <StatusPost/>
                <StatusPostImage/>
                <StatusPost/>
            </Stack>
        </Flex>
    )
}