import HomeLogo from "@/assets/home.svg";
import HomeLogoBold from "@/assets/home-bold.svg";
import SearchLogo from "@/assets/user-search.svg";
import SearchLogoBold from "@/assets/user-search-bold.svg";
import HeartLogo from "@/assets/heart-menu.svg";
import HeartLogoBold from "@/assets/heart-bold.svg";
import ProfileLogo from "@/assets/profile.svg";
import ProfileLogoBold from "@/assets/profile-bold.svg";


interface NavLinkMenu {
  label: string;
  path: string;
  logo: {
    bold: string;
    outline: string;
  };
}

export const NavListMenu: NavLinkMenu[] = [
  {
    label: "Home",
    path: "/",
    logo: {
      outline: HomeLogo,
      bold: HomeLogoBold,
    },
  },
  {
    label: "Search",
    path: "/search",
    logo: {
      outline: SearchLogo,
      bold: SearchLogoBold,
    },
  },
  {
    label: "Follows",
    path : "/follows",
    logo : {
        outline : HeartLogo,
        bold : HeartLogoBold
    }
  },
  {
    label : "Profile",
    path : "/profile",
    logo : {
        outline : ProfileLogo,
        bold : ProfileLogoBold
    }
  }
];
