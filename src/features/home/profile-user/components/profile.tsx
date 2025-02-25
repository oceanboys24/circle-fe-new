import {
  Box,
  BoxProps,
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
import { NavLink } from "react-router-dom";
import { MdMenu } from "react-icons/md";
import { UserProfileDetailEntitiy } from "@/entities/profile-details";
import { useAuthStore } from "@/store/useAuth";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { axiosInstance } from "@/config/axios";
interface ProfileDetailProps extends BoxProps {
  profileData: UserProfileDetailEntitiy;
}

type FollowsPayload = {
  followingId: string;
  userId: string;
};

export default function ProfileUser({ profileData }: ProfileDetailProps) {
  const { user } = useAuthStore();
  const { mutateAsync: LikeMutate } = useMutation({
    mutationKey: ["Follow"],
    mutationFn: async (data: FollowsPayload) => {
      const response = await axiosInstance.post("/v1/follows/follow", data);

      return response.data;
    },
  });

  async function onClickFollow() {
    const followingId = profileData.id;
    const userId = user.id;

    await LikeMutate({ followingId: followingId, userId: userId });
  }

  const { mutateAsync: UnlikeMutate } = useMutation({
    mutationKey: ["Unfollow"],
    mutationFn: async (data: FollowsPayload) => {
      const response = await axiosInstance.post("/v1/follows/unfollow", data);

      return response.data;
    },
  });

  async function onClickUnfollow() {
    const profileId = profileData.id;
    const userId = user.id;

    await UnlikeMutate({ followingId: profileId, userId });
  }

  return (
    <Stack p="4" overflow="hidden">
      <Box p="4" display={"flex"}>
        <NavLink to="/">
          <Avatar
            src="/src/assets/line-arrow-left.svg"
            size="xs"
            rounded="lg"
            bgColor="transparent"
            _hover={{ backgroundColor: "#333333" }}
          />
        </NavLink>
        <Heading fontSize="3xl">{profileData.fullName}</Heading>
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
          profileData.profile?.bannerUrl ??
          "https://api.dicebear.com/9.x/glass/svg"
        }
        maxH={"200px"}
        fontSize="40px"
        rounded="lg"
      />
      <Flex justify="space-between" h="100px">
        <Avatar
          src={
            profileData.profile?.avatarUrl ??
            "https://api.dicebear.com/9.x/bottts/svg"
          }
          size="4xl"
          bottom="50px"
          left="30px"
        />
        <Button
          variant={"outline"}
          borderColor={"white"}
          rounded={"full"}
          onClick={profileData.isFollow ? onClickUnfollow : onClickFollow}
        >
          {profileData.isFollow  ? "Followed" : "Follow"}
        </Button>
      </Flex>
      <Stack direction="column" gap="1" p="1" position="relative" mt="-14">
        <Heading>{profileData.fullName}</Heading>
        <Text textStyle="md" color="#5a5a5b">
          @{profileData.userName}
        </Text>
        <Text>{profileData?.profile?.bio ?? " "}</Text>
        <Text textStyle="md">
          <Text as="span" fontWeight="bold" color="white">
            100
          </Text>
          <Text as="span" color="gray.400">
            {" "}
            Following{" "}
          </Text>
          <Text as="span" fontWeight="bold" color="white">
            200
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
