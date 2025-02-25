import { BoxProps, Button, Flex, Image, Spinner, Text } from "@chakra-ui/react";
import { Avatar } from "@/components/ui/avatar.tsx";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "@/store/useAuth";
import { ThreadDetails } from "../../detail-status/types/thread-detail-types";
import useNavigateThread from "../hooks/useNavigateThread";
import { useMutation } from "@tanstack/react-query";
import { axiosInstance } from "@/config/axios";
import { useState } from "react";
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
import { toaster } from "@/components/ui/toaster";
import useLikeUnlike from "../hooks/useLikesThread";
import convertToWIB from "@/utils/formatdate";

interface CardThreadProps extends BoxProps {
  thread: ThreadDetails;
}

export default function ThreadPost({ thread }: CardThreadProps) {
  const { onClickAvatar, onClickCard } = useNavigateThread(thread);
  const { user } = useAuthStore();
  const [isOpen, setOpen] = useState<boolean>(false);
  const { isLiked, onClickLike, onClickUnlike } = useLikeUnlike(thread);

  const { mutateAsync: DeleteThread, isPending: isPendingDelete } = useMutation(
    {
      mutationKey: ["Delete-Threads"],
      mutationFn: async (data: { threadId: string; userId: string }) => {
        const response = await axiosInstance.delete(
          `/v1/threads/${data.threadId}`
        );
        return response.data;
      },
      onSuccess: () => {
        toaster.create({
          title: "Success Delete",
          type: "success",
          duration: 3000,
        });
      },
    }
  );

  async function onClickDelete() {
    const threadId = thread.id;
    const userId = user.id;

    await DeleteThread({ threadId, userId });
  }

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
            {user.id === thread.user.id && (
              <DialogRoot
                open={isOpen}
                onOpenChange={(details) => setOpen(details.open)}
              >
                <DialogTrigger asChild>
                  <Button size="sm" colorPalette={"red"}>
                    Delete
                  </Button>
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
                      {isPendingDelete ? <Spinner /> : "Post"}
                    </Button>
                  </DialogFooter>
                  <DialogCloseTrigger />
                </DialogContent>
              </DialogRoot>
            )}
          </Flex>
          <Flex>
            <Text>{thread.content}</Text>
          </Flex>
          <Flex justify={"center"}>
            <Image
              src={thread.imageContent ?? " "}
              maxW={"xs"}
              maxH={"xs"}
              alignSelf={"center"}
            />
          </Flex>
          <Flex direction="row" gap="5">
            <Flex gap="1" alignItems="center">
              <Button
                variant={"ghost"}
                display={"flex"}
                gap={"4px"}
                onClick={isLiked ? onClickUnlike : onClickLike}
              >
                <Image
                  src={
                    isLiked
                      ? "/src/assets/heart-bold.svg"
                      : "/src/assets/heart.svg"
                  }
                  width={"27px"}
                />
                <Text>{thread.likesCount}</Text>
              </Button>
            </Flex>
            <Flex
              mt={"2"}
              mb={"2"}
              p={"0.5"}
              cursor={"pointer"}
              _hover={{ backgroundColor: "transparent" }}
              onClick={onClickCard}
            >
              <Image src="/src/assets/message-text.svg" w="30px" />
              <Text>{thread.replies?.length}</Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
