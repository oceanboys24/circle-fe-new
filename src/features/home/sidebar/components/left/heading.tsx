import { Flex, Heading } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

export default function HeadingSideBarLeft() {
  return (
    <Flex pl="10" p="5" justifyContent={{md : "center", lg : "start"}}>
      <NavLink to="/">
        <Heading color="#04a41f" textAlign="start" fontSize={{md : "5xl", lg: "7xl"}} pl={{ lg : 8}} >
          circle
        </Heading>
      </NavLink>
    </Flex>
  );
}
