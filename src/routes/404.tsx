import LayoutPages from "@/layout/layout-auth.tsx";
import PageNotfound from "@/features/not-found-components/404.tsx";

export default function NotFoundPage() {
    return (
        <LayoutPages>
            <PageNotfound/>
        </LayoutPages>
    )
}