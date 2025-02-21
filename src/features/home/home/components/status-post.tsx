import { BoxProps, Flex, Image, Text } from "@chakra-ui/react";
import { Avatar } from "@/components/ui/avatar.tsx";
import { useNavigate } from "react-router-dom";
import { Post } from "../utils/post";
import { useReducer } from "react";

interface CardThreadProps extends BoxProps {
  postData: Post;
}

export default function StatusPost({ postData }: CardThreadProps) {
  const navigate = useNavigate();
  const [, forcedUpdate] = useReducer((state) => state + 1, 0);

  function onClickCard() {
    navigate(`/detail-status/${postData.id}`);
  }

  function onClickAvatar() {
    navigate(`/profile-user/${postData.id}`)
  }

  return (
    <Flex direction="column">
      <Flex key={postData.id} borderBottomWidth={"2px"} p="4" gap="3">
        <Avatar src={postData.user.avatarUrl} size="xl" cursor={"pointer"} onClick={onClickAvatar}/>
        <Flex direction="column" pl="3">
          <Flex textStyle="md" direction="row" gap="3">
            <Text as="span" color="white" fontWeight="semibold">
              {postData.user.fullName}
            </Text>
            <Text as="span" color="gray.400">
              @{postData.user.username}
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
            <Text>{postData.content}</Text>
          </Flex>

          <Flex direction="row" gap="5">
            <Flex gap="1" alignItems="center">
              <Image
                src={
                  postData.isLiked
                    ? "/src/assets/heart-fill.svg"
                    : "/src/assets/heart.svg"
                }
                cursor={"pointer"}
                onClick={() => {
                  postData.isLiked = !postData.isLiked;
                  forcedUpdate();
                }}
              />
              <Text>{postData.likesCount}</Text>
            </Flex>
            <Flex gap="1" alignItems="center">
              <Image src="/src/assets/message-text.svg" w="30px" />
              <Text>{postData.repliesCount} Replies</Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
