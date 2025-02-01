import {Flex, Image, Text} from "@chakra-ui/react";
import {Avatar} from "@/components/ui/avatar.tsx";

export default function UserPost() {
    return (
        <Flex direction="column" p="4" gap="3" borderBottomWidth="2px">
            <Flex>
                <Avatar src="./src/assets/avatar2.svg" size="xl"/>
                <Flex direction="column" pl="3" gap="3">
                    <Flex textStyle="md" direction="row" gap="3">
                        <Text as="span" color="white">Drs. Roesdi Amba</Text>
                        <Text as="span" color="gray.400"> @oceanboys </Text>
                        <Text as="span" color="gray.400">• 6h</Text>
                    </Flex>
                    <Text>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                        Ipsum
                        has been the industry's standard dummy text ever since the 1500s, when an
                        unknown
                        printer took a galley of type and scrambled it to make a type specimen book. It
                        has
                        survived not only five centuries, but also the leap into electronic
                    </Text>
                    <Flex direction="row" gap="5">
                        <Flex gap="1">
                            <Image src="./src/assets/heart.svg"/>
                            <Text>46</Text>
                        </Flex>
                        <Flex gap="1">
                            <Image src="./src/assets/message-text.svg"/>
                            <Text>405 Replies</Text>
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    )
}