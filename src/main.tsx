import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {Provider} from "@/components/ui/provider"
// @ts-ignore
import '@fontsource-variable/plus-jakarta-sans';
import LayoutPages from "@/Layout/Layout.tsx";


createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Provider>
            <LayoutPages></LayoutPages>
        </Provider>
    </StrictMode>,
)
