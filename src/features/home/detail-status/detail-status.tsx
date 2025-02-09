import { GridItem } from "@chakra-ui/react";
import UserStatus from "@/features/home/detail-status/components/user-status";
import InputComment from "@/features/home/detail-status/components/input-comment";
import Comments from "@/features/home/detail-status/components/comments";
import { useParams } from "react-router-dom";
import { postDatas } from "@/utils/dummy-data/postList";

export default function DetailStatus() {
  const { id } = useParams();
  const postData = postDatas.find((post) => post.id === id);
  return (
    <GridItem colSpan={2}>
      <UserStatus postData={postData!} />
      <InputComment/>
      {postData?.replies?.map((reply) => (
        <Comments replyData={reply!} postData={postData} />
      ))}
    </GridItem>
  );
}
