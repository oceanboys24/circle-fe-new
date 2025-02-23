import { Box, Button, Flex, Icon, Image, Stack, Text } from "@chakra-ui/react";
import { NavLink, useLocation } from "react-router-dom";
import { NavListMenu } from "../../utils/form-menu";
import HeadingSideBarLeft from "./heading";


export default function MainMenu() {
  const { pathname } = useLocation();
 
  return (
    <Flex direction="column" p="1">
      <HeadingSideBarLeft />
      <Flex direction="column" p="5" px="10" gap="3">
        {NavListMenu.map(({ label, logo, path }, index) => (
          <NavLink to={path} key={index}>
            <Stack
              direction="row"
              _hover={{ bg: "#333333", rounded: "lg" }}
              p="3"
              justifyContent={{ sm: "center", lg: "start" }}
            >
              <Icon fontSize="45px">
                <Image
                  src={pathname === path ? logo.bold : logo.outline}
                  fontSize="40px"
                />
              </Icon>
              <Text
                p="1"
                fontWeight="bold"
                display={{ md: "none", lg: "inline-block" }}
              >
                {label}
              </Text>
            </Stack>
          </NavLink>
        ))}

        {/* <Box p="2" display={"flex"} justifyContent="center">
          <Button
            alignSelf="center"
            type="submit"
            size="xl"
            colorPalette="green"
            rounded="4xl"
            fontSize="2xl"
            w={{ sm: "200px", lg: "full" }}
            maxW="300px"
            
          >
            <Text fontSize={{ sm: 25, lg: 25 }}>Create Post</Text>
          </Button>
        </Box> */}
      </Flex>
      
    </Flex>
  );
}
