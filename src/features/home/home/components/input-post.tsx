import {
  Box,
  Button,
  Flex,
  Stack,
  Image,
  Textarea,
  Float,
} from "@chakra-ui/react";
import { Avatar } from "@/components/ui/avatar.tsx";
import InputPostArea from "@/features/home/home/components/input-post/create-post";
import { useRef } from "react";
import PreviewImage from "@/features/home/home/components/input-post/preview-image";
import InputImageButton from "@/features/home/home/components/input-post/button-image";
import { CloseButton } from "@/components/ui/close-button.tsx";
import {
  DialogActionTrigger,
  DialogBackdrop,
  DialogBody,
  DialogCloseTrigger,
  DialogContent,
  DialogFooter,
  DialogRoot,
  DialogTrigger,
} from "@/components/ui/dialog";
import { userSession } from "@/utils/dummy-data/userSession";
import useImageStore from "@/store/image";

export default function InputPost() {
  const { image, setImage } = useImageStore();
  const inputFileImage = useRef<HTMLInputElement>(null);

  function onClick(event: React.MouseEvent<HTMLButtonElement>) {
    event.stopPropagation();
    inputFileImage.current?.click();
  }

  return (
    <DialogRoot size="lg">
      <Flex direction="column" borderBottomWidth="2px">
        <Box display="flex" flexDirection="row" p="4" gap="4" w="full">
          <Avatar src={userSession.avatarUrl} size="xl" />
          <DialogTrigger asChild>
            <Flex w="100vw">
              <InputPostArea />
            </Flex>
          </DialogTrigger>
          <InputImageButton />
          <Button
            type="submit"
            size="md"
            colorPalette="green"
            rounded="4xl"
            fontSize="xl"
            p="5"
            justifyContent="center"
          >
            Post
          </Button>
        </Box>
        <Stack
          w="xs"
          alignSelf="center"
          p="2"
          position={"relative"}
          display={image ? "flex" : "none"}
        >
          <PreviewImage />
          {image && (
            <Float>
              <CloseButton
                onClick={() => setImage(null)}
                variant={"solid"}
                rounded={"full"}
                size={"xs"}
              />
            </Float>
          )}
        </Stack>
      </Flex>
      <DialogBackdrop />
      <DialogContent rounded="lg">
        <DialogCloseTrigger bg="bg" />
        <DialogBody p="5">
          <Flex justify="center" align="start" flexShrink={0}>
            <Box p="2.5">
              <Avatar
                alignSelf="center"
                src="./src/assets/avatar2.svg"
                size="md"
              />
            </Box>
            <Textarea
              autoresize
              maxH="30vh"
              placeholder="What is Happening?!"
              variant="flushed"
              p="4"
              textStyle="lg"
              minW="xs"
              borderBottom="none"
              _focus={{ borderBottom: "none", boxShadow: "none" }}
            />
          </Flex>
        </DialogBody>
        <DialogFooter justifyContent="space-between">
          <DialogActionTrigger asChild>
            <Flex alignSelf="start">
              <Button variant={"ghost"} onClick={onClick}>
                <Image src="./src/assets/gallery-add.svg" />
              </Button>
              <input
                type="file"
                hidden
                ref={inputFileImage}
                onClick={(e) => e.stopPropagation()}
              />
            </Flex>
          </DialogActionTrigger>
          <Button bgColor="#04A51E" color="white" rounded="full" p="4">
            Post
          </Button>
        </DialogFooter>
      </DialogContent>
    </DialogRoot>
  );
}
