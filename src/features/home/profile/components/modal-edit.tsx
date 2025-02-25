import {
  Box,
  Button,
  defineStyle,
  DialogActionTrigger,
  DialogRoot,
  Field,
  Flex,
  Image,
  Input,
  Stack,
  Textarea,
} from "@chakra-ui/react";
import {
  DialogBody,
  DialogCloseTrigger,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog.tsx";
import { Avatar } from "@/components/ui/avatar.tsx";
import { useAuthStore } from "@/store/useAuth";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { axiosInstance } from "@/config/axios";
import { useRef, useState } from "react";
import { toaster } from "@/components/ui/toaster";

interface EditProfile {
  fullName: string;
  userName: string;
  bio: string;
  avatarUrl?: string;
  bannerUrl?: string;
}

export default function ModalEdit() {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useAuthStore();
  const { handleSubmit, register, reset } = useForm<EditProfile>();
  const inputFileRef = useRef<HTMLInputElement | null>(null);

  const {
    ref: registerImagesRef,
    onChange: registerImagesOnChange,
    ...restRegisterImages
  } = register("avatarUrl");

  const {
    ref: registerImages2Ref,
    onChange: registerImages2OnChange,
    ...restRegisterImages2
  } = register("bannerUrl");

  const queryClient = useQueryClient();

  const { mutateAsync: UploadImage } = useMutation({
    mutationKey: ["Upload"],
    mutationFn: async (formData?: FormData) => {
      if (!formData) return null;
      const response = await axiosInstance.post(
        "/v1/upload/edit-profile",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      return response.data;
    },
    onError: (error: any) => {
      const errorMessage = error.response?.data?.message;
      toaster.create({
        title: errorMessage,
        type: "error",
        duration: 3000,
      });
    },
    onSuccess: async (data) => {
      toaster.create({
        title: data.message,
        type: "success",
        duration: 3000,
      });
    },
  });

  const { mutateAsync: EditProfileMutate } = useMutation({
    mutationKey: ["EditProject"],
    mutationFn: async (form?: EditProfile) => {
      const response = await axiosInstance.patch("/v1/profile", form);
      return response.data;
    },
    onError: (error: any) => {
      toaster.create({
        title: "Error Edit Profile",
        type: "error",
        duration: 3000,
      });
    },
    onSuccess: async (data) => {
      queryClient.invalidateQueries({
        queryKey : ["Threads"]
      })
      toaster.create({
        title: "Sucess Edit Profile",
        type: "success",
        duration: 3000,
      });
    },
  });

  const onSubmit = async (data: EditProfile) => {
    let imageUrl: string | undefined = undefined;
    let imageUrl2: string | undefined = undefined;

    if (data.avatarUrl && data.avatarUrl.length > 0) {
      const formData = new FormData();
      formData.append("avatarUrl", data.avatarUrl[0]);

      const uploadResult = await UploadImage(formData);
      imageUrl = uploadResult?.responseData.avatarUrl;
    }

    if (data.bannerUrl && data.bannerUrl.length > 0) {
      const formData = new FormData();
      formData.append("bannerUrl", data.bannerUrl[0]);

      const uploadResult2 = await UploadImage(formData);

      imageUrl2 = uploadResult2?.responseData.bannerUrl;
    }

    const ProfileData: EditProfile = {
      bio: data.bio,
      fullName: data.fullName,
      userName: data.userName,
      avatarUrl: imageUrl,
      bannerUrl: imageUrl2,
    };

    await EditProfileMutate(ProfileData);
    reset();
    setIsOpen(false);
  };
  return (
    <DialogRoot open={isOpen} onOpenChange={(state) => setIsOpen(state.open)}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          color="white"
          borderColor="white"
          rounded="4xl"
          flexShrink={0}
        >
          Edit Profile
        </Button>
      </DialogTrigger>
      <DialogContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <DialogHeader>
            <DialogTitle color="#d2d2d2">Edit Profile</DialogTitle>
          </DialogHeader>
          <DialogBody>
            <Image
              src={
                user.profile?.bannerUrl ??
                "https://api.dicebear.com/9.x/glass/svg"
              }
              maxH={"100px"}
              minW={"464px"}
              fontSize="40px"
              rounded="lg"
            />
            <Box
              cursor="pointer"
              as="label"
              marginLeft="205px"
              marginTop="-70px"
              position={"absolute"}
              backgroundColor={"transparent"}
            >
              <Image
                src="/public/add.svg"
                width={"50px"}
                backgroundColor={"transparent"}
              />
              <input
                type="file"
                hidden
                {...restRegisterImages2}
                onChange={(e) => {
                  registerImages2OnChange(e);
                }}
                ref={(e) => {
                  registerImages2Ref(e);
                  inputFileRef.current = e;
                }}
              />
            </Box>
            <Flex justify="space-between" h="100px">
              <Avatar
                src={
                  user.profile?.avatarUrl ??
                  "https://api.dicebear.com/9.x/bottts/svg"
                } 
               w={'100px'}
               h={"100px"}
                bottom="50px"
                left="30px"
              />
              <Box
                cursor="pointer"
                as="label"
                marginLeft="65px"
                marginTop="-15px"
                position={"absolute"}
                backgroundColor={"transparent"}
              >
                <Image
                  src="/public/add.svg"
                  width={"30px"}
                  backgroundColor={"transparent"}
                />
                <input
                  type="file"
                  hidden
                  {...restRegisterImages}
                  onChange={(e) => {
                    registerImagesOnChange(e);
                  }}
                  ref={(e) => {
                    registerImagesRef(e);
                    inputFileRef.current = e;
                  }}
                />
              </Box>
            </Flex>
            <Stack
              direction="column"
              gap="1"
              p="1"
              position="relative"
              mt="-10"
            >
              <Field.Root gap="4">
                <Box pos="relative" w="full">
                  <Input
                    className="peer"
                    placeholder=""
                    {...register("fullName")}
                  />
                  <Field.Label css={floatingStyles}>Name</Field.Label>
                </Box>
                <Box pos="relative" w="full">
                  <Input
                    className="peer"
                    placeholder=""
                    {...register("userName")}
                  />
                  <Field.Label css={floatingStyles}>Username</Field.Label>
                </Box>
                <Box pos="relative" w="full">
                  <Textarea
                    {...register("bio")}
                    className="peer"
                    autoresize
                    placeholder=""
                  />
                  <Field.Label css={floatingStyles}>Bio</Field.Label>
                </Box>
              </Field.Root>
            </Stack>
          </DialogBody>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsOpen(false)}>
              Cancel
            </Button>
            <Button bgColor="#04a51e" color="white" rounded="2xl" type="submit">
              Save
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </DialogRoot>
  );
}

const floatingStyles = defineStyle({
  pos: "absolute",
  bg: "bg",
  px: "0.5",
  top: "-3",
  insetStart: "2",
  fontWeight: "normal",
  pointerEvents: "none",
  transition: "position",
  _peerPlaceholderShown: {
    color: "fg.muted",
    top: "2.5",
    insetStart: "3",
  },
  _peerFocusVisible: {
    color: "fg",
    top: "-3",
    insetStart: "2",
  },
});
