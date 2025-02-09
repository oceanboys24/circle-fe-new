import { Flex,Text } from "@chakra-ui/react";

interface NotFoundProps {
  text: string
}

export default function NotFoundSearch({text}: NotFoundProps)   {
  return (
    <Flex
      flexGrow={"1"}
      justifyContent={"center"}
      alignItems="center"
      direction="column"
    >
      <Text fontWeight="semibold" fontSize="2xl">
        No results for {text}
      </Text>
      <Text maxW="300px" color="#909090" textAlign="center">
        Try searching for something else or check the spelling of what you typed
      </Text>
    </Flex>
  );
}
