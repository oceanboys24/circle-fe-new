import { axiosInstance } from "@/config/axios";
import { ThreadEntities } from "@/entities/thread-entities";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

export default function usePagination() {
  const [page, setPage] = useState<number>(1);
  const limit = 10;
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
      const response = await axiosInstance.get(
        `/v1/threads?page=${page}&limit=${limit}`
      );
      return response.data.count;
    },
  });

  return { threads, isLoading, isError, total, page, setPage };
}
