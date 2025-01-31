import LoginAuth from "@/features/auth-components/login/login-auth.tsx";
import LayoutPages from "@/layout/layout-auth.tsx";

export default function LoginAuthPages() {
    return (
        <LayoutPages>
            <LoginAuth/>
        </LayoutPages>
    )
}