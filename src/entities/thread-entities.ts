import { UserEntity } from "./user-entities";

export interface ThreadEntities {
  id: string;
  content: string;
  imageContent: string;
  userId: string;
  CreatedAt: Date;
  UpdatedAt: Date;
  user: UserEntity;
  likesCount: number;
  repliesCount: number;
  isLiked: boolean;

}
