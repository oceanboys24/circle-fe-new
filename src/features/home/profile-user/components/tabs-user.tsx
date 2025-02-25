import { axiosInstance } from "@/config/axios";
import { Flex, Tabs, Grid, Image, Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import ThreadPost from "../../home/components/thread-post";
import { useQuery } from "@tanstack/react-query";

export default function TabsProfileUser() {
  const { id } = useParams();
  const { data: ThreadsAll, isLoading } = useQuery({
    queryKey: ["Thread-User"],
    queryFn: async () => {
      const response = await axiosInstance.get("/v1/threads");

      return response.data;
    },
  });

  if (isLoading) return <Spinner />;
  const userThreads =
    ThreadsAll?.data?.filter((thread: any) => thread.user.id === id) || [];

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
