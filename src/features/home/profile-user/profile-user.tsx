import { GridItem, Spinner, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import ProfileUser from "./components/profile";
import TabsProfileUser from "./components/tabs-user";
import { axiosInstance } from "@/config/axios";
import { useQuery } from "@tanstack/react-query";

export default function ProfileUserPage() {
  const { id } = useParams();
  const {
    data: detailData,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["User-Detail", id],
    queryFn: async () => {
      const response = await axiosInstance.get(`/v1/users/${id}`);
      return response.data;
    },
    enabled: !!id,
  });

  console.log(detailData)

  if (isLoading) return <Spinner />;
  
  if (isError) return <Text color="red.500">Failed Get Data</Text>;

  return (
    <GridItem colSpan={{ base: 4, md: 2 }} overflow={"hidden"}>
      <ProfileUser profileData={detailData.data} />
      <TabsProfileUser />
    </GridItem>
  );
}
