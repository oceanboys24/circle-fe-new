import {Button, Input, Stack} from "@chakra-ui/react";
import {Avatar} from "@/components/ui/avatar.tsx";
import {FileUploadRoot, FileUploadTrigger} from "@/components/ui/file-upload.tsx";
import {userSession} from "@/utils/dummy-data/userSession"



export default function InputComment() {
    return (
        <Stack direction="row" p="4" borderBottomWidth="2px">
            <Avatar src={userSession.avatarUrl} size="xl"/>
            <Input placeholder="Type your reply!" variant="flushed" p="4" textStyle="lg" minW="xs"/>
            <FileUploadRoot w="auto">
                <FileUploadTrigger>
                    <Button size="xl" bgColor={"transparent"}>
                        <Avatar src="/src/assets/gallery-add.svg" size="md" shape="square" bgColor={"transparent"}/>
                    </Button>
                </FileUploadTrigger>
            </FileUploadRoot>
            <Button type="submit" size="xs" colorPalette="green" rounded="4xl" fontSize='xl'
                    p="5">Reply</Button>
        </Stack>
    )
}