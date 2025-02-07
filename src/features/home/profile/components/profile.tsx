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

export default function Profile() {
  return (
    <Stack p="4" overflow="hidden">
      <Box p="4" display={"flex"} justifyContent="space-between" >
        <NavLink to="/">
          <Avatar
            src="./src/assets/line-arrow-left.svg"
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
      <Image src="./src/assets/cover.svg" fontSize="40px" rounded="lg" />
      <Flex justify="space-between" h="100px">
        <Avatar
          src="./src/assets/tyler.png"
          size="4xl"
          bottom="50px"
          left="30px"
        />
        <ModalEdit />
      </Flex>
      <Stack direction="column" gap="1" p="1" position="relative" mt="-14">
        <Heading>Tyler, The Creator</Heading>
        <Text textStyle="md" color="#5a5a5b">
          @tylerokonma
        </Text>
        <Text>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          indusenturies, but also the leap into electronic typesetting
        </Text>
        <Text textStyle="md">
          <Text as="span" fontWeight="bold" color="white">
            291
          </Text>
          <Text as="span" color="gray.400">
            {" "}
            Following{" "}
          </Text>
          <Text as="span" fontWeight="bold" color="white">
            400
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
