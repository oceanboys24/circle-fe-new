import LayoutMain from "@/layout/layout-main.tsx";
import SidebarLeft from "@/features/sidebar-components/sidebar-left.tsx";
import SidebarRight from "@/features/sidebar-components/sidebar-right.tsx";
import ProfileBar from "@/features/profile-components/profile-bar.tsx";

export default function HomePages() {
    return (
        <LayoutMain>
            <SidebarLeft/>
            <ProfileBar/>
            <SidebarRight/>
        </LayoutMain>
    )
}