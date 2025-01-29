import {Button, Flex, Heading, Image, Input, Stack, Text} from "@chakra-ui/react";
import {Avatar,} from "@/components/ui/avatar.tsx";
import {FileUploadRoot, FileUploadTrigger} from "@/components/ui/file-upload.tsx";


export default function HomeBar() {
    return (
        <Flex direction="column" w="full">
            <Stack p="4">
                <Heading fontSize="3xl" color="gray.400">Home</Heading>
                <Stack direction="row" p="4" borderBottomWidth="2px">
                    <Avatar src="./public/avatar2.svg" size="xl"/>
                    <Input placeholder="What is Happening?!" variant="flushed" p="4" textStyle="lg" minW="xs"/>
                    <FileUploadRoot w="auto">
                        <FileUploadTrigger>
                            <Button size="xl" bgColor="#09090b">
                                <Avatar src="./public/gallery-add.svg" size="md" shape="square" bgColor="#09090b"/>
                            </Button>
                        </FileUploadTrigger>
                    </FileUploadRoot>
                    <Button type="submit" size="md" colorPalette="green" rounded="4xl" fontSize='2xl'
                            p="5">Post</Button>
                </Stack>
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
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                has been the industry's standard dummy text ever since the 1500s, when an unknown
                                printer took a galley of type and scrambled it to make a type specimen book. It has
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
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                has been the industry's standard dummy text ever since the 1500s, when an unknown
                                printer took a galley of type and scrambled it to make a type specimen book. It has
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
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                has been the industry's standard dummy text ever since the 1500s, when an unknown
                                printer took a galley of type and scrambled it to make a type specimen book. It has
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
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                has been the industry's standard dummy text ever since the 1500s, when an unknown
                                printer took a galley of type and scrambled it to make a type specimen book. It has
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
            </Stack>
        </Flex>
    )
}