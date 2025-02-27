import { useForm } from "react-hook-form";
import { loginSchema, loginSchemaDTO } from "@/utils/schema/auth-schema.ts";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "@/store/useAuth";
import { axiosInstance } from "@/config/axios";
import Cookies from "js-cookie";
import { toaster } from "@/components/ui/toaster";
import { useMutation } from "@tanstack/react-query";

export default function useLoginAuth() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<loginSchemaDTO>({
    mode: "onChange",
    resolver: zodResolver(loginSchema),
  });
  const { setUser } = useAuthStore();
  const navigate = useNavigate();

  const { mutateAsync, isPending } = useMutation({
    mutationKey: ["Login-Auth"],
    mutationFn: async (data: loginSchemaDTO) => {
      const response = await axiosInstance.post("/v1/auth/login", data);
      setUser(response.data.user);
      Cookies.set("token", response.data.token, { expires: 1 });
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

  function triggerLogin(data: loginSchemaDTO) {
    mutateAsync(data);
  }

  return {
    handleSubmit,
    triggerLogin,
    errors,
    register,
    isPending,
  };
}
