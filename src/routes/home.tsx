import LayoutMain from "@/layout/layout-main.tsx";
import SidebarLeft from "@/features/home/sidebar/sidebar-left";
import SidebarRight from "@/features/home/sidebar/sidebar-right";
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