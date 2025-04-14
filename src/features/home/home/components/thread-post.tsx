import {
  Box,
  BoxProps,
  Button,
  DialogBackdrop,
  Flex,
  Float,
  Image,
  Spinner,
  Stack,
  Text,
  Menu,
  Portal,
  Textarea,
} from "@chakra-ui/react";
import { Avatar } from "@/components/ui/avatar.tsx";
import { useAuthStore } from "@/store/useAuth";
import { ThreadDetails } from "../../detail-status/types/thread-detail-types";
import useNavigateThread from "../hooks/useNavigateThread";
import { useEffect, useState } from "react";
import {
  DialogActionTrigger,
  DialogBody,
  DialogCloseTrigger,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import useLikeUnlike from "../hooks/useLikesThread";
import convertToWIB from "@/utils/formatdate";
import useDeleteThread from "../hooks/useDeleteThread";
import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "@/config/axios";
import Comments from "../../detail-status/components/comments";
import UserStatusModal from "./modal-thread";
import InputCommentModal from "./modal-comment";
import { CloseButton } from "@/components/ui/close-button";
import useEditThread from "../hooks/useEditThread";

interface CardThreadProps extends BoxProps {
  thread: ThreadDetails;
}

export default function ThreadPost({ thread }: CardThreadProps) {
  const { onClickAvatar, onClickCard } = useNavigateThread(thread);
  const { user } = useAuthStore();
  const [isOpen, setOpen] = useState<boolean>(false);
  const [isOpenEdit, setOpenEdit] = useState<boolean>(false);
  const { isLiked, onClickLike, onClickUnlike } = useLikeUnlike(thread);
  const { isPendingDelete, onClickDelete } = useDeleteThread(thread);

  const { data: detailData } = useQuery({
    queryKey: ["Thread-Detail", thread.id],
    queryFn: async () => {
      const response = await axiosInstance.get(`/v1/threads/${thread.id}`);

      return response.data;
    },
    enabled: !!thread.id,
  });

  //Edit Threads
  const {
    register,
    onSubmit,
    handleSubmit,
    handlePreview,
    previewURL,
    setPreviewURL,
    isPendingEdit,
    restRegisterImages,
    registerImagesOnChange,
    registerImagesRef,
    inputFileRef,
    setValue,
    resetContent,
  } = useEditThread(thread);

  const handleButtonClick = async () => {
    await handleSubmit(async (data) => {
      await onSubmit(data);
      setOpen(false);
    })();
  };
  
  useEffect(()=> {
    if(thread) {
      setValue('content', thread.content)
    }
  }, [thread, setValue])

  console.log(thread.imageContent)
  return (
    <Flex direction="column">
      <Flex
        key={thread.id}
        borderBottomWidth={"2px"}
        p="4"
        gap="3"
        border={"xs "}
      >
        <Avatar
          src={
            thread?.user?.profile?.avatarUrl ??
            "https://api.dicebear.com/9.x/bottts/svg"
          }
          size="xl"
          cursor={"pointer"}
          onClick={onClickAvatar}
        />
        <Flex direction="column" pl="3" flexGrow={1}>
          <Flex textStyle="md" direction="row" gap="3" alignItems={"center"}>
            <Text as="span" color="white" fontWeight="semibold">
              {thread.user.fullName}
            </Text>
            <Text as="span" color="gray.400">
              @{thread.user.userName}
            </Text>
            <Text as="span" color="gray.400" marginEnd={"auto"}>
              {convertToWIB(thread.createdAt)}
            </Text>

            {/* Menu Edit Delete */}
            {user.id === thread.user.id && (
              <Menu.Root>
                <Menu.Trigger asChild>
                  <Button variant="outline" size="sm">
                    :
                  </Button>
                </Menu.Trigger>
                <Portal>
                  <Menu.Positioner>
                    <Menu.Content>
                      <Menu.Item value="edit-thread">
                        {" "}
                        <form onSubmit={handleSubmit(onSubmit)}>
                          <DialogRoot
                            size={"lg"}
                            open={isOpenEdit}
                            onOpenChange={(details) =>
                              setOpenEdit(details.open)
                            }
                          >
                            <DialogTrigger asChild>
                              <Text>Edit Thread</Text>
                            </DialogTrigger>
                            <DialogBackdrop />
                            <DialogContent rounded="lg">
                              <DialogCloseTrigger bg="bg" />
                              <DialogBody p="5">
                                <Flex
                                  justify="center"
                                  align="start"
                                  flexShrink={0}
                                >
                                  <Box p="2.5"></Box>
                                  <Textarea
                                    autoresize
                                    maxH="30vh"
                                    {...register("content")}
                                    placeholder="Edit Thread"
                                    variant="flushed"
                                    p="4"
                                    textStyle="lg"
                                    minW="xs"
                                    borderBottom="none"
                                    _focus={{
                                      borderBottom: "none",
                                      boxShadow: "none",
                                    }}
                                  />
                                </Flex>
                              </DialogBody>
                              <DialogFooter justifyContent="space-between">
                                <Flex
                                  alignSelf="start"
                                  as="label"
                                  cursor="pointer"
                                >
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
                                  onClick={() => {
                                    handleButtonClick(), setOpenEdit(false);
                                  }}
                                  disabled={isPendingEdit}
                                >
                                  {isPendingEdit ? <Spinner /> : "Edit Thread"}
                                </Button>
                              </DialogFooter>
                              <Stack
                                w="xs"
                                alignSelf="center"
                                p="2"
                                position={"relative"}
                              >
                                <Image
                                  objectFit="contain"
                                  maxHeight="300px"
                                  maxWidth="300px"
                                  src={previewURL || thread.imageContent}
                                  borderRadius="md"
                                  mb={"20px"}
                                />
                                {previewURL && (
                                  <Float>
                                    <CloseButton
                                      onClick={() => {
                                        setPreviewURL(null);
                                        setValue(
                                          "imageContent",
                                          new DataTransfer().files
                                        );
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
                        </form>
                      </Menu.Item>
                      <Menu.Item value="delete-thread" color={"fg.error"}>
                        <DialogRoot
                          open={isOpen}
                          onOpenChange={(details) => setOpen(details.open)}
                        >
                          <DialogTrigger asChild>
                            <Text>Delete Thread</Text>
                          </DialogTrigger>
                          <DialogContent>
                            <DialogHeader>
                              <DialogTitle>Delete Confirmation</DialogTitle>
                            </DialogHeader>
                            <DialogBody>
                              <p>Are you Sure to Delete?</p>
                            </DialogBody>
                            <DialogFooter>
                              <DialogActionTrigger asChild>
                                <Button variant="outline">Cancel</Button>
                              </DialogActionTrigger>
                              <Button
                                variant="subtle"
                                size="sm"
                                colorPalette={"red"}
                                disabled={isPendingDelete ? true : false}
                                onClick={async () => {
                                  onClickDelete();
                                  setOpen(false);
                                }}
                              >
                                {isPendingDelete ? <Spinner /> : "Delete"}
                              </Button>
                            </DialogFooter>
                            <DialogCloseTrigger />
                          </DialogContent>
                        </DialogRoot>
                      </Menu.Item>
                    </Menu.Content>
                  </Menu.Positioner>
                </Portal>
              </Menu.Root>
            )}
          </Flex>
          <Flex mb={'14px'}>
            <Text>{thread.content}</Text>
          </Flex>

          <DialogRoot size={"full"}>
            <DialogTrigger asChild>
              <Flex
                justify={"center"}
                as="label"
                cursor={"pointer"}
                backgroundColor={"gray.700"}
              
                w={'full'}
              >
                <Image
                  src={thread.imageContent ?? undefined}
                  maxW={"full"}
                  maxH={"full"}
                  alignSelf={"center"}
                />
              </Flex>
            </DialogTrigger>
            <DialogContent>
              <DialogBody>
                <Flex h={"100vh"}>
                  <Flex
                    w={"full"}
                    justify={"center"}
                    backgroundColor={"gray.700"}
                  >
                    <Image
                      src={thread.imageContent ?? undefined}
                      maxW={"full"}
                      maxH={"full"}
                      alignSelf={"center"}
                    />
                  </Flex>
                  <Flex direction={"column"} w={"full"}>
                    <UserStatusModal detailThread={detailData!} />
                    <InputCommentModal thread={thread} />
                    {detailData?.replies?.map((reply: any) => (
                      <Comments
                        replyData={reply!}
                        postData={detailData}
                        key={reply.id}
                      />
                    ))}
                  </Flex>
                </Flex>
              </DialogBody>
              <DialogFooter></DialogFooter>
              <DialogCloseTrigger />
            </DialogContent>
          </DialogRoot>

          <Flex direction="row" gap="5">
            <Flex gap="1" alignItems="center">
              <Button
                variant={"ghost"}
                display={"flex"}
                gap={"4px"}
                onClick={isLiked ? onClickUnlike : onClickLike}
              >
                <Image
                  src={isLiked ? "/heart-bold.svg" : "/heart.svg"}
                  width={"27px"}
                />
                <Text>{thread.likesCount}</Text>
              </Button>
            </Flex>
            <Flex
              gap={'1'}
              mt={"2"}
              mb={"2"}
              p={"0.5"}
              cursor={"pointer"}
              _hover={{ backgroundColor: "transparent" }}
              onClick={onClickCard}
            >
              <Image src="/message-text.svg" w="30px" />
              <Text>{thread.replies?.length}</Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
