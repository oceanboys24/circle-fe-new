import { GridItem } from "@chakra-ui/react";
import Profile from "../profile/components/profile";
import TabsUserProfile from "../profile/components/tabs";
import { useParams } from "react-router-dom";
import ProfileUser from "./components/profile";
import TabsProfileUser from "./components/tabs-user";
import { postDatas } from "@/utils/dummy-data/postList";

export default function ProfileUserPage() {
  const { id } = useParams();
  const postData = postDatas.find((data) => data.id === id);
  return (
    <GridItem colSpan={{ base: 4, md: 2 }} overflow={"hidden"}>
      <ProfileUser postData={postData!} />
      <TabsProfileUser />
    </GridItem>
  );
}
