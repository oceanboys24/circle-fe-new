import LayoutMain from "@/layout/layout-main.tsx";
import SidebarLeft from "@/features/sidebar-components/sidebar-left.tsx";
import SidebarRight from "@/features/sidebar-components/sidebar-right.tsx";
import FollowsPages from "@/features/follows-components/follows.tsx";

export default function HomePages() {
    return (
        <LayoutMain>
            <SidebarLeft/>
            <FollowsPages/>
            <SidebarRight/>
        </LayoutMain>
    )
}