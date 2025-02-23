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
interface ProfileDetailProps extends BoxProps {
  profileData: UserProfileDetailEntitiy;
}

export default function ProfileUser({ profileData }: ProfileDetailProps) {
  
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
        src="https://api.dicebear.com/9.x/glass/svg?seed=Muhammad Alfiandi Rizki"
        maxH={"200px"}
        fontSize="40px"
        rounded="lg"
      />
      <Flex justify="space-between" h="100px">
        <Avatar
          src=""
          size="4xl"
          bottom="50px"
          left="30px"
        />
        <Button
          variant={"outline"}
          borderColor={"white"}
          rounded={"full"}
        >
         Follow
        </Button>
      </Flex>
      <Stack direction="column" gap="1" p="1" position="relative" mt="-14">
        <Heading>{profileData.fullName}</Heading>
        <Text textStyle="md" color="#5a5a5b">
          @{profileData.userName}
        </Text>
        <Text>{profileData.profile?.bio}</Text>
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
