import {Button, Flex, Heading, Image, Input, Stack, Text} from "@chakra-ui/react";
import {Avatar} from "@/components/ui/avatar.tsx";
import {FileUploadRoot, FileUploadTrigger} from "@/components/ui/file-upload.tsx";

export default function DetailStatus() {
    return (
        <Flex w="full" direction="column" gap="3">
            <Flex gap="1" p="5">
                <Avatar src="line-arrow-left.svg" size="xs" rounded="lg" bgColor="#09090b"/>
                <Heading fontWeight="bold" fontSize="3xl" color="#d2d2d2">Status</Heading>
            </Flex>
            <Flex p="5" borderBottomWidth="2px">
                <Avatar src="./public/tyler.png" size="xl"/>
                <Flex direction="column" pl="3" gap="3">
                    <Flex textStyle="md" direction="row" gap="3">
                        <Text as="span" color="white">Drs. Fuad</Text>
                        <Text as="span" color="gray.400">@jomok689</Text>
                        <Text as="span" color="gray.400">• 6h</Text>
                    </Flex>
                    <Text>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                        has been the industry's standard dummy text ever since the 1500s, when an unknown
                        printer took a galley of type and scrambled it to make a type specimen book. It has
                        survived not only five centuries, but also the leap into electronic
                    </Text>
                    <Flex gap="1">
                        <Text color="gray.400">11:40PM</Text>
                        <Text as="span" color="gray.400">•</Text>
                        <Text color="gray.400">Jul 26,2015</Text>
                    </Flex>
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
            <Stack direction="row" p="4" borderBottomWidth="2px">
                <Avatar src="./public/avatar2.svg" size="xl"/>
                <Input placeholder="Type your reply!" variant="flushed" p="4" textStyle="lg" minW="xs"/>
                <FileUploadRoot w="auto">
                    <FileUploadTrigger>
                        <Button size="xl" bgColor="#09090b">
                            <Avatar src="./public/gallery-add.svg" size="md" shape="square" bgColor="#09090b"/>
                        </Button>
                    </FileUploadTrigger>
                </FileUploadRoot>
                <Button type="submit" size="xs" colorPalette="green" rounded="4xl" fontSize='xl'
                        p="5">Reply</Button>
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

        </Flex>
    )
}