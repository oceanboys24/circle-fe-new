import { useMutation, useQueryClient } from "@tanstack/react-query";
import { axiosInstance } from "@/config/axios";
import { useForm } from "react-hook-form";
import { toaster } from "@/components/ui/toaster";
import { useRef, useState } from "react";
import { ThreadDetails } from "../../detail-status/types/thread-detail-types";

export type FormInputs = {
  content: string;
  imageContent: FileList;
};

export default function useEditThread(thread: ThreadDetails) {
  const [previewURL, setPreviewURL] = useState<string | null>(null);
  const {
    handleSubmit,
    register,
    reset: resetContent,
    setValue,
  } = useForm<FormInputs>();
  const queryClient = useQueryClient();
  const inputFileRef = useRef<HTMLInputElement | null>(null);
  const {
    ref: registerImagesRef,
    onChange: registerImagesOnChange,
    ...restRegisterImages
  } = register("imageContent");

  // Edit Thread
  const { mutateAsync: CreateThread, isPending : isPendingEdit } = useMutation({
    mutationKey: ["EditThread"],
    mutationFn: async (formData: FormData) => {
      const response = await axiosInstance.patch(
        `/v1/threads/${thread.id}`,
        formData
      );
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
        queryKey: ["Threads"],
      });
      toaster.create({
        title: data.message,
        type: "success",
        duration: 3000,
      });
    },
  });

  function onClickFile() {
    inputFileRef?.current?.click();
  }

  function handlePreview(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.files) {
      const file = e.target.files[0];
      const url = URL.createObjectURL(file);
      setPreviewURL(url);
    }
  }

  const onSubmit = async (data: FormInputs) => {
    const formData = new FormData();

    //Form Content
    formData.append("content", data.content);

    if (data.imageContent?.length > 0) {
      formData.append("imageContent", data.imageContent[0]);
    }

    await CreateThread(formData);
    resetContent();
    setPreviewURL(null);
  };
  return {
    register,
    onSubmit,
    handleSubmit,
    handlePreview,
    previewURL,
    setPreviewURL,
    isPendingEdit,
    restRegisterImages,
    onClickFile,
    registerImagesOnChange,
    registerImagesRef,
    inputFileRef,
    setValue,
    resetContent,
  };
}
