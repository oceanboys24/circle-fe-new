import {Flex, Heading, Tabs} from "@chakra-ui/react";
import FollowingTabs from "@/features/follows-components/components/following.tsx";
import FollowersTabs from "@/features/follows-components/components/followers.tsx";

export default function FollowsPages() {
    return (
        <Flex direction="column" w="full">
            <Heading p="4" fontSize="3xl">
                Follows
            </Heading>
            <Tabs.Root defaultValue="post" w="full">
                <Tabs.List w="full">
                    <Tabs.Trigger value="post" w="full" justifyContent="center" fontSize="xl">
                        Followers
                    </Tabs.Trigger>
                    <Tabs.Trigger value="media" w="full" justifyContent="center" fontSize="xl">
                        Following
                    </Tabs.Trigger>
                </Tabs.List>
                <Tabs.Content value="post" w="full">
                    <FollowersTabs/>

                </Tabs.Content>
                <Tabs.Content value="media" w="full">
                    <FollowingTabs/>
                </Tabs.Content>
            </Tabs.Root>
        </Flex>
    )
}