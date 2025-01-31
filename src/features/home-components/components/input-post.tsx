import {Button, Input, Stack} from "@chakra-ui/react";
import {Avatar} from "@/components/ui/avatar.tsx";
import {FileUploadRoot, FileUploadTrigger} from "@/components/ui/file-upload.tsx";

export default function InputPost() {
    return (
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
    )
}