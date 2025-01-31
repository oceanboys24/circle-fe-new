import {createBrowserRouter} from "react-router-dom";
import ForgotPasswordPages from "@/routes/forgot-password.tsx";
import LoginAuthPages from "@/routes/login.tsx";
import RegisterAuthPages from "@/routes/register.tsx";
import ResetPasswordPages from "@/routes/reset-password.tsx";
import HomePages from "@/routes/home.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePages/>
    },
    {
        path: "/forgot-password",
        element: <ForgotPasswordPages/>,
    },
    {
        path: "/login",
        element: <LoginAuthPages/>
    },
    {
        path: "/register",
        element: <RegisterAuthPages/>
    },
    {
        path: "/reset-password",
        element: <ResetPasswordPages/>
    }
])


export default router