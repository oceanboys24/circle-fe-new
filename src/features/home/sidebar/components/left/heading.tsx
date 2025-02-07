import { Button, Flex, Heading, MenuContent, MenuItem, MenuRoot, MenuTrigger } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

export default function HeadingSideBarLeft() {
  return (
    <Flex pl="10">
      <NavLink to="/">
        <Heading size="7xl" color="#04a41f" textAlign="start">
          circle
        </Heading>
      </NavLink>
    </Flex>
  );
}
