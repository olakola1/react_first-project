import { createAsyncThunk } from "@reduxjs/toolkit";
import type { Recipe } from '../types';

// Получение списка избранных рецептов (не требует параметров)
export const fetchFavorites = createAsyncThunk(
    "favorites/fetchFavorites",
    async (_, { rejectWithValue }) => {  // Используем _ для обозначения отсутствия параметра
        try {
            const response = await fetch('/api/recipes/favorites');
            if (!response.ok) throw new Error("Server error");
            return await response.json() as Recipe[];
        } catch (err) {
            return rejectWithValue(err instanceof Error ? err.message : "Unknown error");
        }
    }
);

// Добавление в избранное
export const addFavorite = createAsyncThunk(
    "favorites/addFavorite",
    async (recipeId: number, { rejectWithValue }) => {
        try {
            const response = await fetch(`/api/recipes/${recipeId}/favorite`, {
                method: "PATCH",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ isFavorite: true })
            });
            if (!response.ok) throw new Error("Server error");
            return await response.json() as Recipe;
        } catch (err) {
            return rejectWithValue(err instanceof Error ? err.message : "Unknown error");
        }
    }
);

// Удаление из избранного
export const removeFavorite = createAsyncThunk(
    "favorites/removeFavorite",
    async (recipeId: number, { rejectWithValue }) => {
        try {
            const response = await fetch(`/api/recipes/${recipeId}/favorite`, {
                method: "PATCH",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ isFavorite: false })
            });
            if (!response.ok) throw new Error("Server error");
            return recipeId; // Возвращаем ID измененного рецепта
        } catch (err) {
            return rejectWithValue(err instanceof Error ? err.message : "Unknown error");
        }
    }
);