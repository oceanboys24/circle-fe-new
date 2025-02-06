import { Avatar } from "@/components/ui/avatar";
import { DialogBody, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Box, DialogRoot, Flex, Heading,Image } from "@chakra-ui/react";
import Comments from "./components/comments";
import InputComment from "./components/input-comment";
import UserStatus from "./components/user-status";

export function DetailStatusImage() {
    return (
        <DialogRoot size="full" motionPreset="slide-in-bottom">
        <DialogTrigger asChild>
          
        </DialogTrigger>

        <DialogContent>
          <DialogBody>
            <Flex direction="row" p="5" gap="4">
              <Box flexGrow={2} justifyContent="start">
                <Image src={dummyPhoto} w="full" maxH="4xl" fit={"contain"}/>
              </Box>
              <Box maxW="xl" flexGrow={1}>
                <Flex gap="1">
                  <Avatar
                    src="./src/assets/line-arrow-left.svg"
                    size="xs"
                    rounded="lg"
                    bgColor="#09090b"
                  />
                  <Heading fontWeight="bold" fontSize="3xl" color="#d2d2d2">
                    Status
                  </Heading>
                </Flex>
                <UserStatus />

                <InputComment />
                <Comments />
                <Comments />
                <Comments />
              </Box>
            </Flex>
          </DialogBody>
        </DialogContent>
      </DialogRoot>
    )
}