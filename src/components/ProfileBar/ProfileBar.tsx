import {Button, Flex, Grid, Heading, Image, Stack, Tabs, Text} from "@chakra-ui/react";
import {Avatar} from "@/components/ui/avatar.tsx";


export default function ProfileBar() {
    return (
        <Flex w="full" direction="column">
            <Flex>
                <Stack p="4">
                    <Flex gap="1">
                        <Avatar src="line-arrow-left.svg" size="xs" rounded="lg" bgColor="#09090b"/>
                        <Heading>Profile</Heading>
                    </Flex>
                    <Image src="./public/cover.svg" fontSize="40px" rounded="lg"/>
                    <Flex justify="space-between" h="100px">
                        <Avatar src="./public/avatar.svg" size="4xl"
                                bottom="50px" left="30px"/>
                        <Button variant="outline" color="white" borderColor="white" rounded="4xl" flexShrink={0}>Edit
                            Profile</Button>
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
            </Flex>
            <Flex>
                <Tabs.Root defaultValue="post" w="full">
                    <Tabs.List w="full">
                        <Tabs.Trigger value="post" w="full" justifyContent="center">
                            All Post
                        </Tabs.Trigger>
                        <Tabs.Trigger value="media" w="full" justifyContent="center">
                            Media
                        </Tabs.Trigger>
                    </Tabs.List>
                    <Tabs.Content value="post" w="full">
                        <Flex direction="column" p="4" gap="3" borderBottomWidth="2px">
                            <Flex>
                                <Avatar src="./public/avatar2.svg" size="xl"/>
                                <Flex direction="column" pl="3" gap="3">
                                    <Flex textStyle="md" direction="row" gap="3">
                                        <Text as="span" color="white">Drs. Roesdi Amba</Text>
                                        <Text as="span" color="gray.400"> @oceanboys </Text>
                                        <Text as="span" color="gray.400">• 6h</Text>
                                    </Flex>
                                    <Text>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                        Ipsum
                                        has been the industry's standard dummy text ever since the 1500s, when an
                                        unknown
                                        printer took a galley of type and scrambled it to make a type specimen book. It
                                        has
                                        survived not only five centuries, but also the leap into electronic
                                    </Text>
                                    <Flex direction="row" gap="5">
                                        <Flex gap="1">
                                            <Image src="./public/heart.svg"/>
                                            <Text>46</Text>
                                        </Flex>
                                        <Flex gap="1">
                                            <Image src="./public/message-text.svg"/>
                                            <Text>405 Replies</Text>
                                        </Flex>
                                    </Flex>
                                </Flex>
                            </Flex></Flex>
                        <Flex direction="column" p="4" gap="3" borderBottomWidth="2px">
                            <Flex>
                                <Avatar src="./public/avatar2.svg" size="xl"/>
                                <Flex direction="column" pl="3" gap="3">
                                    <Flex textStyle="md" direction="row" gap="3">
                                        <Text as="span" color="white">Lamar Jackson</Text>
                                        <Text as="span" color="gray.400"> @jacky69 </Text>
                                        <Text as="span" color="gray.400">• 6h</Text>
                                    </Flex>
                                    <Text>
                                        Game Day Chiefs vs Ravens
                                    </Text>
                                    <Image src="./public/dummy.png" rounded="lg" fit="contain"/>
                                    <Flex direction="row" gap="5">
                                        <Flex gap="1">
                                            <Image src="./public/heart.svg"/>
                                            <Text>46</Text>
                                        </Flex>
                                        <Flex gap="1">
                                            <Image src="./public/message-text.svg"/>
                                            <Text>405 Replies</Text>
                                        </Flex>
                                    </Flex>
                                </Flex>
                            </Flex>
                        </Flex>
                        <Flex direction="column" p="4" gap="3" borderBottomWidth="2px">
                            <Flex>
                                <Avatar src="./public/avatar2.svg" size="xl"/>
                                <Flex direction="column" pl="3" gap="3">
                                    <Flex textStyle="md" direction="row" gap="3">
                                        <Text as="span" color="white">Drs. Roesdi Amba</Text>
                                        <Text as="span" color="gray.400"> @oceanboys </Text>
                                        <Text as="span" color="gray.400">• 6h</Text>
                                    </Flex>
                                    <Text>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                        Ipsum
                                        has been the industry's standard dummy text ever since the 1500s, when an
                                        unknown
                                        printer took a galley of type and scrambled it to make a type specimen book. It
                                        has
                                        survived not only five centuries, but also the leap into electronic
                                    </Text>
                                    <Flex direction="row" gap="5">
                                        <Flex gap="1">
                                            <Image src="./public/heart.svg"/>
                                            <Text>46</Text>
                                        </Flex>
                                        <Flex gap="1">
                                            <Image src="./public/message-text.svg"/>
                                            <Text>405 Replies</Text>
                                        </Flex>
                                    </Flex>
                                </Flex>
                            </Flex>
                        </Flex>
                        <Flex direction="column" p="4" gap="3" borderBottomWidth="2px">
                            <Flex>
                                <Avatar src="./public/avatar2.svg" size="xl"/>
                                <Flex direction="column" pl="3" gap="3">
                                    <Flex textStyle="md" direction="row" gap="3">
                                        <Text as="span" color="white">Drs. Roesdi Amba</Text>
                                        <Text as="span" color="gray.400"> @oceanboys </Text>
                                        <Text as="span" color="gray.400">• 6h</Text>
                                    </Flex>
                                    <Text>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                        Ipsum
                                        has been the industry's standard dummy text ever since the 1500s, when an
                                        unknown
                                        printer took a galley of type and scrambled it to make a type specimen book. It
                                        has
                                        survived not only five centuries, but also the leap into electronic
                                    </Text>
                                    <Flex direction="row" gap="5">
                                        <Flex gap="1">
                                            <Image src="./public/heart.svg"/>
                                            <Text>46</Text>
                                        </Flex>
                                        <Flex gap="1">
                                            <Image src="./public/message-text.svg"/>
                                            <Text>405 Replies</Text>
                                        </Flex>
                                    </Flex>
                                </Flex>
                            </Flex>
                        </Flex>
                        <Flex direction="column" p="4" gap="3" borderBottomWidth="2px">
                            <Flex>
                                <Avatar src="./public/avatar2.svg" size="xl"/>
                                <Flex direction="column" pl="3" gap="3">
                                    <Flex textStyle="md" direction="row" gap="3">
                                        <Text as="span" color="white">Drs. Roesdi Amba</Text>
                                        <Text as="span" color="gray.400"> @oceanboys </Text>
                                        <Text as="span" color="gray.400">• 6h</Text>
                                    </Flex>
                                    <Text>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                        Ipsum
                                        has been the industry's standard dummy text ever since the 1500s, when an
                                        unknown
                                        printer took a galley of type and scrambled it to make a type specimen book. It
                                        has
                                        survived not only five centuries, but also the leap into electronic
                                    </Text>
                                    <Flex direction="row" gap="5">
                                        <Flex gap="1">
                                            <Image src="./public/heart.svg"/>
                                            <Text>46</Text>
                                        </Flex>
                                        <Flex gap="1">
                                            <Image src="./public/message-text.svg"/>
                                            <Text>405 Replies</Text>
                                        </Flex>
                                    </Flex>
                                </Flex>
                            </Flex>
                        </Flex>
                    </Tabs.Content>
                    <Tabs.Content value="media" w="full">
                        <Grid templateColumns="repeat(3, 1fr)" gap="6">
                            <Image h="full" w="full" src="./public/dummy-1.jpg"/>
                            <Image h="full" w="full" src="./public/dummy-1.jpg"/>
                            <Image h="full" w="full" src="./public/dummy-1.jpg"/>
                            <Image h="full" w="full" src="./public/dummy-1.jpg"/>
                            <Image h="full" w="full" src="./public/dummy-1.jpg"/>
                            <Image h="full" w="full" src="./public/dummy-1.jpg"/>
                            <Image h="full" w="full" src="./public/dummy-1.jpg"/>
                            <Image h="full" w="full" src="./public/dummy-1.jpg"/>
                            <Image h="full" w="full" src="./public/dummy-1.jpg"/>
                        </Grid>
                    </Tabs.Content>
                </Tabs.Root>
            </Flex>
        </Flex>
    )
}