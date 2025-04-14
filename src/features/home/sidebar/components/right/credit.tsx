import { Box, Flex, Image, Stack, Text } from "@chakra-ui/react";
import { Avatar } from "@/components/ui/avatar.tsx";

export default function Credit() {
  return (
    <Stack bgColor="#272726" rounded="lg" p="3">
      <Flex align="center" gap="2">
        <Text textStyle="md" color="white">
          Developed by
        </Text>
        <Text textStyle="md" color="white" fontWeight="bold">
          Vian
        </Text>
        <Text color="gray.400">•</Text>
        <Avatar src="/github.svg" size="xs" />
        <Avatar src="/linkedin.svg" size="xs" />
        <Avatar src="/facebook.svg" size="xs" />
        <Avatar src="/instagram.svg" size="xs" />
      </Flex>
      <Flex alignItems="center">
        <Text fontSize="13px" color="gray.400">
          Powered by
        </Text>
        <Image src="/main-logo.svg" boxSize="16px" mx="2" />
        <Text fontSize="13px" color="gray.400">
          Dumbways Indonesia • #1 Coding Bootcamp
        </Text>
      </Flex>
    </Stack>
  );
}
