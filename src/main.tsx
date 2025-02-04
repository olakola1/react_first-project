import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/globals.scss'
import { HomePage } from "./pages";
import { CatalogPage} from "./pages";
import store from "./store/store.ts";
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import {Header} from './components/Header';
import {FavoriteRecipes} from "./components/FavoriteRecipes";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route path="/" element={<Navigate to="/home" />} />
                    <Route path="/home" element={<HomePage />} />
                    <Route path="/catalog" element={<CatalogPage />} />
                    <Route path="/favorite" element={<FavoriteRecipes />} />
                </Routes>
            </BrowserRouter>
        </Provider>
    </StrictMode>
);
