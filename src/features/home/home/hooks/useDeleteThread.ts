import { useAuthStore } from "@/store/useAuth";
import { ThreadDetails } from "../../detail-status/types/thread-detail-types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { axiosInstance } from "@/config/axios";
import { toaster } from "@/components/ui/toaster";

export default function useDeleteThread(thread: ThreadDetails) {
  const { user } = useAuthStore();
  const queryClient = useQueryClient();
  const { mutateAsync: DeleteThread, isPending: isPendingDelete } = useMutation(
    {
      mutationKey: ["Delete-Threads"],
      mutationFn: async (data: { threadId: string; userId: string }) => {
        const response = await axiosInstance.delete(
          `/v1/threads/${data.threadId}`
        );
        return response.data;
      },
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: ["Threads"],
        });
        toaster.create({
          title: "Success Delete",
          type: "success",
          duration: 3000,
        });
      },
    }
  );

  async function onClickDelete() {
    const threadId = thread.id;
    const userId = user.id;

    await DeleteThread({ threadId, userId });
  }

  return { isPendingDelete, onClickDelete };
}
