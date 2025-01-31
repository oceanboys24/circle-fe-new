import {Box, Button, defineStyle, DialogRoot, Field, Flex, Image, Input, Stack, Textarea} from "@chakra-ui/react";
import {
    DialogBody,
    DialogCloseTrigger,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog.tsx";
import {Avatar} from "@/components/ui/avatar.tsx";

export default function ModalEdit() {
    return (
        <DialogRoot>
            <DialogTrigger asChild>
                <Button variant="outline" color="white" borderColor="white" rounded="4xl"
                        flexShrink={0}>Edit
                    Profile</Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle color="#d2d2d2">Edit Profile</DialogTitle>
                </DialogHeader>
                <DialogBody>
                    <Image src="./public/cover.svg" fontSize="40px" rounded="lg"/>
                    <Flex justify="space-between" h="100px">
                        <Avatar src="./public/avatar.svg" size="4xl"
                                bottom="50px" left="30px"/>
                    </Flex>
                    <Stack direction="column" gap="1" p="1" position="relative" mt="-10">
                        <Field.Root gap="4">
                            <Box pos="relative" w="full">
                                <Input className="peer" placeholder=""/>
                                <Field.Label css={floatingStyles}>Name</Field.Label>
                            </Box>
                            <Box pos="relative" w="full">
                                <Input className="peer" placeholder=""/>
                                <Field.Label css={floatingStyles}>Username</Field.Label>
                            </Box>
                            <Box pos="relative" w="full">
                                <Textarea className="peer" autoresize placeholder=""/>
                                <Field.Label css={floatingStyles}>Bio</Field.Label>
                            </Box>
                        </Field.Root>
                    </Stack>
                </DialogBody>
                <DialogFooter>
                    <Button bgColor="#04a51e" color="white" rounded="2xl">Save</Button>
                </DialogFooter>
                <DialogCloseTrigger/>
            </DialogContent>
        </DialogRoot>
    )
}


const floatingStyles = defineStyle({
    pos: "absolute",
    bg: "bg",
    px: "0.5",
    top: "-3",
    insetStart: "2",
    fontWeight: "normal",
    pointerEvents: "none",
    transition: "position",
    _peerPlaceholderShown: {
        color: "fg.muted",
        top: "2.5",
        insetStart: "3",
    },
    _peerFocusVisible: {
        color: "fg",
        top: "-3",
        insetStart: "2",
    },
})