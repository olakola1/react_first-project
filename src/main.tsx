import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/globals.scss'
import { HomePage } from "./pages";
import { CatalogPage} from "./pages";
import store from "./store/store.ts";
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from "react-router";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/home" element={<HomePage />} />
                    <Route path="/catalog" element={<CatalogPage />} />
                </Routes>
            </BrowserRouter>
        </Provider>
    </StrictMode>
);
