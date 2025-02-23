import { GridItem, Spinner, Stack, Text } from "@chakra-ui/react";
import InputPost from "@/features/home/home/components/input-thread";
import StatusPost from "@/features/home/home/components/thread-post";
import HeadingHome from "@/features/home/home/components/heading";
import { postDatas } from "@/utils/dummy-data/postList";
import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "@/config/axios";
import { ThreadEntities } from "@/entities/thread-entities";
import ThreadPost from "@/features/home/home/components/thread-post";

export default function HomeBar() {
  const {
    data: threads = [],
    isLoading,
    isError,
  } = useQuery<ThreadEntities[]>({
    queryKey: ["Threads"],
    queryFn: async () => {
      const response = await axiosInstance.get("/v1/threads", {});
      console.log(response.data.data);
      return response.data.data;
    },
  });

  return (
    <GridItem colSpan={{ base: 4, md: 2 }}>
      <Stack
        w="full"
        overflow="hidden"
        borderLeftWidth="2px"
        borderRightWidth="2px"
      >
        <HeadingHome />
        <InputPost />

        {isLoading && <Spinner size="lg" alignSelf="center" />}

        {isError && <Text color="red.500">Not Found</Text>}

        {threads.map((thread) => (
          <ThreadPost thread={thread} key={thread.id} />
        ))}
      </Stack>
    </GridItem>
  );
}
