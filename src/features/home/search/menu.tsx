import { MenuRoot, MenuTrigger, Button, MenuContent, MenuItem } from "@chakra-ui/react";
import { MdMenu } from "react-icons/md";
import { NavLink } from "react-router-dom";

export default function MenuSearch() {
  return (
    <MenuRoot>
      <MenuTrigger asChild>
        <Button
          variant="solid"
          backgroundColor="gray.600"
          size="sm"
          display={{ base: "block", md: "none" }}
          zIndex="1000"
        >
          <MdMenu color="" />
        </Button>
      </MenuTrigger>
      <MenuContent
        zIndex="1000"
        top={"40px"}
        right={"10px"}
        position="absolute"
      >
        <MenuItem value="new-txt">
          <NavLink to="/">Home</NavLink>
        </MenuItem>
        <MenuItem value="new-txt">
          <NavLink to="/search">Search</NavLink>
        </MenuItem>{" "}
        <MenuItem value="new-txt">
          <NavLink to="/follows">Follows</NavLink>
        </MenuItem>{" "}
        <MenuItem value="new-txt">
          <NavLink to="/profile">Profile</NavLink>
        </MenuItem>
      </MenuContent>
    </MenuRoot>
  );
}
