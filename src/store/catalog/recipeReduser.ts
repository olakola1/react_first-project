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
            return state.filter((_, index) => index !== action.payload);
        },
    }
});

export const { addRecipe, deleteRecipe } = recipeSlice.actions;
export default recipeSlice.reducer;