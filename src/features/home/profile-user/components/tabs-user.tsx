import { postDatas } from "@/utils/dummy-data/postList";
import { Flex, Tabs, Grid, Image } from "@chakra-ui/react";
import StatusPost from "../../home/components/status-post";

export default function TabsProfileUser() {
  return (
    <Flex>
      <Tabs.Root defaultValue="post" w="full">
        <Tabs.List w="full">
          <Tabs.Trigger value="post" w="full" justifyContent="center">
            All Post
          </Tabs.Trigger>
          <Tabs.Trigger value="media" w="full" justifyContent="center">
            Media
          </Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="post" w="full">
          {postDatas.map((postData) => (
            <StatusPost postData={postData} key={postData.id} />
          ))}
        </Tabs.Content>
        <Tabs.Content value="media" w="full">
          <Grid templateColumns="repeat(3, 1fr)" gap="6">
            <Image h="full" w="full" src="/src/assets/dummy-1.jpg" />
            <Image h="full" w="full" src="/src/assets/dummy-1.jpg" />
            <Image h="full" w="full" src="/src/assets/dummy-1.jpg" />
            <Image h="full" w="full" src="/src/assets/dummy-1.jpg" />
          </Grid>
        </Tabs.Content>
      </Tabs.Root>
    </Flex>
  );
}
