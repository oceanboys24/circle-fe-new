import { BoxProps, Button, Flex, Text } from "@chakra-ui/react";
import { Avatar } from "@/components/ui/avatar.tsx";
import { UserProfileDetailEntitiy } from "@/entities/profile-details";
import useFollowsSideBar from "@/features/home/sidebar/hooks/useFollowSidebar";
import { useAuthStore } from "@/store/useAuth";

interface SearchUserDataProps extends BoxProps {
  searchUserData: UserProfileDetailEntitiy;
}
export function SuggestionFollowLoop({ searchUserData }: SearchUserDataProps) {
  const { onClickFollow, onClickUnfollow } = useFollowsSideBar(searchUserData);
  const { user } = useAuthStore();

  const hasFollowedMe = searchUserData.following.some(
    (f) => f.followersId === user.id
  );

  console.log(searchUserData)
  return (
    <Flex gap="3" justifyContent="space-between" >
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
        alignSelf={'center'}
      >
        {searchUserData.isFollow
          ? "Followed"
          : hasFollowedMe
          ? "Follow Back"
          : "Follow"}
      </Button>
    </Flex>
  );
}
