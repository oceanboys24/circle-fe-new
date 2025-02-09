import { Flex, Image, Text } from "@chakra-ui/react";
import { Avatar } from "@/components/ui/avatar.tsx";
import { DataTweetDummy } from "../utils/dummy";

export default function StatusPost() {
  return (
    <Flex direction="column">
      {DataTweetDummy.map(
        ({ name, username, avatar, tweet, likes, replies }, index) => (
          <Flex key={index} borderBottomWidth={"2px"}  p="4" gap="3" >
            <Avatar src={avatar} size="xl" />
            <Flex direction="column" pl="3" gap="3">
              <Flex textStyle="md" direction="row" gap="3">
                <Text as="span" color="white" fontWeight="semibold">
                  {name}
                </Text>
                <Text as="span" color="gray.400">
                    @{username}
                </Text>
                <Text as="span" color="gray.400">
                  • 6h
                </Text>
              </Flex>
              <Text>
              {tweet}
              </Text>
              <Flex direction="row" gap="5">
                <Flex gap="1" alignItems="center">
                  <Image src="./src/assets/heart.svg" w="30px" />
                  <Text>{likes}</Text>
                </Flex>
                <Flex gap="1" alignItems="center">
                  <Image src="./src/assets/message-text.svg" w="30px" />
                  <Text>{replies} Replies</Text>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        )
      )}
    </Flex>
  );
}
