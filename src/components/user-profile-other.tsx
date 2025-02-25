import { Button, Flex, Text } from "@chakra-ui/react";
import { Avatar } from "@/components/ui/avatar.tsx";
import { DataSuggestionFollow } from "@/features/home/sidebar/utils/suggestion";
import { Followers, useAuthStore } from "@/store/useAuth";
import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "@/config/axios";

export function SuggestionFollowLoop() {
  return DataSuggestionFollow.map(
    ({ name, username, image, isFollowing }, index) => (
      <Flex gap="3" justifyContent="space-between" key={index}>
        <Avatar src={image} size="xl" />
        <Flex direction="column" marginEnd="auto">
          <Text>{name}</Text>
          <Text textStyle="xs" color="#5a5a5b">
            @{username}
          </Text>
        </Flex>
        <Button
          variant="outline"
          style={{
            color: isFollowing ? "#747475" : "white",
            borderColor: isFollowing ? "#747475" : "white",
          }}
          rounded="4xl"
        >
          {isFollowing ? "Following" : "Follow"}
        </Button>
      </Flex>
    )
  );
}
