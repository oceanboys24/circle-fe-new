import { useMutation, useQueryClient } from "@tanstack/react-query";
import { axiosInstance } from "@/config/axios";
import { useForm } from "react-hook-form";
import { toaster } from "@/components/ui/toaster";
import { useRef, useState } from "react";

type FormInputs = {
  content: string;
  imageContent: FileList;
};

export default function useInputThread() {
  const [previewURL, setPreviewURL] = useState<string | null>(null);
  const { handleSubmit, register, reset, setValue } = useForm<FormInputs>();
  const queryClient = useQueryClient();
  const inputFileRef = useRef<HTMLInputElement | null>(null);
  const {
    ref: registerImagesRef,
    onChange: registerImagesOnChange,
    ...restRegisterImages
  } = register("imageContent");

  const { mutateAsync: UploadImage } = useMutation({
    mutationKey: ["Upload"],
    mutationFn: async (formData?: FormData) => {
      if (!formData) return null;
      const response = await axiosInstance.post("/v1/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
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

  // Create Thread
  const { mutateAsync: CreateThread, isPending } = useMutation({
    mutationKey: ["CreateThread"],
    mutationFn: async (data: { imageContent?: string; content: string }) => {
      const response = await axiosInstance.post("/v1/threads", data);
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
    let imageUrl: string | undefined = undefined;

    if (data.imageContent && data.imageContent.length > 0) {
      const formData = new FormData();
      formData.append("imageContent", data.imageContent[0]);

      const uploadResult = await UploadImage(formData);
      imageUrl = uploadResult?.data;
    }

    const ThreadData: { imageContent?: string; content: string } = {
      content: data.content,
      ...(imageUrl ? { imageContent: imageUrl } : {}),
    };

    await CreateThread(ThreadData);
    reset();
    setPreviewURL(null);
  };
  return {
    register,
    onSubmit,
    handleSubmit,
    handlePreview,
    previewURL,
    setPreviewURL,
    isPending,
    restRegisterImages,
    onClickFile,
    registerImagesOnChange,
    registerImagesRef,
    inputFileRef,
    setValue,
    reset,
  };
}
