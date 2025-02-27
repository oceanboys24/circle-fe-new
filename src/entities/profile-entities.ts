
export interface ProfileEntity {
  id: string;
  avatarUrl?: string | null;
  bannerUrl?: string | null;
  bio?: string | null;
  createdAt: Date;
  updatedAt: Date;
}
