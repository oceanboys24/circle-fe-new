import { Followers, Following } from "@/store/useAuth";
import { ProfileEntity } from "./profile-entities";

export interface UserEntity {
  id: string;
  email: string;
  fullName: string;
  userName: string;
  password: string;
  followers: Followers[];
  following: Following[];
  profile: ProfileEntity;
  createdAt: Date;
  updatedAt: Date;
}
