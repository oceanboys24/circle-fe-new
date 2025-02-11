import {Avatar} from "@/components/ui/avatar.tsx";
import useImageStore from "@/store/image";
import {Box} from "@chakra-ui/react";


export default function InputImageButton() {
   const {handleImage} = useImageStore()
    
    return (
        <Box as="label" cursor="pointer" display={"flex"}>
            <Avatar alignSelf={"center"} src="./src/assets/gallery-add.svg" size={"xs"} shape="square" bgColor="transparent" _hover={{opacity: 0.8}}>
                <input type="file" hidden onChange={handleImage}/>
            </Avatar>
        </Box>
    )
}

