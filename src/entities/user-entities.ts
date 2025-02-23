import { ProfileEntity } from "./profile-entities";

export interface UserEntity {
  id: string;
  email: string;
  fullName: string;
  userName: string;
  password: string;
  profile: ProfileEntity;
  createdAt: Date;
  updatedAt: Date;
}
