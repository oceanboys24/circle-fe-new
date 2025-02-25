import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { ThreadDetails } from "../types/thread-detail-types";
import { axiosInstance } from "@/config/axios";
import { useAuthStore } from "@/store/useAuth";

export default function useLikeUnlikeComment(thread: ThreadDetails) {
  const [isLiked, setIsLiked] = useState(thread.isLiked);
  const queryClient = useQueryClient();
  const { user } = useAuthStore();
  const { mutateAsync: LikeMutate } = useMutation({
    mutationKey: ["Likes"],
    mutationFn: async (data: { threadId: string; userId: string }) => {
      const response = await axiosInstance.post("/v1/likes", data);
      return response.data;
    },

    onSuccess: async () => {
      queryClient.invalidateQueries({
        queryKey: ["Thread-Detail"],
      });
    },
  });

  const { mutateAsync: UnlikeMutate } = useMutation({
    mutationKey: ["Unlike"],
    mutationFn: async (data: { threadId: string; userId: string }) => {
      const response = await axiosInstance.delete(`/v1/likes/${data.threadId}`);
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["Thread-Detail"],
      });
    },
  });

  async function onClickLike() {
    setIsLiked(true);
    const threadId = thread.id;
    const userId = user.id;

    await LikeMutate({ threadId, userId });
  }
  async function onClickUnlike() {
    setIsLiked(false);
    const threadId = thread.id;
    const userId = user.id;

    await UnlikeMutate({ threadId, userId });
  }

  return { isLiked, onClickLike, onClickUnlike };
}
