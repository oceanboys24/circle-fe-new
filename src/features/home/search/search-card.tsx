import { Avatar } from "@/components/ui/avatar";
import { BoxProps, Button, Flex, Text } from "@chakra-ui/react";
import { SearchUser } from "./types/user-search";
import { useReducer } from "react";

interface SearchUserDataProps extends BoxProps {
  searchUserData: SearchUser;
}

export default function SearchCard({ searchUserData }: SearchUserDataProps) {
  const [, forceUpdate] = useReducer((state) => state + 1, 0);

  return (
    <Flex justify={"space-between"} key={searchUserData.id}>
      <Flex align={"center"}>
        <Avatar src={searchUserData.avatarUrl} size={"xl"} />
      </Flex>
      <Flex direction={"column"} marginEnd={"auto"} ml={4}>
        <Text fontWeight={"bold"}>{searchUserData.fullName}</Text>
        <Text color={"#909090"}>@{searchUserData.username}</Text>
        <Text truncate maxW={"500px"}>
          {searchUserData.bio}
        </Text>
      </Flex>
      <Flex align={"center"}>
        <Button
          variant={"outline"}
          borderColor={"white"}
          rounded={"full"}
          onClick={() => {
            searchUserData.isFollowed = !searchUserData.isFollowed;
            forceUpdate();
          }}
        >
          {searchUserData.isFollowed ? "Unfollow" : "Follow"}
        </Button>
      </Flex>
    </Flex>
  );
}
