import { BoxProps, Button, Flex, Image, Spinner, Text } from "@chakra-ui/react";
import { Avatar } from "@/components/ui/avatar.tsx";
import { useAuthStore } from "@/store/useAuth";
import { ThreadDetails } from "../../detail-status/types/thread-detail-types";
import useNavigateThread from "../hooks/useNavigateThread";
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
import useLikeUnlike from "../hooks/useLikesThread";
import convertToWIB from "@/utils/formatdate";
import useDeleteThread from "../hooks/useDeleteThread";
import UserStatus from "../../detail-status/components/user-status";
import InputComment from "../../detail-status/components/input-comment";
import { data, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "@/config/axios";
import Comments from "../../detail-status/components/comments";
import UserStatusModal from "./modal-thread";
import InputCommentModal from "./modal-comment";

interface CardThreadProps extends BoxProps {
  thread: ThreadDetails;
}

export default function ThreadPost({ thread }: CardThreadProps) {
  const { onClickAvatar, onClickCard } = useNavigateThread(thread);
  const { user } = useAuthStore();
  const [isOpen, setOpen] = useState<boolean>(false);
  const { isLiked, onClickLike, onClickUnlike } = useLikeUnlike(thread);
  const { isPendingDelete, onClickDelete } = useDeleteThread(thread);

  const { data: detailData } = useQuery({
    queryKey: ["Thread-Detail", thread.id],
    queryFn: async () => {
      const response = await axiosInstance.get(`/v1/threads/${thread.id}`);

      return response.data;
    },
    enabled: !!thread.id, //Only fetch if id exist
  });

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

          <DialogRoot size={"full"}>
            <DialogTrigger asChild>
              <Flex justify={"center"} as="label" cursor={"pointer"}>
                <Image
                  src={thread.imageContent ?? undefined}
                  maxW={"xs"}
                  maxH={"xs"}
                  alignSelf={"center"}
                />
              </Flex>
            </DialogTrigger>
            <DialogContent>
              <DialogBody>
                <Flex h={"100vh"}>
                  <Flex w={"full"} justify={"center"}>
                    <Image
                      src={thread.imageContent ?? undefined}
                      maxW={"lg"}
                      maxH={"lg"}
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
