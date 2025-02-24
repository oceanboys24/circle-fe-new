import { toaster } from "@/components/ui/toaster";
import { useForm } from "react-hook-form";
import {
  forgotPasswordDTO,
  forgotPasswordSchema,
} from "@/utils/schema/auth-schema.ts";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { axiosInstance } from "@/config/axios";
import { useMutation } from "@tanstack/react-query";

export default function useForgotPassword() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<forgotPasswordDTO>({
    mode: "onChange",
    resolver: zodResolver(forgotPasswordSchema),
  });
  const navigate = useNavigate();

  const { mutateAsync, isPending } = useMutation({
    mutationKey: ["Forgot-Auth"],
    mutationFn: async (data: forgotPasswordDTO) => {
      const response = await axiosInstance.post(
        "/v1/auth/forgot-password",
        data
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
      navigate({ pathname: "/login" });
    },
  });

  async function onSubmit(data: forgotPasswordDTO) {
    await mutateAsync(data);
    reset();
  }
  return { handleSubmit, onSubmit, errors, isPending, register };
}
