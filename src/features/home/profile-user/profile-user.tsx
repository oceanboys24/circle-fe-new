import { GridItem } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import ProfileUser from "./components/profile";
import TabsProfileUser from "./components/tabs-user";
import { postDatas } from "@/utils/dummy-data/postList";

export default function ProfileUserPage() {
  const { id } = useParams();
  return (
    <GridItem colSpan={{ base: 4, md: 2 }} overflow={"hidden"}>
      {/* <ProfileUser  /> */}
      <TabsProfileUser />
    </GridItem>
  );
}
