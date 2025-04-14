import { Flex, Heading, Stack } from "@chakra-ui/react";
import { SuggestionFollowLoop } from "@/components/user-profile-other.tsx";
import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "@/config/axios";
import { useAuthStore } from "@/store/useAuth";

export default function SuggestionFollow() {
  const { user } = useAuthStore();
  const { data } = useQuery({
    queryKey: ["SuggestionUser"],
    queryFn: async () => {
      const response = await axiosInstance.get(`/v1/suggest`);
      return response.data.data;
    },
  });

  const users: [] = data ?? [];

  const sortedUsers = users
    .filter((userSugest) => {
      return !userSugest.isFollow && userSugest.userName !== user.userName;
    })
    .sort((a, b) => {
      const aFollowsMe = a.following.some((f) => f.followersId === user.id)
        ? 1
        : 0;
      const bFollowsMe = b.following.some((f) => f.followersId === user.id)
        ? 1
        : 0;

      if (aFollowsMe !== bFollowsMe) {
        return bFollowsMe - aFollowsMe;
      }

      return b.followers.length - a.followers.length;
    })
    .slice(0, 6);

  return (
    <Stack bgColor="#272726" rounded="lg" p="3">
      <Heading>Suggestion For You</Heading>
      <Flex direction="column" gap="3.5">
        {sortedUsers?.map((suggest: any) => (
          <SuggestionFollowLoop searchUserData={suggest} key={suggest.id} />
        ))}
      </Flex>
    </Stack>
  );
}
