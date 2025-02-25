import { Flex, Heading, Image, Stack, Text } from "@chakra-ui/react";
import { Avatar } from "@/components/ui/avatar.tsx";
import { useLocation } from "react-router-dom";
import { userSession } from "@/utils/dummy-data/userSession";
import ModalEdit from "@/features/home/profile/components/modal-edit";
import { useAuthStore } from "@/store/useAuth";

export default function ProfileSidebarRight() {
  const { pathname } = useLocation();
  const userLogin = useAuthStore((state) => state.user);

  return (
    <Stack
      bgColor="#272726"
      p="4"
      rounded="lg"
      style={{ display: pathname === "/profile" ? "none" : "" }}
    >
      <Heading>My Profile</Heading>
      <Image
        src={
          userLogin?.profile?.bannerUrl
            ? userLogin.profile.bannerUrl
            : "https://api.dicebear.com/9.x/glass/svg"
        }
        maxH={"100px"}
        minH={"100px"}
        fontSize="40px"
        rounded="lg"
      />
      <Flex justify="space-between" h="100px" >
        <Avatar
          src={
            userLogin?.profile?.avatarUrl ??
            "https://api.dicebear.com/9.x/bottts/svg"
          }
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
        <Text>{userLogin.profile?.bio ?? " "}</Text>
        <Text textStyle="md">
          <Text as="span" fontWeight="bold" color="white">
            121
          </Text>
          <Text as="span" color="gray.400">
            {" "}
            Following{" "}
          </Text>
          <Text as="span" fontWeight="bold" color="white">
            12
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
