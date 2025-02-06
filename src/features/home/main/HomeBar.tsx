import {Flex, GridItem, Stack} from "@chakra-ui/react";
import InputPost from "@/features/home/main/components/input-post.tsx";
import StatusPost from "@/features/home/main/components/status-post.tsx";
import StatusPostImage from "@/features/home//main/components/status-post-image.tsx";
import HeadingHome from "@/features/home/main/components/heading.tsx";


export default function HomeBar() {
    return (
        <GridItem colSpan={2}>
            <Stack>
                <HeadingHome/>
                <InputPost/>
                <StatusPost/>
            </Stack>
        </GridItem>
    )
}