import {GridItem, Stack} from "@chakra-ui/react";
import InputPost from "@/features/home/main/components/input-post.tsx";
import StatusPost from "@/features/home/main/components/status-post.tsx";
import HeadingHome from "@/features/home/main/components/heading.tsx";


export default function HomeBar() {
    return (
        <GridItem colSpan={{base: 4, md: 2}} >
            <Stack w="full" overflow="hidden">
                <HeadingHome/>
                <InputPost/>
                <StatusPost/>
            </Stack>
        </GridItem>
    )
}