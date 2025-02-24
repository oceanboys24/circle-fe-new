import { GridItem, Spinner, Text } from "@chakra-ui/react";
import UserStatus from "@/features/home/detail-status/components/user-status";
import InputComment from "@/features/home/detail-status/components/input-comment";
import Comments from "@/features/home/detail-status/components/comments";
import { data, useParams } from "react-router-dom";
import { postDatas } from "@/utils/dummy-data/postList";
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
      <UserStatus detailThread={detailData.data!} />
      <InputComment />
      {detailData?.data?.replies?.map((reply: any) => (
        <Comments replyData={reply!} postData={detailData.data} />
      ))}
    </GridItem>
  );
}
