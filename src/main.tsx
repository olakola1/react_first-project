import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/globals.scss'
import { HomePage } from "./pages";
import store from "./store/store.ts";
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from "react-router";

createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <StrictMode>
            <Provider store={store}>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                </Routes>
            </Provider>
        </StrictMode>,
    </BrowserRouter>

)
