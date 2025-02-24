import { BoxProps, Button, Flex, Image, Text } from "@chakra-ui/react";
import { Avatar } from "@/components/ui/avatar.tsx";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "@/store/useAuth";
import { ThreadDetails } from "../../detail-status/types/thread-detail-types";
import useNavigateThread from "../hooks/useNavigateThread";
import { useMutation } from "@tanstack/react-query";
import { axiosInstance } from "@/config/axios";
import { useState } from "react";

interface CardThreadProps extends BoxProps {
  thread: ThreadDetails;
}

export default function ThreadPost({ thread }: CardThreadProps) {
  const { onClickAvatar, onClickCard } = useNavigateThread(thread);
  const [isLiked, setIsLiked] = useState(thread.isLiked);
  const { user } = useAuthStore();
  const { mutateAsync: LikeMutate } = useMutation({
    mutationKey: ["Likes"],
    mutationFn: async (data: { threadId: string; userId: string }) => {
      const response = await axiosInstance.post("/v1/likes", data);
      console.log(response.data);
      return response.data;
    },
  });

  async function onClickLike() {
    setIsLiked(true);
    const threadId = thread.id;
    const userId = user.id;

    await LikeMutate({ threadId, userId });
  }

  const { mutateAsync: UnlikeMutate } = useMutation({
    mutationKey: ["Likes"],
    mutationFn: async (data: { threadId: string; userId: string }) => {
      const response = await axiosInstance.delete( `/v1/likes/${data.threadId}`);
      return response.data;
    },
  });

  async function onClickUnlike() {
    setIsLiked(false);
    const threadId = thread.id;
    const userId = user.id;

    await UnlikeMutate({ threadId, userId });
  }

  return (
    <Flex direction="column">
      <Flex key={thread.id} borderBottomWidth={"2px"} p="4" gap="3">
        <Avatar
          src={
            thread?.user?.profile?.avatarUrl ??
            "https://api.dicebear.com/9.x/bottts/svg"
          }
          size="xl"
          cursor={"pointer"}
          onClick={onClickAvatar}
        />
        <Flex direction="column" pl="3">
          <Flex textStyle="md" direction="row" gap="3">
            <Text as="span" color="white" fontWeight="semibold">
              {thread.user.fullName}
            </Text>
            <Text as="span" color="gray.400">
              @{thread.user.userName}
            </Text>
            <Text as="span" color="gray.400">
              • 6h
            </Text>
          </Flex>
          <Flex
            mt={"2"}
            mb={"2"}
            p={"0.5"}
            cursor={"pointer"}
            _hover={{ backgroundColor: "#333333" }}
            onClick={onClickCard}
          >
            <Text>{thread.content}</Text>
          </Flex>
          <Flex>
            <Image
              src={thread.imageContent}
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
                <Image src={isLiked ? "/src/assets/heart-bold.svg" : "/src/assets/heart.svg"} width={"27px"} />
                <Text>{thread.likesCount}</Text>
              </Button>
              <Text>100</Text>
            </Flex>
            <Flex gap="1" alignItems="center">
              <Image src="/src/assets/message-text.svg" w="30px" />
              <Text>Replies</Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
