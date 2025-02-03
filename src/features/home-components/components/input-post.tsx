import {Button, Flex, Stack} from "@chakra-ui/react";
import {Avatar} from "@/components/ui/avatar.tsx";
import InputPostArea from "@/features/home-components/components/input-post/input-image.tsx";
import {useState} from "react";
import PreviewImage from "@/features/home-components/components/input-post/preview-image.tsx";
import InputImageButton from "@/features/home-components/components/input-post/button-image.tsx";
import {CloseButton} from "@/components/ui/close-button.tsx";


export default function InputPost() {
    const [image, setImage] = useState<string | null>(null);
    return (
        <Flex direction="column" borderBottomWidth="2px">
            <Stack direction="row" p="4">
                <Avatar src="./src/assets/avatar2.svg" size="xl"/>
                <InputPostArea/>
                <InputImageButton setImage={setImage}/>
                <Button type="submit" size="md" colorPalette="green" rounded="4xl" fontSize='2xl'
                        p="5">Post</Button>
            </Stack>
            <Stack w="xs" alignSelf="center" p="2">
                <PreviewImage image={image}/>
                {image && (
                    <CloseButton onClick={() => setImage(null)} position="absolut" top={2} right={2} border="xs"/>
                )}
            </Stack>
        </Flex>

    )
}