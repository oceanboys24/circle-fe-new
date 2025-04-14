import { UserProfile } from "@/store/useAuth";

export type UserPost = {
  fullName: string;
  userName: string;
  avatarUrl: string;
};

export type Reply = {
  id: string;
  createdAt: Date;
  user: UserPost;
  content: string;
  contentImage: string;
  likesCount: number;
  replyCount: number;
  reatedAt: string;
  userId: string;
};

export type Post = {
  id: string;
  user: UserPost;
  content: string;
  likesCount: number;
  repliesCount: number;
  replies?: Reply[];
  isLiked: boolean;
  createdAt: string;
};
