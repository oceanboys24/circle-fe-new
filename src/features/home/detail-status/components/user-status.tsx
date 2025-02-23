import { BoxProps, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { Avatar } from "@/components/ui/avatar.tsx";
import { Post } from "../../home/utils/post";
import { Link } from "react-router-dom";
import { ThreadEntities } from "@/entities/thread-entities";
import { ThreadDetails } from "../types/thread-detail-types";

interface ChardStatusDetailProps extends BoxProps {
  detailThread: ThreadDetails;
}

export default function UserStatus({ detailThread }: ChardStatusDetailProps) {
  
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
          <Avatar  src={
            detailThread?.user?.profile?.avatarUrl ??
            "https://api.dicebear.com/9.x/bottts/svg"
          } size="xl" />
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

        <Flex>
          <Image src={detailThread.imageContent ?? ""}/>
        </Flex>
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
              src="/src/assets/love.svg"
              cursor={"pointer"}
            />
            <Text alignSelf={"center"}>768</Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
