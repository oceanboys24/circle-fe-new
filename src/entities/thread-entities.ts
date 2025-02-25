import { UserEntity } from "./user-entities";

export interface ThreadEntities {
  id: string;
  content: string;
  imageContent: string;
  userId: string;
  createdAt: string;
  updatedAt: string;
  user: UserEntity;
  likesCount: number;
  repliesCount: number;
  isLiked: boolean;
}
