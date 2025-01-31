import {Flex, Heading, Image, Stack, Text} from "@chakra-ui/react";
import {Avatar} from "@/components/ui/avatar.tsx";
import ModalEdit from "@/features/profile-components/components/modal-edit.tsx";

export default function Profile() {
    return (
        <Stack p="4">
            <Flex gap="1">
                <Avatar src="line-arrow-left.svg" size="xs" rounded="lg" bgColor="#09090b"/>
                <Heading>Profile</Heading>
            </Flex>
            <Image src="./public/cover.svg" fontSize="40px" rounded="lg"/>
            <Flex justify="space-between" h="100px">
                <Avatar src="./public/tyler.png" size="4xl"
                        bottom="50px" left="30px"/>
                <ModalEdit/>
            </Flex>
            <Stack direction="column" gap="1" p="1" position="relative" mt="-14">
                <Heading>
                    Tyler, The Creator
                </Heading>
                <Text textStyle="md" color="#5a5a5b">@tylerokonma</Text>
                <Text>Lorem Ipsum is simply dummy text of the printing and typesetting indusenturies, but also
                    the leap into electronic typesetting
                </Text>
                <Text textStyle="md">
                    <Text as="span" fontWeight="bold" color="white">291</Text>
                    <Text as="span" color="gray.400"> Following </Text>
                    <Text as="span" fontWeight="bold" color="white">400</Text>
                    <Text as="span" color="gray.400"> Followers</Text>
                </Text>
            </Stack>
        </Stack>
    )
}