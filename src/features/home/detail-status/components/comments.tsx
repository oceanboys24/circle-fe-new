import { BoxProps, Card, Flex, Image, Text } from "@chakra-ui/react";
import { Avatar } from "@/components/ui/avatar.tsx";
import { Post, Reply } from "../../home/utils/post";
import { useReducer } from "react";
import { useAuthStore } from "@/store/useAuth";
import FormatDate from "../../home/utils/formatDate";

interface CardReplyProps extends BoxProps {
  replyData: Reply;
}

interface ChardStatusDetailProps extends BoxProps {
  postData: Post;
}

export default function Comments({
  replyData,
}: CardReplyProps & ChardStatusDetailProps) {
  const { user } = useAuthStore();
  
  return (
    <Flex direction="column" p="4" gap="3" borderBottomWidth="2px">
      <Flex>
        <Avatar src={user.profile.avatarUrl ?? " "} size="xl" />
        <Flex direction="column" pl="3" gap="3">
          <Flex textStyle="md" direction="row" gap="3">
            <Text as="span" color="white">
              {user.fullName}
            </Text>
            <Text as="span" color="gray.400">
              {" "}
              @{user.userName}
            </Text>
            <Text as="span" color="gray.400">
              {FormatDate(replyData.reatedAt) }
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
        </Flex>
      </Flex>
    </Flex>
  );
}
