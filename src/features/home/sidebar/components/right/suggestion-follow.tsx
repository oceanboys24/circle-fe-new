import { Flex, Heading, Stack } from "@chakra-ui/react";
import { SuggestionFollowLoop } from "@/components/user-profile-other.tsx";
import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "@/config/axios";

export default function SuggestionFollow() {
  const { data } = useQuery({
    queryKey: ["SuggestionUser"],
    queryFn: async () => {
      const response = await axiosInstance.get(`/v1/suggest`);
      return response.data.data;
    },
    // refetchOnReconnect: false,
    // refetchOnWindowFocus: false,
  });

  return (
    <Stack bgColor="#272726" rounded="lg" p="3">
      <Heading>Suggestion For You</Heading>
      <Flex direction="column" gap="2">
        {data?.map((suggest: any) => (
          <SuggestionFollowLoop searchUserData={suggest} key={suggest.id} />
        ))}
      </Flex>
    </Stack>
  );
}
