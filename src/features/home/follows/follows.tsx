import {Flex, GridItem, Heading, Tabs} from "@chakra-ui/react";
import FollowingTabs from "@/features/home/follows/components/following";
import FollowersTabs from "@/features/home/follows/components/followers";

export default function FollowsPages() {
    return (
        <GridItem colSpan={2}>
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
        </GridItem>
    )
}