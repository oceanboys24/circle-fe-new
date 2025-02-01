import {Flex, Heading} from "@chakra-ui/react";
import {Avatar} from "@/components/ui/avatar.tsx";
import UserStatus from "@/features/detail-status-components/components/user-status.tsx";
import InputComment from "@/features/detail-status-components/components/input-comment.tsx";
import Comments from "@/features/detail-status-components/components/comments.tsx";

export default function DetailStatus() {
    return (
        <Flex w="full" direction="column" gap="3">
            <Flex gap="1" p="5">
                <Avatar src="./src/assets/line-arrow-left.svg" size="xs" rounded="lg" bgColor="#09090b"/>
                <Heading fontWeight="bold" fontSize="3xl" color="#d2d2d2">Status</Heading>
            </Flex>
            <UserStatus/>
            <InputComment/>
            <Comments/>
            <Comments/>
            <Comments/>
        </Flex>
    )
}