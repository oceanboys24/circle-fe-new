import {Button, Flex, Heading, Image, Stack, Text} from "@chakra-ui/react";
import {Avatar} from "@/components/ui/avatar"

export default function SideBarRight() {
    return (

        <Flex direction="column" gap="4" height="100vh" width="60vw" bgColor="#1c1d1c" p="10" minW="sm"
        >
            <Stack bgColor="#272726" p="4" rounded="lg">
                <Heading>My Profile</Heading>
                <Image src="./public/cover.svg" fontSize="40px" rounded="lg"/>
                <Flex justify="space-between" h="100px">
                    <Avatar src="./public/avatar.svg" size="4xl"
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
            <Stack bgColor="#272726" rounded="lg" p="3">
                <Flex align="center" gap="2">
                    <Text textStyle="md" color="white">Developed by</Text>
                    <Text textStyle="md" color="white" fontWeight="bold">Vian</Text>
                    <Text color="gray.400">•</Text>
                    <Avatar src="./public/github.svg" size="xs"/>
                    <Avatar src="./public/linkedin.svg" size="xs"/>
                    <Avatar src="./public/facebook.svg" size="xs"/>
                    <Avatar src="./public/instagram.svg" size="xs"/>
                </Flex>
                <Flex align="center" gap="2">
                    <Text textStyle="md" color="gray.400">Powered by</Text>
                    <Image src="./public/main-logo.svg"/>
                    <Text textStyle="md" color="gray.400">Dumbways Indonesia</Text>
                    <Text color="gray.400">• #1Coding Bootcamp</Text>

                </Flex>
            </Stack>
        </Flex>
    );
}