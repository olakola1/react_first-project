import { createAsyncThunk } from '@reduxjs/toolkit';
import type { Recipe, RecipeToCreate } from '../types.ts';

export const fetchRecipes = createAsyncThunk(
    'recipes/fetchAll',
    async (_, { rejectWithValue }) => {
        try {
            const response = await fetch('/api/recipes');
            if (!response.ok) throw new Error('Server error');
            return await response.json() as Recipe[];
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
            return await response.json() as Recipe;
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

export const toggleFavoriteRecipe = createAsyncThunk(
    'recipes/toggleFavorite',
    async ({ id, isFavorite }: { id: number, isFavorite: boolean }, { rejectWithValue }) => {
        try {
            const response = await fetch(`/api/recipes/${id}/favorite`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ isFavorite })
            });
            if (!response.ok) throw new Error('Server error');
            return await response.json() as Recipe;
        } catch (err) {
            return rejectWithValue(err instanceof Error ? err.message : 'Unknown error');
        }
    }
);