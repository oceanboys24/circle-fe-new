import {Avatar} from "@/components/ui/avatar.tsx";
import {Box} from "@chakra-ui/react";

interface InputImageProps {
    setImage: (image: string | null) => void;
}

export default function InputImageButton({setImage}: InputImageProps) {
    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if (file) {
            const reader = new FileReader()
            reader.onloadend = () => {
                setImage(reader.result as string)
            }
            reader.readAsDataURL(file)
        }
    }
    return (
        <Box as="label" cursor="pointer" display={"flex"}>
            <Avatar alignSelf={"center"} src="./src/assets/gallery-add.svg" size={"xs"} shape="square" bgColor="transparent" _hover={{opacity: 0.8}}>
                <input type="file" hidden onChange={handleImageChange}/>
            </Avatar>
        </Box>
    )
}

