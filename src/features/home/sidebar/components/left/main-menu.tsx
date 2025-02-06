import { Button, Flex, Icon, Image, Stack, Text } from "@chakra-ui/react";
import { NavLink, useLocation } from "react-router-dom";
import { NavListMenu } from "../../utils/form-menu";
import HeadingSideBarLeft from "./heading";
export default function MainMenu() {
  const { pathname } = useLocation();
  return (
    <Flex direction="column" p="1" w="full">
      <HeadingSideBarLeft />
      <Flex direction="column" p="5" px="10" gap="3">
        {NavListMenu.map(({ label, logo, path }, index) => (
          <NavLink to={path}>
            <Stack
              direction="row"
              _hover={{ bg: "#333333", rounded: "lg" }}
              key={index}
              p="3"
            >
              <Icon fontSize="45px">
                <Image
                  src={pathname === path ? logo.bold : logo.outline}
                  fontSize="40px"
                />
              </Icon>
              <Text p="1" fontWeight="bold">
                {label}
              </Text>
            </Stack>
          </NavLink>
        ))}

        <Button
          type="submit"
          size="xl"
          colorPalette="green"
          rounded="4xl"
          fontSize="2xl"
        >
          Create Post
        </Button>
      </Flex>
    </Flex>
  );
}
