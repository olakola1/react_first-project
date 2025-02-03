import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Recipe } from '../../interface/interface';

const initialState: Recipe[] = [];

const recipeSlice = createSlice({
    name: 'recipes',
    initialState,
    reducers: {
        addRecipe(state, action: PayloadAction<Recipe>) {
            state.push(action.payload);
        },
        deleteRecipe(state, action: PayloadAction<number>) {
            state.splice(action.payload, 1); // Удаляем рецепт по индексу
        },
    }
});

export const { addRecipe, deleteRecipe } = recipeSlice.actions;
export default recipeSlice.reducer;