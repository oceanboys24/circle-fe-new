import { GridItem, Spinner, Text } from "@chakra-ui/react";
import UserStatus from "@/features/home/detail-status/components/user-status";
import InputComment from "@/features/home/detail-status/components/input-comment";
import Comments from "@/features/home/detail-status/components/comments";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "@/config/axios";

export default function DetailStatus() {
  const { id } = useParams();
  const {
    data: detailData,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["Thread-Detail", id],
    queryFn: async () => {
      const response = await axiosInstance.get(`/v1/threads/${id}`);
     
      return response.data;
    },
    enabled: !!id, //Only fetch if id exist
  });

  if (isLoading) return <Spinner />;
  if (isError) return <Text color="red.500">Failed Get Data</Text>;

  return (
    <GridItem colSpan={2}>
      <UserStatus detailThread={detailData!}  key={detailData.id}/>
      <InputComment />
      {detailData?.replies?.map((reply: any) => (
        <Comments replyData={reply!} postData={detailData} key={reply.id} />
      ))}
    </GridItem>
  );
}
