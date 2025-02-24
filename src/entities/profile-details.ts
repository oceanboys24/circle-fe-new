import { ProfileEntity } from "./profile-entities";

export interface ThreadDetailsEntity {
  id: string;
  content: string;
  imageContent: string | null;
  userId: string;
  createdAt: string;
  updatedAt: string;
}

export interface UserProfileDetailEntitiy {
  id: string;
  fullName: string;
  email: string;
  userName: string;
  createdAt: string;
  updatedAt: string;
  isFollow : boolean;
  thread: ThreadDetailsEntity[];
  followers: any[]; 
  following: any[];
  likes: any[];
  profile: ProfileEntity | null;
  Replies: any[];
}
