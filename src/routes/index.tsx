import {createBrowserRouter} from "react-router-dom";
import ForgotPasswordPages from "@/routes/forgot-password.tsx";
import LoginAuthPages from "@/routes/login.tsx";
import RegisterAuthPages from "@/routes/register.tsx";
import ResetPasswordPages from "@/routes/reset-password.tsx";
import ProfileBar from "@/features/profile-components/profile-bar.tsx";
import SearchPages from "@/features/search-components/search.tsx";
import FollowsPages from "@/features/follows-components/follows.tsx";
import HomePages from "@/routes/home.tsx";
import HomeBar from "@/features/home-components/HomeBar.tsx";


const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePages/>,
        children: [
            {index: true, element: <HomeBar/>},
            {path: "profile", element: <ProfileBar/>},
            {path: "search", element: <SearchPages/>},
            {path: "follows", element: <FollowsPages/>}
        ]
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