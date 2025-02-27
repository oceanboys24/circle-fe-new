import { useAuthStore } from "@/store/useAuth";
import { Box, Icon, Image, Stack, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { toaster } from "@/components/ui/toaster";

export default function Logout() {
  const navigate = useNavigate();
  const { logout } = useAuthStore();
  async function onLogout() {
    logout();
    Cookies.remove("token");
    toaster.create({
      title: "Success Logout",
      type: "success",
      duration: 3000,
    });

    setTimeout(() => {
      navigate("/login");
    }, 1000);
  }

  return (
    <Box p="10" alignSelf="center" gridRow="4">
      <Stack
        alignSelf={"end"}
        direction="row"
        _hover={{ bg: "#333333", rounded: "lg" }}
        p="3"
        cursor={"pointer"}
        onClick={onLogout}
      >
        <Icon fontSize="45px">
          <Image src="/public/logout.svg" fontSize="40px" />
        </Icon>
        <Text p="1" fontWeight="bold">
          Logout
        </Text>
      </Stack>
    </Box>
  );
}
