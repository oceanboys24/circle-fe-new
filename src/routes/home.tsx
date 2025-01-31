import LayoutMain from "@/layout/layout-main.tsx";
import SidebarLeft from "@/features/sidebar-components/sidebar-left.tsx";
import SidebarRight from "@/features/sidebar-components/sidebar-right.tsx";
import SearchPages from "@/features/search-components/search.tsx";

export default function HomePages() {
    return (
        <LayoutMain>
            <SidebarLeft/>
            <SearchPages/>
            <SidebarRight/>
        </LayoutMain>
    )
}