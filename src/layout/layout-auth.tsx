import { useAuthStore } from "@/store/useAuth";
import { Flex } from "@chakra-ui/react";
import { Navigate, Outlet } from "react-router-dom";
import Cookies from "js-cookie";

export default function AuthLayout() {
  const token = Cookies.get("token");
  if (token) return <Navigate to={"/"} />;
  return (
    <Flex height="100vh" width="100vw" bgColor="black" justify="center">
      <Outlet />
    </Flex>
  );
}
