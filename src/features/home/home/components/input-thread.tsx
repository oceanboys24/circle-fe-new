import {
  Box,
  Button,
  DialogBackdrop,
  Flex,
  Float,
  Image,
  Spinner,
  Stack,
  Textarea,
} from "@chakra-ui/react";
import { Avatar } from "@/components/ui/avatar.tsx";
import useInputThread from "../hooks/useInputThread";
import { CloseButton } from "@/components/ui/close-button";
import { useAuthStore } from "@/store/useAuth";
import InputContent from "./input";
import { useState } from "react";
import {
  DialogBody,
  DialogCloseTrigger,
  DialogContent,
  DialogFooter,
  DialogRoot,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function InputThread() {
  const {
    register,
    onSubmit,
    handleSubmit,
    handlePreview,
    previewURL,
    setPreviewURL,
    isPending,
    restRegisterImages,
    registerImagesOnChange,
    registerImagesRef,
    inputFileRef,
    setValue,
    isPendingUpload,
  } = useInputThread();
  const userLogin = useAuthStore((state) => state.user);
  const [isOpen, setOpen] = useState<boolean>(false);
  
  const handleButtonClick = async () => {
    await handleSubmit(async (data) => {
      await onSubmit(data);
      setOpen(false);
    })(); 
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Flex direction="column" borderBottomWidth="2px">
        <Box display="flex" flexDirection="row" p="4" gap="4" w="full">
          <Avatar
            src={
              userLogin?.profile?.avatarUrl ??
              "https://api.dicebear.com/9.x/bottts/svg"
            }
            size="xl"
          />

          <DialogRoot
            size={"lg"}
            open={isOpen}
            onOpenChange={(details) => setOpen(details.open)}
          >
            <DialogTrigger asChild>
              <Flex w="100vw">
                <InputContent />
              </Flex>
            </DialogTrigger>
            <DialogBackdrop />
            <DialogContent rounded="lg">
              <DialogCloseTrigger bg="bg" />
              <DialogBody p="5">
                <Flex justify="center" align="start" flexShrink={0}>
                  <Box p="2.5">
                    <Avatar
                      alignSelf="center"
                      src={
                        userLogin?.profile?.avatarUrl ??
                        "https://api.dicebear.com/9.x/bottts/svg"
                      }
                      size="md"
                    />
                  </Box>
                  <Textarea
                    autoresize
                    maxH="30vh"
                    {...register("content")}
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
                <Flex alignSelf="start" as="label" cursor="pointer">
                  <Image src="/gallery-add.svg" />
                  <input
                    type="file"
                    hidden
                    {...restRegisterImages}
                    onChange={(e) => {
                      handlePreview(e);
                      registerImagesOnChange(e);
                    }}
                    ref={(e) => {
                      registerImagesRef(e);
                      inputFileRef.current = e;
                    }}
                  />
                </Flex>
                <Button
                  bgColor="#04A51E"
                  color="white"
                  type="submit"
                  rounded="full"
                  p="4"
                  onClick={handleButtonClick}
                  disabled={isPending || isPendingUpload }
                >
                  {isPending || isPendingUpload ? <Spinner /> : "Post"}
                </Button>
              </DialogFooter>
              <Stack
                w="xs"
                alignSelf="center"
                p="2"
                position={"relative"}
                display={previewURL ? "flex" : "none"}
              >
                <Image
                  objectFit="contain"
                  maxHeight="300px"
                  maxWidth="300px"
                  src={previewURL ?? ""}
                  borderRadius="md"
                />
                {previewURL && (
                  <Float>
                    <CloseButton
                      onClick={() => {
                        setPreviewURL(null);
                        setValue("imageContent", new DataTransfer().files);
                      }}
                      variant={"solid"}
                      rounded={"full"}
                      size={"xs"}
                    />
                  </Float>
                )}
              </Stack>
            </DialogContent>
          </DialogRoot>

          <Box display={"flex"}>
            <Avatar
              alignSelf={"center"}
              src="/gallery-add.svg"
              size={"xs"}
              shape="square"
              bgColor="transparent"
              _hover={{ opacity: 0.8 }}
            >
              <input type="file" hidden />
            </Avatar>
          </Box>

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
      </Flex>
    </form>
  );
}
