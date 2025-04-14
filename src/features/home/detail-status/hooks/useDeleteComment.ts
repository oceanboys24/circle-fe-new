import { useAuthStore } from "@/store/useAuth";
import { Reply } from "../../detail-status/types/thread-detail-types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { axiosInstance } from "@/config/axios";
import { toaster } from "@/components/ui/toaster";

export default function useDeleteReply(replyData: Reply) {
  const { user } = useAuthStore();
  const queryClient = useQueryClient();
  const { mutateAsync: DeleteReply, isPending: isPendingDelete } = useMutation(
    {
      mutationKey: ["Delete-Comment"],
      mutationFn: async (data: { replyId: string; userId: string }) => {
        const response = await axiosInstance.delete(
          `/v1/reply/${data.replyId}`
        );
        return response.data;
      },
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: ["Thread-Detail"],
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
    const replyId = replyData.id;
    const userId = user.id;

    await DeleteReply({ replyId, userId });
  }

  return { isPendingDelete, onClickDelete };
}
