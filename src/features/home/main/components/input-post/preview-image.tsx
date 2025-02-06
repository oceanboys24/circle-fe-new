import {Image} from "@chakra-ui/react";


interface imagePreviewProps {
    image: string | null
}

export default function PreviewImage({image}: imagePreviewProps) {
    return (
        <>
            {image && (
                <>
                    <Image src={image} rounded="lg"/>
                </>
            )}
        </>
    )
}