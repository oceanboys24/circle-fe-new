import { createBrowserRouter } from "react-router-dom";
import ForgotPasswordPages from "@/routes/forgot-password.tsx";
import LoginAuthPages from "@/routes/login.tsx";
import RegisterAuthPages from "@/routes/register.tsx";
import ResetPasswordPages from "@/routes/reset-password.tsx";
import ProfileBar from "@/features/home/profile/profile-bar";
import SearchPages from "@/features/home/search/search";
import FollowsPages from "@/features/home/follows/follows";
import HomeBar from "@/features/home/home/HomeBar";
import NotFoundPage from "@/routes/404.tsx";
import DetailStatus from "@/features/home/detail-status/detail-status";
import ProfileUser from "@/features/home/profile-user/profile-user";
import AuthLayout from "@/layout/layout-auth";
import MainAppRoute from "@/routes/home.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainAppRoute />,
    children: [
      { index: true, element: <HomeBar /> },
      { path: "profile", element: <ProfileBar /> },
      { path: "search", element: <SearchPages /> },
      { path: "detail-status/:id", element: <DetailStatus /> },
      { path: "follows", element: <FollowsPages /> },
      { path: "profile-user/:id", element: <ProfileUser /> },
    ],
  },
  {
    element: <AuthLayout />,
    children: [
      {
        path: "/forgot-password",
        element: <ForgotPasswordPages />,
      },
      {
        path: "/login",
        element: <LoginAuthPages />,
      },
      {
        path: "/register",
        element: <RegisterAuthPages />,
      },
      {
        path: "/reset-password",
        element: <ResetPasswordPages />,
      },
    ],
  },

  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

export default router;
