// store/catalog/reduser.ts
import { createSlice } from '@reduxjs/toolkit';
import type { Recipe } from '../types.ts';
import { addRecipeToServer, deleteRecipeFromServer, fetchRecipes } from './thunk';


export interface RecipeState {
    items: Recipe[];
    loading: boolean;
    error: string | null;
}

const initialState: RecipeState = {
    items: [],
    loading: false,
    error: null
};

const recipeSlice = createSlice({
    name: 'recipes',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchRecipes.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchRecipes.fulfilled, (state, action) => {
                state.loading = false;
                state.items = action.payload; // Получаем свежие данные с сервера
            })
            .addCase(fetchRecipes.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            })
            .addCase(addRecipeToServer.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(addRecipeToServer.fulfilled, (state, action) => {
                state.loading = false;
                state.items.push(action.payload);
                localStorage.setItem('recipes', JSON.stringify(state.items));
            })
            .addCase(addRecipeToServer.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            })
            .addCase(deleteRecipeFromServer.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(deleteRecipeFromServer.fulfilled, (state, action) => {
                state.loading = false;
                state.items = state.items.filter(recipe => recipe.id !== action.payload);
                localStorage.setItem('recipes', JSON.stringify(state.items));
            })
            .addCase(deleteRecipeFromServer.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            });
    }
});

export const { actions: recipeActions, reducer: recipeReducer } = recipeSlice;
export default recipeReducer;