import {
  Box,
  Icon,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function Logout() {
  return (
    <Box p="10" alignSelf="center" gridRow="4" >
      <Link to="/login">
        <Stack
          alignSelf={"end"}
          direction="row"
          _hover={{ bg: "#333333", rounded: "lg" }}
          p="3"
        >
          <Icon fontSize="45px">
            <Image src="/src/assets/logout.svg" fontSize="40px" />
          </Icon>
          <Text p="1" fontWeight="bold">
            Logout
          </Text>
        </Stack>
      </Link>
    </Box>
  );
}
