import { Box, Button, Flex, GridItem, Heading, MenuContent, MenuItem, MenuRoot, MenuTrigger, Tabs } from "@chakra-ui/react";
import FollowingTabs from "@/features/home/follows/components/following";
import FollowersTabs from "@/features/home/follows/components/followers";
import { MdMenu } from "react-icons/md";
import { NavLink } from "react-router-dom";

export default function FollowsPages() {
  return (
    <GridItem colSpan={{ base: 4, md: 2 }}>
      <Box  p="4" display={"flex"} justifyContent="space-between">
        <Heading p="4" fontSize="3xl">
          Follows
        </Heading>
        <Flex position={"relative"} zIndex={"1000"}>
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
      </Box>

      <Tabs.Root defaultValue="post" w="full" h={"100vh"}>
        <Tabs.List w="full">
          <Tabs.Trigger
            value="post"
            w="full"
            justifyContent="center"
            fontSize="xl"
          >
            Followers
          </Tabs.Trigger>
          <Tabs.Trigger
            value="media"
            w="full"
            justifyContent="center"
            fontSize="xl"
          >
            Following
          </Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="post" w="full">
          <FollowersTabs />
        </Tabs.Content>
        <Tabs.Content value="media" w="full">
          <FollowingTabs />
        </Tabs.Content>
      </Tabs.Root>
    </GridItem>
  );
}
