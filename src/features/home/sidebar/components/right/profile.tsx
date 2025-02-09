import { Flex, Heading, Image, Stack, Text } from "@chakra-ui/react";
import { Avatar } from "@/components/ui/avatar.tsx";
import { useLocation } from "react-router-dom";
import { userSession } from "@/utils/dummy-data/userSession";
import ModalEdit from "@/features/home/profile/components/modal-edit";

export default function ProfileSidebarRight() {
  const { pathname } = useLocation();
  const dataSession = userSession;

  return (
    <Stack
      bgColor="#272726"
      p="4"
      rounded="lg"
      style={{ display: pathname === "/profile" ? "none" : "" }}
    >
      <Heading>My Profile</Heading>
      <Image
        src={dataSession.backgroundUrl}
        maxH={"100px"}
        fontSize="40px"
        rounded="lg"
      />
      <Flex justify="space-between" h="100px">
        <Avatar
          src={dataSession.avatarUrl}
          size="4xl"
          bottom="50px"
          left="30px"
        />
        <ModalEdit />
      </Flex>
      <Stack direction="column" gap="1" p="1" position="relative" mt="-14">
        <Heading>{dataSession.fullName}</Heading>
        <Text textStyle="md" color="#5a5a5b">
          @{dataSession.username}
        </Text>
        <Text>{dataSession.bio}</Text>
        <Text textStyle="md">
          <Text as="span" fontWeight="bold" color="white">
            {dataSession.followingsCount}
          </Text>
          <Text as="span" color="gray.400">
            {" "}
            Following{" "}
          </Text>
          <Text as="span" fontWeight="bold" color="white">
            {dataSession.followersCount}
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
