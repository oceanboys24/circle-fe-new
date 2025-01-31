import {Button, Flex, Heading, Stack, Text} from "@chakra-ui/react";
import {Avatar} from "@/components/ui/avatar.tsx";

export default function SuggestionFollow() {
    return (
        <Stack bgColor="#272726" rounded="lg" p="3">
            <Heading>Suggestion For You</Heading>
            <Flex direction="column" gap="2">
                <Flex gap="3" justifyContent="space-between">
                    <Avatar src="./public/avatar.svg" size="xl"/>
                    <Flex direction="column" marginEnd="auto">
                        <Text>Kendrick Lamar</Text>
                        <Text textStyle="xs" color="#5a5a5b">@champagnepapi</Text>
                    </Flex>
                    <Button variant="outline" color="#747475" borderColor="#747475" rounded="4xl" w="120px"
                    >
                        Following</Button>
                </Flex>
                <Flex gap="3" justifyContent="space-between">
                    <Avatar src="./public/avatar2.svg" size="xl"/>
                    <Flex direction="column" marginEnd="auto">
                        <Text>Kendrick Lamar</Text>
                        <Text textStyle="xs" color="#5a5a5b">@champagnepapi</Text>
                    </Flex>
                    <Button variant="outline" color="white" borderColor="white" rounded="4xl"
                    >
                        Following</Button>
                </Flex>
                <Flex gap="3" justifyContent="space-between">
                    <Avatar src="./public/avatar.svg" size="xl"/>
                    <Flex direction="column" marginEnd="auto">
                        <Text>Kendrick Lamar</Text>
                        <Text textStyle="xs" color="#5a5a5b">@champagnepapi</Text>
                    </Flex>
                    <Button variant="outline" color="white" borderColor="white" rounded="4xl"
                    >
                        Following</Button>
                </Flex>
                <Flex gap="3" justifyContent="space-between">
                    <Avatar src="./public/avatar2.svg" size="xl"/>
                    <Flex direction="column" marginEnd="auto">
                        <Text>Kendrick Lamar</Text>
                        <Text textStyle="xs" color="#5a5a5b">@champagnepapi</Text>
                    </Flex>
                    <Button variant="outline" color="white" borderColor="white" rounded="4xl"
                    >
                        Following</Button>
                </Flex>
            </Flex>
        </Stack>
    )
}