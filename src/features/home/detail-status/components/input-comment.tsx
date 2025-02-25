import { Button, Input, Stack, Image, Float, Flex } from "@chakra-ui/react";
import { Avatar } from "@/components/ui/avatar.tsx";
import {
  FileUploadRoot,
  FileUploadTrigger,
} from "@/components/ui/file-upload.tsx";
import { userSession } from "@/utils/dummy-data/userSession";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { axiosInstance } from "@/config/axios";
import { toaster } from "@/components/ui/toaster";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { useRef, useState } from "react";
import { CloseButton } from "@/components/ui/close-button";
import { useAuthStore } from "@/store/useAuth";

type FormInputs = {
  content: string;
  contentImage: FileList;
  threadId: string;
};
export default function InputComment() {
  const [previewURL, setPreviewURL] = useState<string | null>(null);
  const { user } = useAuthStore();
  const queryClient = useQueryClient();
  const { handleSubmit, register, reset, setValue } = useForm<FormInputs>();
  const inputFileRef = useRef<HTMLInputElement | null>(null);
  const { id: threadIdUser } = useParams();
  const {
    ref: registerImagesRef,
    onChange: registerImagesOnChange,
    ...restRegisterImages
  } = register("contentImage");

  const { mutateAsync: UploadImage } = useMutation({
    mutationKey: ["Upload-Comment"],
    mutationFn: async (formData?: FormData) => {
      if (!formData) return null;
      const response = await axiosInstance.post(
        "/v1/upload/comment",
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
  });

  // Create Thread
  const { mutateAsync: CreateComment } = useMutation({
    mutationKey: ["CreateComment"],
    mutationFn: async (data: {
      imageContent?: string;
      content: string;
      threadId: string;
    }) => {
      const response = await axiosInstance.post("/v1/reply", data);
      return response.data;
    },
    onError: (error: any) => {
      const errorMessage = error.response?.data?.details;
      toaster.create({
        title: errorMessage,
        type: "error",
        duration: 3000,
      });
    },
    onSuccess: async (data) => {
      queryClient.invalidateQueries({
        queryKey: ["Thread-Detail"],
      });
      toaster.create({
        title: "Success Create",
        type: "success",
        duration: 3000,
      });
    },
  });

  function handlePreview(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.files) {
      const file = e.target.files[0];
      const url = URL.createObjectURL(file);
      setPreviewURL(url);
    }
  }
  const onSubmit = async (data: FormInputs) => {
    let imageUrl: string | undefined = undefined;

    if (data.contentImage && data.contentImage.length > 0) {
      const formData = new FormData();
      formData.append("contentImage", data.contentImage[0]);

      const uploadResult = await UploadImage(formData);
      imageUrl = uploadResult?.data;
    }

    const CommentData: {
      imageContent?: string;
      content: string;
      threadId: string;
    } = {
      content: data.content,
      threadId: threadIdUser ?? " ",
      ...(imageUrl ? { contentImage: imageUrl } : {}),
    };

    await CreateComment(CommentData);
    reset();
    setPreviewURL(null);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack direction="row" p="4">
        <Avatar src={user.profile.avatarUrl ?? " "} size="xl" />
        <Input
          placeholder="Type your reply!"
          variant="flushed"
          p="4"
          {...register("content")}
          textStyle="lg"
          minW="xs"
        />
        <FileUploadRoot
          w="auto"
          {...restRegisterImages}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            handlePreview(e);
            registerImagesOnChange(e);
          }}
          ref={(e) => {
            registerImagesRef(e);
            inputFileRef.current = e;
          }}
        >
          <FileUploadTrigger>
            <Button size="xl" bgColor={"transparent"}>
              <Avatar
                src="/src/assets/gallery-add.svg"
                size="md"
                shape="square"
                bgColor={"transparent"}
              />
            </Button>
          </FileUploadTrigger>
        </FileUploadRoot>
        <Button
          type="submit"
          size="xs"
          colorPalette="green"
          rounded="4xl"
          fontSize="xl"
          p="5"
        >
          Reply
        </Button>
      </Stack>
      <Flex w={"full"} justify={"center"}>
        <Stack
          w="xs"
          justify={"center"}
          p="2"
          position={"relative"}
          display={previewURL ? "flex" : "none"}
        >
          <Image
            objectFit="contain"
            maxHeight="300px"
            maxWidth="300px"
            src={previewURL ?? ""}
            borderRadius="md"
          />
          {previewURL && (
            <Float>
              <CloseButton
                onClick={() => {
                  setPreviewURL(null);
                  setValue("contentImage", new DataTransfer().files);
                }}
                variant={"solid"}
                rounded={"full"}
                size={"xs"}
              />
            </Float>
          )}
        </Stack>
      </Flex>
    </form>
  );
}
