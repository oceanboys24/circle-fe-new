import { ProfileEntity } from "@/entities/profile-entities";
import { UserProfile } from "@/store/useAuth";
export type ThreadDetails = {
  id: string;
  content: string;
  imageContent: string;
  likes: string;
  replies: string;
  user: UserProfile;
  CreatedAt: Date;
  UpdatedAt: Date;
};
