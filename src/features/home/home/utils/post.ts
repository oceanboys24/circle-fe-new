export type UserPost = {
  fullName: string;
  userName: string;
  avatarUrl: string;
};

export type Reply = {
  id: string;
  user: UserPost;
  content: string;
  contentImage: string;
  likesCount: number;
  replyCount: number;
  reatedAt: string;
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
