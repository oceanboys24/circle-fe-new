import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Avatar } from "@/components/ui/avatar.tsx";
import ModalEdit from "@/features/home/profile/components/modal-edit.tsx";
import { NavLink } from "react-router-dom";
import { MdMenu } from "react-icons/md";
import { useAuthStore } from "@/store/useAuth";

export default function Profile() {
  const userLogin = useAuthStore((state) => state.user);
  
  return (
    <Stack p="4" overflow="hidden">
      <Box p="4" display={"flex"} justifyContent="space-between">
        <NavLink to="/">
          <Avatar
            src="/line-arrow-left.svg"
            size="xs"
            rounded="lg"
            bgColor="transparent"
            _hover={{ backgroundColor: "#333333" }}
          />
        </NavLink>
        <Heading fontSize="3xl">Profile</Heading>
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
      <Image
        src={
          userLogin?.profile?.bannerUrl
            ? userLogin.profile.bannerUrl
            : "https://api.dicebear.com/9.x/glass/svg"
        }
        maxH={"200px"}

        fontSize="40px"
        rounded="lg"
      />
      <Flex justify="space-between" h="100px">
        <Avatar
          src={
            userLogin?.profile?.avatarUrl ??
            "https://api.dicebear.com/9.x/bottts/svg"
          }
          size="2xl"
          w={"100px"}
          h={"100px"}
          bottom="50px"
          left="30px"
        />

        <ModalEdit />
      </Flex>
      <Stack direction="column" gap="1" p="1" position="relative" mt="-14">
        <Heading>{userLogin.fullName}</Heading>
        <Text textStyle="md" color="#5a5a5b">
          @{userLogin.userName}
        </Text>
        <Text>{userLogin.profile ? userLogin.profile.bio : "Lorem Ipsum"}</Text>
        <Text textStyle="md">
          <Text as="span" fontWeight="bold" color="white">
            {userLogin.following.length}
          </Text>
          <Text as="span" color="gray.400">
            {" "}
            Following{" "}
          </Text>
          <Text as="span" fontWeight="bold" color="white">
            {userLogin.followers.length}
          </Text>
          <Text as="span" color="gray.400">
            {" "}
            Followers
          </Text>
        </Text>
      </Stack>
    </Stack>
  );
}
