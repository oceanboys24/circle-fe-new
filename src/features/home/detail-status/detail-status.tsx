import {Flex, GridItem, Heading} from "@chakra-ui/react";
import {Avatar} from "@/components/ui/avatar.tsx";
import UserStatus from "@/features/home/detail-status/components/user-status";
import InputComment from "@/features/home/detail-status/components/input-comment";
import Comments from "@/features/home/detail-status/components/comments";

export default function DetailStatus() {
    return (
            <GridItem colSpan={2}>
            <Flex gap="1" p="5">
                <Avatar src="./src/assets/line-arrow-left.svg" size="xs" rounded="lg" bgColor="#09090b"/>
                <Heading fontWeight="bold" fontSize="3xl" color="#d2d2d2">Status</Heading>
            </Flex>
            <UserStatus/>
            <InputComment/>
            <Comments/>
            <Comments/>
            <Comments/>
        </GridItem>
    )
}