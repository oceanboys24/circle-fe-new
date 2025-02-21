import { GridItem, Stack } from "@chakra-ui/react";
import InputPost from "@/features/home/home/components/input-post";
import StatusPost from "@/features/home/home/components/status-post";
import HeadingHome from "@/features/home/home/components/heading";
import { postDatas } from "@/utils/dummy-data/postList";

export default function HomeBar() {
  
  return (
    <GridItem colSpan={{ base: 4, md: 2 }}>
      <Stack
        w="full"
        overflow="hidden"
        borderLeftWidth="2px"
        borderRightWidth="2px"
      >
        <HeadingHome />
        <InputPost />
        {postDatas.map((postData) => (
          <StatusPost postData={postData} key={postData.id} />
        ))}
      </Stack>
    </GridItem>
  );
}
