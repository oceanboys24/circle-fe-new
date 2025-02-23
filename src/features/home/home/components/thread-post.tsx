import { BoxProps, Flex, Image, Text } from "@chakra-ui/react";
import { Avatar } from "@/components/ui/avatar.tsx";
import { Navigate, useNavigate } from "react-router-dom";
import { ThreadEntities } from "@/entities/thread-entities";
import { useAuthStore } from "@/store/useAuth";

interface CardThreadProps extends BoxProps {
  thread: ThreadEntities;
}

export default function ThreadPost({ thread }: CardThreadProps) {
  const userLogin = useAuthStore((state) => state.user);
  const navigate = useNavigate();

  function onClickCard() {
    navigate(`/detail-status/${thread.id}`);
  }

  function onClickAvatar() {
    if (thread.user.id === userLogin.id) {
      return navigate("/profile");
    }
    navigate(`/profile-user/${thread.user.id}`);
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
              <Image src="/src/assets/heart.svg" cursor={"pointer"} />
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
