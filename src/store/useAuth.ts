import { ProfileEntity } from "@/entities/profile-entities";
import { UserEntity } from "@/entities/user-entities";
import { create } from "zustand";
import { devtools } from "zustand/middleware";

export type Followers = {
  id: string;
  followersId: string;
  followingId: string;
  followers: UserProfile;
  createdAt: string;
  updatedAt: string;
};
export type Following = {
  id: string;
  followersId: string;
  followingId: string;
  following: UserProfile;
  createdAt: string;
  updatedAt: string;
};

export type UserProfile = UserEntity & {
  profile: ProfileEntity;
  followers: Followers[];
  following: Following[];
};

type useAuthStore = {
  user: UserProfile;
  setUser: (payload: UserProfile) => void;
  logout: () => void;
};

export const useAuthStore = create<useAuthStore>()(
  devtools((set) => ({
    user: {} as UserProfile,
    setUser: (payload: UserProfile) =>
      set((state) => ({ user: { ...state.user, ...payload } })),
    logout: () => set(() => ({ user: {} as UserProfile })),
  }))
);
