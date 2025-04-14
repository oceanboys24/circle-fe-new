import { BoxProps, Button, Flex, Image, Text } from "@chakra-ui/react";
import { Avatar } from "@/components/ui/avatar.tsx";
import { Post, Reply } from "../../home/utils/post";

import { useAuthStore } from "@/store/useAuth";
import FormatDate from "../../home/utils/formatDate";
import { useState } from "react";
import {
  DialogRoot,
  DialogTrigger,
  DialogActionTrigger,
  DialogBody,
  DialogCloseTrigger,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import useDeleteReply from "../hooks/useDeleteComment";

interface CardReplyProps extends BoxProps {
  replyData: Reply;
}

interface ChardStatusDetailProps extends BoxProps {
  postData: Post;
}

export default function Comments({
  replyData,
  postData,
}: CardReplyProps & ChardStatusDetailProps) {
  const { user } = useAuthStore();
  const [isOpen, setOpen] = useState<boolean>(false);
  const { onClickDelete } = useDeleteReply(replyData);
  console.log(postData);

  return (
    <Flex direction="column" p="4" gap="3" borderBottomWidth="2px">
      <Flex>
        <Avatar
          src={
            replyData.user?.profile?.avatarUrl ??
            "https://api.dicebear.com/9.x/bottts/svg"
          }
          size="xl"
        />
        <Flex direction="column" pl="3" gap="3">
          <Flex textStyle="md" direction="row" gap="3">
            <Text as="span" color="white">
              {replyData.user.fullName}
            </Text>
            <Text as="span" color="gray.400">
              {" "}
              @{replyData.user.userName}
            </Text>
            <Text as="span" color="gray.400">
              {FormatDate(replyData.reatedAt)}
            </Text>
          </Flex>
          <Text>{replyData.content}</Text>
          <Flex>
            <Image
              src={replyData.contentImage}
              maxW={"xs"}
              maxH={"xs"}
              alignSelf={"center"}
            />
          </Flex>
        </Flex>
        <Flex>
          {(user.id === replyData.userId || user.id === postData.userId) && (
            <DialogRoot
              open={isOpen}
              onOpenChange={(details) => setOpen(details.open)}
            >
              <DialogTrigger asChild>
                <Button size="sm" colorPalette={"red"}>
                  Delete
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Delete Confirmation</DialogTitle>
                </DialogHeader>
                <DialogBody>
                  <p>Are you sure you want to delete this reply?</p>
                </DialogBody>
                <DialogFooter>
                  <DialogActionTrigger asChild>
                    <Button variant="outline">Cancel</Button>
                  </DialogActionTrigger>
                  <Button
                    variant="subtle"
                    size="sm"
                    colorPalette={"red"}
                    onClick={async () => {
                      onClickDelete();
                      setOpen(false);
                    }}
                  >
                    Delete
                  </Button>
                </DialogFooter>
                <DialogCloseTrigger />
              </DialogContent>
            </DialogRoot>
          )}
        </Flex>
      </Flex>
    </Flex>
  );
}
