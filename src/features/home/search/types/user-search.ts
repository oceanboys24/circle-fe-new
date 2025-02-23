import { ProfileEntity } from "@/entities/profile-entities";
import { UserEntity } from "@/entities/user-entities";

export type SearchUser = UserEntity & {
    profile: ProfileEntity;
  };