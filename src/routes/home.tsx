import LayoutMain from "@/layout/layout-main.tsx";
import SidebarLeft from "@/features/sidebar-components/sidebar-left.tsx";
import SidebarRight from "@/features/sidebar-components/sidebar-right.tsx";
import {Outlet} from "react-router-dom";

export default function HomePages() {
    return (
        <LayoutMain>
            <SidebarLeft/>
            <Outlet/>
            <SidebarRight/>
        </LayoutMain>
    )
}