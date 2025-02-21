import { BoxProps, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { Avatar } from "@/components/ui/avatar.tsx";
import { Post } from "../../home/utils/post";
import { Link } from "react-router-dom";
import { useReducer } from "react";

interface ChardStatusDetailProps extends BoxProps {
  postData: Post;
}

export default function UserStatus({ postData }: ChardStatusDetailProps) {
  const [, forcedUpdate] = useReducer((state) => state + 1, 0);
  return (
    <Flex p="5" borderBottomWidth="2px" direction={"column"}>
      <Flex gap="1" p={"3"}>
        <Flex gap={"2"}>
          <Link to={"/"}>
            <Avatar
              src="/src/assets/line-arrow-left.svg"
              size="xs"
              rounded="lg"
              bgColor="#09090b"
              _hover={{ backgroundColor: "#333333" }}
            />
          </Link>
          <Heading fontWeight="bold" fontSize="3xl" color="#d2d2d2">
            Status
          </Heading>
        </Flex>
      </Flex>
      <Flex direction="column" pl="3" gap="3">
        <Flex textStyle="md" direction="row" gap="3">
          <Avatar src={postData.user.avatarUrl} size="xl" />
          <Flex direction={"column"}>
            <Text as="span" color="white">
              {postData.user.fullName}
            </Text>
            <Text as="span" color="gray.400">
              @{postData.user.username}
            </Text>
          </Flex>
        </Flex>
        <Text>{postData.content}</Text>
        <Flex gap="1">
          <Text color="gray.400">11:40PM</Text>
          <Text as="span" color="gray.400">
            •
          </Text>
          <Text color="gray.400">Jul 26,2015</Text>
        </Flex>
        <Flex direction="row" gap="5">
          <Flex gap="1">
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
          <Flex gap="1">
            <Image src="/src/assets/message-text.svg" />
            <Text>{postData.repliesCount} Replies</Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
