import { Avatar } from "@/components/ui/avatar";
import { axiosInstance } from "@/config/axios";
import { useAuthStore } from "@/store/useAuth";
import {  Flex, Spinner, Text } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";

export default function FollowingTabs() {
  const userLogin = useAuthStore((set) => set.user);
  const { data: dataFollowing, isLoading } = useQuery({
    queryKey: ["FollowingTabs"],
    queryFn: async () => {
      const response = await axiosInstance.get(
        `/v1/follows/following/${userLogin.id}`
      );
      return response.data.data;
    },
  });

  {
    isLoading ?? <Spinner />;
  }

  return (
    <Flex direction="column" p="4" gap="4">
      {dataFollowing?.map((following: any) => (
        <Flex key={following.id} direction="column" gap="3">
          <Flex gap="3" justifyContent="space-between">
            <Avatar src={following.profile?.avatarUrl ?? ""} size="xl" />
            <Flex direction="column" marginEnd="auto">
              <Text>{following.fullName} </Text>
              <Text textStyle="xs" color="#5a5a5b">
                @{following.userName}
              </Text>
            </Flex>
          </Flex>
        </Flex>
      ))}
    </Flex>
  );
}
