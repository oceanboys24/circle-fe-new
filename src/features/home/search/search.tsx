import { Button, Flex, GridItem, Input, MenuContent, MenuItem, MenuRoot, MenuTrigger, Text } from "@chakra-ui/react";
import { InputGroup } from "@/components/ui/input-group.tsx";

import { LuSearch } from "react-icons/lu";
import { MdMenu } from "react-icons/md";
import { NavLink } from "react-router-dom";

export default function SearchPages() {
  return (
    <GridItem colSpan={{ base: 4, md: 2 }}>
      <Flex direction="column" height={"100vh"}>
        <Flex p="5" gap="2">
          <InputGroup flex="1" startElement={<LuSearch />}>
            <Input
              bgColor="#3F3F3F"
              rounded="2xl"
              placeholder="Search Your Friend"
            />
          </InputGroup>
          <Flex>
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
          </Flex>
        </Flex>
        <Flex
          flexGrow={"1"}
          justifyContent={"center"}
          alignItems="center"
          direction="column"
        >
          <Text fontWeight="semibold" fontSize="2xl">
            No results for "ambatukam"
          </Text>
          <Text maxW="300px" color="#909090" textAlign="center">
            Try searching for something else or check the spelling of what you
            typed
          </Text>
        </Flex>
      </Flex>
    </GridItem>
  );
}
