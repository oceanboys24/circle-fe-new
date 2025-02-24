import { UserProfile } from "@/store/useAuth";

export type ThreadDetails = {
  id: string;
  content: string;
  imageContent: string;
  likes: string;
  replies?: Reply[];
  user: UserProfile;
  likesCount: number;
  repliesCount: number;
  isLiked: boolean;
  CreatedAt: Date;
  UpdatedAt: Date;
};

export type UserPost = {
  fullName: string;
  userName: string;
  avatarUrl: string;
};

export type Reply = {
  id: string;
  user: UserPost;
  content: string;
  likesCount: number;
  createdAt: Date;
};
