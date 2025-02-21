import { Flex } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

export default function AuthLayout() {
 
  return (
    <Flex height="100vh" width="100vw" bgColor="black" justify="center">
      <Outlet />
    </Flex>
  );
}
