interface UserSession {
    fullName : string
    username : string
    followersCount : number
    followingsCount : number
    avatarUrl: string 
    backgroundUrl: string
    bio : string
}

export const userSession: UserSession = {
    fullName: 'Muhammad Alfiandi Rizki',
    username: 'oceanboys',
    backgroundUrl:
      'https://api.dicebear.com/9.x/glass/svg?seed=Muhammad Alfiandi Rizki',
    avatarUrl:
      'https://api.dicebear.com/9.x/notionists/svg?seed=Muhammad Alfiandi Rizki',
    followersCount: 231,
    followingsCount: 24,
    bio: "Saya atmin kamu member",
  };