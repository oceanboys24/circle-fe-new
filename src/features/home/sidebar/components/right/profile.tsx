import {Button, Flex, Heading, Image, Stack, Text} from "@chakra-ui/react";
import {Avatar} from "@/components/ui/avatar.tsx";
import { useLocation } from "react-router-dom";

export default function ProfileSidebarRight() {
    const {pathname} = useLocation()
    return (
         <Stack bgColor="#272726" p="4" rounded="lg" style={{display: pathname === "/profile" ? "none" : "" }}>
            <Heading>My Profile</Heading>
            <Image src="./src/assets/cover.svg" fontSize="40px" rounded="lg"/>
            <Flex justify="space-between" h="100px">
                <Avatar src="./src/assets/avatar.svg" size="4xl"
                        bottom="50px" left="30px"/>
                <Button variant="outline" color="white" borderColor="white" rounded="4xl" flexShrink={0}>Edit
                    Profile</Button>
            </Flex>
            <Stack direction="column" gap="1" p="1" position="relative" mt="-14">
                <Heading>
                    Josh Allen
                </Heading>
                <Text textStyle="md" color="#5a5a5b">@oceanboys24</Text>
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