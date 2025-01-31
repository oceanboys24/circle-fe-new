import {Button, Flex, Icon, Image, Stack, Text} from "@chakra-ui/react";
import {Link} from "react-router-dom"

export default function MainMenu() {
    return (
        <Flex direction="column" p="1" alignItems="space-between" h="full">
            <Flex direction="column" p="5" px="10" gap="3">
                <Link to="/">
                    <Stack direction="row" _hover={{bg: "#333333", rounded: "lg"}} p="3">
                        <Icon fontSize="45px">
                            <Image src="./public/home.svg" fontSize="40px"/>
                        </Icon>
                        <Text p="1" fontWeight="bold">Home</Text>
                    </Stack>
                </Link>

                <Link to="search">
                    <Stack direction="row" _hover={{bg: "#333333", rounded: "lg"}} p="3">
                        <Icon fontSize="45px">
                            <Image src="./public/user-search.svg" fontSize="40px"/>
                        </Icon>
                        <Text p="1" fontWeight="bold">Search</Text>
                    </Stack>
                </Link>

                <Link to="follows">
                    <Stack direction="row" _hover={{bg: "#333333", rounded: "lg"}} p="3">
                        <Icon fontSize="45px">
                            <Image src="./public/love.svg" fontSize="40px"/>
                        </Icon>
                        <Text p="1" fontWeight="bold">Follows</Text>
                    </Stack>
                </Link>
                <Link to="profile">
                    <Stack direction="row" _hover={{bg: "#333333", rounded: "lg"}} p="3">
                        <Icon fontSize="45px">
                            <Image src="./public/profile.svg" fontSize="40px"/>
                        </Icon>
                        <Text p="1" fontWeight="bold">Profile</Text>
                    </Stack>
                </Link>


                <Button type="submit" size="xl" colorPalette="green" rounded="4xl" fontSize='2xl'>Create
                    Post</Button>
            </Flex>
        </Flex>
    )
}