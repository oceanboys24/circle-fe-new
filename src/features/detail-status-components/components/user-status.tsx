import {Flex, Image, Text} from "@chakra-ui/react";
import {Avatar} from "@/components/ui/avatar.tsx";

export default function UserStatus() {
    return (
        <Flex p="5" borderBottomWidth="2px">
            <Avatar src="./public/tyler.png" size="xl"/>
            <Flex direction="column" pl="3" gap="3">
                <Flex textStyle="md" direction="row" gap="3">
                    <Text as="span" color="white">Drs. Fuad</Text>
                    <Text as="span" color="gray.400">@jomok689</Text>
                    <Text as="span" color="gray.400">• 6h</Text>
                </Flex>
                <Text>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                    has been the industry's standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a type specimen book. It has
                    survived not only five centuries, but also the leap into electronic
                </Text>
                <Flex gap="1">
                    <Text color="gray.400">11:40PM</Text>
                    <Text as="span" color="gray.400">•</Text>
                    <Text color="gray.400">Jul 26,2015</Text>
                </Flex>
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
    )
}