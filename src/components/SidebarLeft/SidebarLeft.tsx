import {Button, Flex, Heading, Icon, Image, Stack, Text} from "@chakra-ui/react";


export default function SidebarLeft() {
    return (
        <Flex width="auto" bgColor="#1c1d1c" direction="column" minW="sm">
            <Heading size="7xl" color="#04a41f" textAlign="center">circle</Heading>
            <Flex direction="column" p="1">
                <Flex direction="column" p="5" px="10" gap="3">
                    <Stack direction="row" _hover={{bg: "#333333", rounded: "lg"}} p="3">
                        <Icon fontSize="45px">
                            <Image src="./public/home.svg" fontSize="40px"/>
                        </Icon>
                        <Text p="1" fontWeight="bold">Home</Text>
                    </Stack>
                    <Stack direction="row" _hover={{bg: "#333333", rounded: "lg"}} p="3">
                        <Icon fontSize="45px">
                            <Image src="./public/user-search.svg" fontSize="40px"/>
                        </Icon>
                        <Text p="1" fontWeight="bold">Search</Text>
                    </Stack>
                    <Stack direction="row" _hover={{bg: "#333333", rounded: "lg"}} p="3">
                        <Icon fontSize="45px">
                            <Image src="./public/love.svg" fontSize="40px"/>
                        </Icon>
                        <Text p="1" fontWeight="bold">Follows</Text>
                    </Stack>
                    <Stack direction="row" _hover={{bg: "#333333", rounded: "lg"}} p="3">
                        <Icon fontSize="45px">
                            <Image src="./public/profile.svg" fontSize="40px"/>
                        </Icon>
                        <Text p="1" fontWeight="bold">Profile</Text>
                    </Stack>
                    <Button type="submit" size="xl" colorPalette="green" rounded="4xl" fontSize='2xl'>Create
                        Post</Button>
                </Flex>
                <Flex direction="column" p="5" px="10" gap="3">
                    <Stack direction="row" _hover={{bg: "#333333", rounded: "lg"}} p="3">
                        <Icon fontSize="45px">
                            <Image src="./public/logout.svg" fontSize="40px"/>
                        </Icon>
                        <Text p="1" fontWeight="bold">Logout</Text>
                    </Stack>
                </Flex>
            </Flex>
        </Flex>
    )
}