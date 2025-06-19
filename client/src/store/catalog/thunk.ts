import { createAsyncThunk } from '@reduxjs/toolkit';
import type { RecipeToCreate } from '../types.ts'; // Убедитесь в правильности пути

export const fetchRecipes = createAsyncThunk(
    'recipes/fetch',
    async (_, { rejectWithValue }) => {
        try {
            const response = await fetch('/api/recipes');
            if (!response.ok) throw new Error('Server error');
            return await response.json();
        } catch (err) {
            return rejectWithValue(err instanceof Error ? err.message : 'Unknown error');
        }
    }
);

export const addRecipeToServer = createAsyncThunk(
    'recipes/add',
    async (recipe: RecipeToCreate, { rejectWithValue }) => {
        try {
            const response = await fetch('/api/recipes', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(recipe)
            });
            if (!response.ok) throw new Error('Server error');
            return await response.json();
        } catch (err) {
            return rejectWithValue(err instanceof Error ? err.message : 'Unknown error');
        }
    }
);

export const deleteRecipeFromServer = createAsyncThunk(
    'recipes/delete',
    async (id: number, { rejectWithValue }) => {
        try {
            const response = await fetch(`/api/recipes/${id}`, {
                method: 'DELETE'
            });
            if (!response.ok) throw new Error('Server error');
            return id;
        } catch (err) {
            return rejectWithValue(err instanceof Error ? err.message : 'Unknown error');
        }
    }
);