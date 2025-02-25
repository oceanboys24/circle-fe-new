import {
  GridItem,
  HStack,
  Spinner,
  Stack,
  TagStartElement,
  Text,
} from "@chakra-ui/react";
import InputPost from "@/features/home/home/components/input-thread";
import HeadingHome from "@/features/home/home/components/heading";
import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "@/config/axios";
import { ThreadEntities } from "@/entities/thread-entities";
import ThreadPost from "@/features/home/home/components/thread-post";
import {
  PaginationItems,
  PaginationNextTrigger,
  PaginationPrevTrigger,
  PaginationRoot,
} from "@/components/ui/pagination";
import { useState } from "react";

export default function HomeBar() {
  const [page, setPage] = useState<number>(1);
  const limit = 5;

  const {
    data: threads = [],
    isLoading,
    isError,
  } = useQuery<ThreadEntities[]>({
    queryKey: ["Threads", page],
    queryFn: async () => {
      const response = await axiosInstance.get(
        `/v1/threads?page=${page}&limit=${limit}`
      );

      return response.data.data;
    },
  });

  const { data: total } = useQuery<number>({
    queryKey: ["Total"],
    queryFn: async () => {
      const response = await axiosInstance.get(`/v1/threads/all`);
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
      <PaginationRoot
        size={"lg"}
        count={total ?? 0}
        page={page}
        onPageChange={(e) => setPage(e.page)}
      >
        <HStack justifyContent={"center"}>
          <PaginationPrevTrigger />
          <PaginationItems />
          <PaginationNextTrigger />
        </HStack>
      </PaginationRoot>
    </GridItem>
  );
}
