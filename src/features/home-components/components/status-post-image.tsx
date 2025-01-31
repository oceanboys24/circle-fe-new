import {Flex, Image, Text} from "@chakra-ui/react";
import {Avatar} from "@/components/ui/avatar.tsx";

export default function StatusPostImage() {
    return (
        <Flex direction="column" p="4" gap="3" borderBottomWidth="2px">
            <Flex>
                <Avatar src="./public/avatar2.svg" size="xl"/>
                <Flex direction="column" pl="3" gap="3">
                    <Flex textStyle="md" direction="row" gap="3">
                        <Text as="span" color="white">Lamar Jackson</Text>
                        <Text as="span" color="gray.400"> @jacky69 </Text>
                        <Text as="span" color="gray.400">• 6h</Text>
                    </Flex>
                    <Text>
                        Game Day Chiefs vs Ravens
                    </Text>
                    <Image src="./public/dummy.png" rounded="lg" fit="contain"/>
                    <Flex direction="row" gap="5">
                        <Flex gap="1">
                            <Image src="./public/heart.svg"/>
                            <Text>46</Text>
                        </Flex>
                        <Flex gap="1">
                            <Image src="./public/message-text.svg"/>
                            <Text>405 Replies</Text>
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    )
}