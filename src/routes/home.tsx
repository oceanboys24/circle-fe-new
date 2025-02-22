import SidebarLeft from "@/features/home/sidebar/sidebar-left";
import SidebarRight from "@/features/home/sidebar/sidebar-right";
import { Outlet } from "react-router-dom";
import ProtectedLayout from "@/layout/layout-main.tsx";
import { axiosInstance } from "@/config/axios";
import { useAuthStore } from "@/store/useAuth";
import { useQuery } from "@tanstack/react-query";
import Cookies from "js-cookie";
import { Navigate } from "react-router-dom";


export default function HomeRoute() {
  const { setUser, user } = useAuthStore();
  const { isLoading } = useQuery({
    queryKey: ["CheckAuthToken"],
    queryFn: async () => {
      const response = await axiosInstance.post("/v1/auth/check", {});
      setUser(response.data.data);
      return response.data;
    },
    enabled: !!Cookies.get("token"),
  });

  if (!isLoading && !user?.id) return <Navigate to={"/login"} />;

  return (
    <ProtectedLayout>
      <SidebarLeft />
      <Outlet />
      <SidebarRight />
    </ProtectedLayout>
  );
}
