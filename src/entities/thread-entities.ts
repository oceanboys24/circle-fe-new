import { UserEntity } from "./user-entities";

export interface ThreadEntities {
  id: string;
  content: string;
  imageContent: string;
  userId: string;
  createdAt: string;
  user: UserEntity;
}
