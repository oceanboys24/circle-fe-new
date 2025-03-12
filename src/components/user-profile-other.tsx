import { BoxProps, Button, Flex, Text } from "@chakra-ui/react";
import { Avatar } from "@/components/ui/avatar.tsx";
import { UserProfileDetailEntitiy } from "@/entities/profile-details";
import useFollowsSideBar from "@/features/home/sidebar/hooks/useFollowSidebar";

interface SearchUserDataProps extends BoxProps {
  searchUserData: UserProfileDetailEntitiy;
}
export function SuggestionFollowLoop({ searchUserData }: SearchUserDataProps) {
  const { onClickFollow, onClickUnfollow } = useFollowsSideBar(searchUserData);
  return (
    <Flex gap="3" justifyContent="space-between">
      <Avatar src={searchUserData.profile?.avatarUrl ?? ""} size="xl" />
      <Flex direction="column" marginEnd="auto">
        <Text>{searchUserData.fullName}</Text>
        <Text textStyle="xs" color="#5a5a5b">
          @{searchUserData.userName}
        </Text>
      </Flex>
      <Button
        variant={"outline"}
        borderColor={"white"}
        rounded={"full"}
        onClick={searchUserData.isFollow ? onClickUnfollow : onClickFollow}
      >
        {searchUserData.isFollow ? "Followed" : "Follow"}
      </Button>
    </Flex>
  );
}
