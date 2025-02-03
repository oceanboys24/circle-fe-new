import {Flex, Icon, Image, Stack, Text} from "@chakra-ui/react";
import {Link} from "react-router-dom";

export default function Logout() {
    return (
        <Flex justify="center" rounded="xl">

            <Link to="/login">
                <Stack direction="row" _hover={{bg: "#333333", rounded: "lg"}} p="3">
                    <Icon fontSize="45px">
                        <Image src="./src/assets/logout.svg" fontSize="40px"/>
                    </Icon>
                    <Text p="1" fontWeight="bold">Logout</Text>
                </Stack>

            </Link>
        </Flex>
    )
}