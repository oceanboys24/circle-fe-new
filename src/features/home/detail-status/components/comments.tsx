import { BoxProps, Card, Flex, Image, Text } from "@chakra-ui/react";
import { Avatar } from "@/components/ui/avatar.tsx";
import { Post, Reply } from "../../home/utils/post";
import { useReducer } from "react";

interface CardReplyProps extends BoxProps {
  replyData: Reply;
}

interface ChardStatusDetailProps extends BoxProps {
  postData: Post;
}

export default function Comments({
  replyData,
  postData,
}: CardReplyProps & ChardStatusDetailProps) {
  return (
    <Flex direction="column" p="4" gap="3" borderBottomWidth="2px">
      <Flex>
        <Avatar src={postData.user.avatarUrl} size="xl" />
        <Flex direction="column" pl="3" gap="3">
          <Flex textStyle="md" direction="row" gap="3">
            <Text as="span" color="white">
              {postData.user.fullName}
            </Text>
            <Text as="span" color="gray.400">
              {" "}
              @{postData.user.userName}
            </Text>
            <Text as="span" color="gray.400">
              • 6h
            </Text>
          </Flex>
          <Text>{replyData.content}</Text>
          <Flex>
            <Image
              src={replyData.contentImage}
              maxW={"xs"}
              maxH={"xs"}
              alignSelf={"center"}
            />
          </Flex>
          <Flex direction="row" gap="5">
            <Flex gap="1">
              <Image
                // src={
                //   replyData.isLiked
                //     ? "/src/assets/heart-fill.svg"
                //     : "/src/assets/heart.svg"
                // }
                cursor={"pointer"}
              />
              <Text>{replyData.likesCount}</Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
