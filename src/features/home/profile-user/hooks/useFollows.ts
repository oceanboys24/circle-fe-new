import { useAuthStore } from "@/store/useAuth";
import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { axiosInstance } from "@/config/axios";
import { UserProfileDetailEntitiy } from "@/entities/profile-details";
type FollowsPayload = {
  followingId: string;
  userId: string;
};

export default  function useFollows(
  profileData: UserProfileDetailEntitiy
) {
  const { user } = useAuthStore();

  const queryClient = useQueryClient();
  const { mutateAsync: LikeMutate } = useMutation({
    mutationKey: ["Follow"],
    mutationFn: async (data: FollowsPayload) => {
      const response = await axiosInstance.post("/v1/follows/follow", data);

      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["User-Detail"],
      });
    },
  });

  async function onClickFollow() {
    const followingId = profileData.id;
    const userId = user.id;

    await LikeMutate({ followingId: followingId, userId: userId });
  }

  const { mutateAsync: UnlikeMutate } = useMutation({
    mutationKey: ["Unfollow"],
    mutationFn: async (data: FollowsPayload) => {
      const response = await axiosInstance.post("/v1/follows/unfollow", data);

      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["User-Detail"],
      });
    },
  });

  async function onClickUnfollow() {
    const profileId = profileData.id;
    const userId = user.id;

    await UnlikeMutate({ followingId: profileId, userId });
  }

  return { onClickFollow, onClickUnfollow };
}
