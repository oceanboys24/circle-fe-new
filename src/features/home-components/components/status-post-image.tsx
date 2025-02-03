import {Flex, Image, Text} from "@chakra-ui/react";
import {Avatar} from "@/components/ui/avatar.tsx";

export default function StatusPostImage() {
    return (
        <Flex direction="column" p="4" gap="3" borderBottomWidth="2px">
            <Flex>
                <Avatar src="./src/assets/avatar2.svg" size="xl"/>
                <Flex direction="column" pl="3" gap="3">
                    <Flex textStyle="md" direction="row" gap="3">
                        <Text as="span" color="white">Lamar Jackson</Text>
                        <Text as="span" color="gray.400"> @jacky69 </Text>
                        <Text as="span" color="gray.400">• 6h</Text>
                    </Flex>
                    <Text>
                        Game Day Chiefs vs Ravens
                    </Text>
                    <Image src="./src/assets/dummy.png" rounded="lg" fit="contain"/>
                    <Flex direction="row" gap="5">
                        <Flex gap="1" alignItems="center">
                            <Image src="./src/assets/heart.svg" w="30px"/>
                            <Text>46 Likes</Text>
                        </Flex>
                        <Flex gap="1" alignItems="center">
                            <Image src="./src/assets/message-text.svg" w="30px"/>
                            <Text>212 Replies</Text>
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    )
}