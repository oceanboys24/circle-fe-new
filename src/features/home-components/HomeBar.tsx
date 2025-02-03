import {Flex, Stack} from "@chakra-ui/react";
import InputPost from "@/features/home-components/components/input-post.tsx";
import StatusPost from "@/features/home-components/components/status-post.tsx";
import StatusPostImage from "@/features/home-components/components/status-post-image.tsx";
import HeadingHome from "@/features/home-components/components/heading.tsx";


export default function HomeBar() {
    return (
        <Flex direction="column" w="full">
            <Stack>
                <HeadingHome/>
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