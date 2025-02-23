import { Avatar } from "@/components/ui/avatar";
import { BoxProps, Button, Flex, Text } from "@chakra-ui/react";
import { SearchUser } from "./types/user-search";

interface SearchUserDataProps extends BoxProps {
  searchUserData: SearchUser;
}

export default function SearchCard({ searchUserData }: SearchUserDataProps) {
  return (
    <Flex justify={"space-between"} key={searchUserData.id}>
      <Flex align={"center"}>
        <Avatar
          src={
            searchUserData?.profile?.avatarUrl ??
            "https://api.dicebear.com/9.x/bottts/svg"
          }
          size={"xl"}
        />
      </Flex>
      <Flex direction={"column"} marginEnd={"auto"} ml={4}>
        <Text fontWeight={"bold"}>{searchUserData.fullName}</Text>
        <Text color={"#909090"}>@{searchUserData.userName}</Text>
        <Text truncate maxW={"500px"}>
          {searchUserData?.profile?.bio ?? "Lorem Ipsum"}
        </Text>
      </Flex>
      <Flex align={"center"}>
        <Button variant={"outline"} borderColor={"white"} rounded={"full"}>
          Follow
        </Button>
      </Flex>
    </Flex>
  );
}
