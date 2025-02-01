import {Button, Flex, Text} from "@chakra-ui/react";
import {Avatar} from "@/components/ui/avatar.tsx";

export function Followers() {
    return (
        <Flex gap="3" justifyContent="space-between">
            <Avatar src="./src/assets/avatar.svg" size="xl"/>
            <Flex direction="column" marginEnd="auto">
                <Text>Kendrick Lamar</Text>
                <Text textStyle="xs" color="#5a5a5b">@champagnepapi</Text>
            </Flex>
            <Button variant="outline" color="#747475" borderColor="#747475" rounded="4xl" w="120px"
            >
                Following</Button>
        </Flex>
    )
}

export function Following() {
    return (
        <Flex gap="3" justifyContent="space-between">
            <Avatar src="./src/assets/avatar.svg" size="xl"/>
            <Flex direction="column" marginEnd="auto">
                <Text>Kendrick Lamar</Text>
                <Text textStyle="xs" color="#5a5a5b">@champagnepapi</Text>
            </Flex>
            <Button variant="outline" color="white" borderColor="white" rounded="4xl"
            >
                Following</Button>
        </Flex>
    )
}