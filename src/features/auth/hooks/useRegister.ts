import { toaster } from "@/components/ui/toaster";
import { useForm } from "react-hook-form";
import {
  registerSchema,
  registerSchemaDTO,
} from "@/utils/schema/auth-schema.ts";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { axiosInstance } from "@/config/axios";
import { useMutation } from "@tanstack/react-query";

export default function useRegister() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<registerSchemaDTO>({
    mode: "onChange",
    resolver: zodResolver(registerSchema),
  });
  const navigate = useNavigate();

  const { mutateAsync, isPending } = useMutation({
    mutationKey: ["Register-Auth"],
    mutationFn: async (data: registerSchemaDTO) => {
      const response = await axiosInstance.post("/v1/auth/register", data);
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
      navigate({ pathname: "/" });
    },
  });

  async function onSubmit(data: registerSchemaDTO) {
    await mutateAsync(data);
    reset();
  }
  return { handleSubmit, onSubmit, errors, isPending, register };
}
