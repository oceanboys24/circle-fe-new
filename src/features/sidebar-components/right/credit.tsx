import {Flex, Image, Stack, Text} from "@chakra-ui/react";
import {Avatar} from "@/components/ui/avatar.tsx";

export default function Credit() {
    return (
        <Stack bgColor="#272726" rounded="lg" p="3">
            <Flex align="center" gap="2">
                <Text textStyle="md" color="white">Developed by</Text>
                <Text textStyle="md" color="white" fontWeight="bold">Vian</Text>
                <Text color="gray.400">•</Text>
                <Avatar src="./src/assets/github.svg" size="xs"/>
                <Avatar src="./src/assets/linkedin.svg" size="xs"/>
                <Avatar src="./src/assets/facebook.svg" size="xs"/>
                <Avatar src="./src/assets/instagram.svg" size="xs"/>
            </Flex>
            <Flex align="center" gap="2">
                <Text textStyle="md" color="gray.400">Powered by</Text>
                <Image src="./src/assets/main-logo.svg"/>
                <Text textStyle="md" color="gray.400">Dumbways Indonesia</Text>
                <Text color="gray.400">• #1Coding Bootcamp</Text>

            </Flex>
        </Stack>
    )
}