import {
  Box,
  Button,
  Flex,
  Float,
  Image,
  Input,
  Stack,
} from "@chakra-ui/react";
import { Avatar } from "@/components/ui/avatar.tsx";
import useInputThread from "../hooks/useInputThread";
import { CloseButton } from "@/components/ui/close-button";

export default function InputThread() {
  const {
    register,
    onSubmit,
    handleSubmit,
    handlePreview,
    previewURL,
    setPreviewURL,
  } = useInputThread();

  return (
    
    <form onSubmit={handleSubmit(onSubmit)}>
      <Flex direction="column" borderBottomWidth="2px">
        <Box display="flex" flexDirection="row" p="4" gap="4" w="full">
          <Avatar src={""} size="xl" />

          <Flex w="100vw">
            <Input
              placeholder="What is Happening?!"
              variant="flushed"
              p="4"
              textStyle="lg"
              minW="xs"
              {...register("content")}
              borderBottom="none"
              _focus={{ borderBottom: "none", boxShadow: "none" }}
            />
          </Flex>

          <Box as="label" cursor="pointer" display={"flex"}>
            <Avatar
              alignSelf={"center"}
              src="./src/assets/gallery-add.svg"
              size={"xs"}
              shape="square"
              bgColor="transparent"
              _hover={{ opacity: 0.8 }}
            >
              <input
                type="file"
                hidden
                {...register("imageContent")}
                onChange={handlePreview}
              />
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
                onClick={() => setPreviewURL(null)}
                variant={"solid"}
                rounded={"full"}
                size={"xs"}
              />
            </Float>
          )}
        </Stack>
      </Flex>
    </form>
  );
}
