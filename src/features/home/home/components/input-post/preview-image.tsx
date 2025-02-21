import useImageStore from "@/store/image";
import { Image } from "@chakra-ui/react";

export default function PreviewImage() {
  const { image } = useImageStore();
  return (
    <>
      {image && (
        <>
          <Image src={image} rounded="lg" />
        </>
      )}
    </>
  );
}
