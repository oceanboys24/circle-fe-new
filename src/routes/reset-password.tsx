import ResetPassword from "@/features/auth/reset-password/reset-password.tsx";
import LayoutPages from "@/layout/layout-auth.tsx";

export default function ResetPasswordPages() {
    return (
        <LayoutPages>
            <ResetPassword/>
        </LayoutPages>
    )
}