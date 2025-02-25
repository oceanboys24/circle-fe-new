import {
  Box,
  Button,
  DialogActionTrigger,
  DialogBackdrop,
  Flex,
  Float,
  Icon,
  Image,
  Spinner,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { NavLink, useLocation } from "react-router-dom";
import { NavListMenu } from "../../utils/form-menu";
import HeadingSideBarLeft from "./heading";
import {
  DialogBody,
  DialogCloseTrigger,
  DialogContent,
  DialogFooter,
  DialogRoot,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Avatar } from "@/components/ui/avatar.tsx";
import { useAuthStore } from "@/store/useAuth";
import useInputThread from "@/features/home/home/hooks/useInputThread";
import { useRef, useState } from "react";
import { CloseButton } from "@/components/ui/close-button";

export default function MainMenu() {
  const { pathname } = useLocation();
  const userLogin = useAuthStore((set) => set.user);
  const [isOpen, setOpen] = useState<boolean>(false);
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
  } = useInputThread();

  return (
    <DialogRoot
      size={"lg"}
      open={isOpen}
      onOpenChange={(details) => setOpen(details.open)}
    >
      <Flex direction="column" p="1">
        <HeadingSideBarLeft />
        <Flex direction="column" p="5" px="10" gap="3">
          {NavListMenu.map(({ label, logo, path }, index) => (
            <NavLink to={path} key={index}>
              <Stack
                direction="row"
                _hover={{ bg: "#333333", rounded: "lg" }}
                p="3"
                justifyContent={{ sm: "center", lg: "start" }}
              >
                <Icon fontSize="45px">
                  <Image
                    src={pathname === path ? logo.bold : logo.outline}
                    fontSize="40px"
                  />
                </Icon>
                <Text
                  p="1"
                  fontWeight="bold"
                  display={{ md: "none", lg: "inline-block" }}
                >
                  {label}
                </Text>
              </Stack>
            </NavLink>
          ))}
          <DialogTrigger asChild>
            <Box p="2" display={"flex"} justifyContent="center">
              <Button
                alignSelf="center"
                type="submit"
                size="xl"
                colorPalette="green"
                rounded="4xl"
                fontSize="2xl"
                w={{ sm: "200px", lg: "full" }}
                maxW="300px"
              >
                <Text fontSize={{ sm: 25, lg: 25 }}>Create Post</Text>
              </Button>
            </Box>
          </DialogTrigger>
          <DialogBackdrop />
          <DialogContent rounded="lg">
            <DialogCloseTrigger bg="bg" />
            <DialogBody p="5">
              <Flex justify="center" align="start" flexShrink={0}>
                <Box p="2.5">
                  <Avatar alignSelf="center" src={userLogin.profile?.avatarUrl ?? " "} size="md" />
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
                <Image src="./src/assets/gallery-add.svg" />
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
                onClick={async () => {
                  await handleSubmit(async (data) => {
                    await onSubmit(data);
                    setOpen(false);
                  })();
                }}
                disabled={isPending ? true : false}
              >
                {isPending ? <Spinner /> : "Post"}
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
        </Flex>
      </Flex>
    </DialogRoot>
  );
}
