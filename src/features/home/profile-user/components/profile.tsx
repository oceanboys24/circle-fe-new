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
import { userSession } from "@/utils/dummy-data/userSession";
import { Post } from "../../home/utils/post";
import { useReducer } from "react";
interface ProfileDetailProps extends BoxProps {
  postData: Post;
}

export default function ProfileUser({ postData }: ProfileDetailProps) {
  const [, forceUpdate] = useReducer((state) => state + 1, 0);
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
        <Heading fontSize="3xl">{postData.user.fullName}</Heading>
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
          src={postData.user.avatarUrl}
          size="4xl"
          bottom="50px"
          left="30px"
        />
        <Button
          variant={"outline"}
          borderColor={"white"}
          rounded={"full"}
          onClick={() => {
            postData.isLiked = !postData.isLiked;
            forceUpdate();
          }}
        >
          {postData.isLiked ? "Follow" : "Unfollow"}
        </Button>
      </Flex>
      <Stack direction="column" gap="1" p="1" position="relative" mt="-14">
        <Heading>{postData.user.fullName}</Heading>
        <Text textStyle="md" color="#5a5a5b">
          @{postData.user.username}
        </Text>
        <Text>{postData.content}</Text>
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
