import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {Provider} from "@/components/ui/provider"
import ResetPassword from "@/Pages/ResetPassword/ResetPassword.tsx";
import '@fontsource-variable/plus-jakarta-sans';


createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Provider>
            <ResetPassword/>
        </Provider>
    </StrictMode>,
)
