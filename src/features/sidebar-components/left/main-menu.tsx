import {Button, Flex, Icon, Image, Stack, Text} from "@chakra-ui/react";
import {NavLink} from "react-router-dom"

export default function MainMenu() {
    return (
        <Flex direction="column" p="1" alignItems="space-between" h="full">
            <Flex direction="column" p="5" px="10" gap="3">
                <NavLink to="/">
                    {({isActive}) => (
                        <Stack direction="row" _hover={{bg: "#333333", rounded: "lg"}} p="3">
                            <Icon fontSize="45px">
                                <Image src={isActive ? "./src/assets/home-bold.svg" : "./src/assets/home.svg"}
                                       fontSize="40px"/>
                            </Icon>
                            <Text p="1" fontWeight="bold">Home</Text>
                        </Stack>
                    )}
                </NavLink>

                <NavLink to="search">
                    {({isActive}) => (
                        <Stack direction="row" _hover={{bg: "#333333", rounded: "lg"}} p="3">
                            <Icon fontSize="45px">
                                <Image
                                    src={isActive ? "./src/assets/user-search-bold.svg" : "./src/assets/user-search.svg"}
                                    fontSize="40px"/>
                            </Icon>
                            <Text p="1" fontWeight="bold">Search</Text>
                        </Stack>
                    )}
                </NavLink>

                <NavLink to="follows">
                    {({isActive}) => (
                        <Stack direction="row" _hover={{bg: "#333333", rounded: "lg"}} p="3">
                            <Icon fontSize="45px">
                                <Image src={isActive ? "./src/assets/heart-bold.svg" : "./src/assets/heart.svg"}
                                       fontSize="40px"/>
                            </Icon>
                            <Text p="1" fontWeight="bold">Follows</Text>
                        </Stack>
                    )}
                </NavLink>
                <NavLink to="profile">
                    {({isActive}) => (
                        <Stack direction="row" _hover={{bg: "#333333", rounded: "lg"}} p="3">
                            <Icon fontSize="45px">
                                <Image src={isActive ? "./src/assets/profile-bold.svg" : "./src/assets/profile.svg"}
                                       fontSize="40px"/>
                            </Icon>
                            <Text p="1" fontWeight="bold">Follows</Text>
                        </Stack>
                    )}
                </NavLink>


                <Button type="submit" size="xl" colorPalette="green" rounded="4xl" fontSize='2xl'>Create
                    Post</Button>
            </Flex>
        </Flex>
    )
}