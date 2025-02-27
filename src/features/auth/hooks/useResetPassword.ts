import { toaster } from "@/components/ui/toaster";
import { useForm } from "react-hook-form";
import {
  resetPasswordDTO,
  resetPasswordSchema,
} from "@/utils/schema/auth-schema.ts";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate, useSearchParams } from "react-router-dom";
import { axiosInstance } from "@/config/axios";
import { useMutation } from "@tanstack/react-query";

export default function useResetPassword() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<resetPasswordDTO>({
    mode: "onChange",
    resolver: zodResolver(resetPasswordSchema),
  });
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");

  const { mutateAsync, isPending } = useMutation({
    mutationKey: ["Reset-Auth"],
    mutationFn: async (data: { newPassword: string }) => {
      const response = await axiosInstance.post(
        "/v1/auth/reset-password",
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
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
      navigate({ pathname: "/login" });
    },
  });

  async function onSubmit(data: resetPasswordDTO) {
    const { confirmPassword, ...formData } = data;
    await mutateAsync(formData);
    reset();
  }
  return { handleSubmit, onSubmit, errors, isPending, register };
}
