import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {Provider} from "@/components/ui/provider"
// @ts-ignore
import '@fontsource-variable/plus-jakarta-sans';
import App from "@/App.tsx";


createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Provider>
            <App/>
        </Provider>
    </StrictMode>,
)
