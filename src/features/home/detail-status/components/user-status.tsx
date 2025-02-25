import { BoxProps, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { Avatar } from "@/components/ui/avatar.tsx";
import { Post } from "../../home/utils/post";
import { Link } from "react-router-dom";
import { ThreadEntities } from "@/entities/thread-entities";
import { ThreadDetails } from "../types/thread-detail-types";
import convertToWIB from "@/utils/formatdate";
import useLikeUnlike from "../../home/hooks/useLikesThread";

interface ChardStatusDetailProps extends BoxProps {
  detailThread: ThreadDetails;
}

export default function UserStatus({ detailThread }: ChardStatusDetailProps) {
  const { isLiked, onClickLike, onClickUnlike } =
  useLikeUnlike(detailThread);
  return (
    <Flex p="5" borderBottomWidth="2px" direction={"column"} >
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
            Detail Status
          </Heading>
        </Flex>
      </Flex>
      <Flex direction="column" pl="3" gap="3">
        <Flex textStyle="md" direction="row" gap="3">
          <Avatar
            src={
              detailThread.user?.profile?.avatarUrl ??
              "https://api.dicebear.com/9.x/bottts/svg"
            }
            size="xl"
          />
          <Flex direction={"column"}>
            <Text as="span" color="white">
              {detailThread.user.fullName}
            </Text>
            <Text as="span" color="gray.400">
              @{detailThread.user.userName}
            </Text>
          </Flex>
        </Flex>
        <Text>{detailThread.content}</Text>

        <Flex justify={"center"}>
          <Image
            src={detailThread.imageContent ?? ""}
            maxW={"sm"}
            rounded={"sm"}
          />
        </Flex>
        <Flex gap="1" justifyContent={"end"}>
          <Text color="gray.400">
            Created at : {convertToWIB(detailThread.createdAt)}
          </Text>
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
              <Text>{detailThread.likesCount}</Text>
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
