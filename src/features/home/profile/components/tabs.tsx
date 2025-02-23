import { Flex, Grid, Image, Spinner, Tabs } from "@chakra-ui/react";
import { useAuthStore } from "@/store/useAuth";
import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "@/config/axios";
import ThreadPost from "@/features/home/home/components/thread-post";

export default function TabsUserProfile() {
  const { user } = useAuthStore();
  const {
    data: ThreadsAll,
    isLoading,
  } = useQuery({
    queryKey: ["Thread-User"],
    queryFn: async () => {
      const response = await axiosInstance.get("/v1/threads");

      return response.data;
    },
  });

  if (isLoading) return <Spinner />;
  const userThreads =
    ThreadsAll?.data?.filter((thread: any) => thread.user.id === user.id) || [];

  const mediaThreads = userThreads.filter((thread: any) => thread.imageContent);

  return (
    <Flex>
      <Tabs.Root defaultValue="post" w="full">
        <Tabs.List w="full">
          <Tabs.Trigger value="post" w="full" justifyContent="center">
            All Post
          </Tabs.Trigger>
          <Tabs.Trigger value="media" w="full" justifyContent="center">
            Media
          </Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="post" w="full">
          {userThreads.map((thread: any) => (
            <ThreadPost thread={thread} key={thread.id} />
          ))}
        </Tabs.Content>
        <Tabs.Content value="media" w="full">
          <Grid templateColumns="repeat(3, 1fr)" gap="6">
            {mediaThreads.map((thread: any) => {
              return (
                <Image
                  h="full"
                  w="full"
                  key={thread.id}
                  src={thread.imageContent}
                />
              );
            })}
          </Grid>
        </Tabs.Content>
      </Tabs.Root>
    </Flex>
  );
}
