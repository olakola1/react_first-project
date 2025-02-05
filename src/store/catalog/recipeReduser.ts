import { createSlice, PayloadAction } from '@reduxjs/toolkit';


export interface Recipe {
    id: number;
    name: string;
    ingredients: string;
    time: string;
    image: string;
}

export const initialState:
    Recipe[] = JSON.parse(localStorage.getItem('recipes') || '[]');

const recipeSlice = createSlice({
    name: 'recipes',
    initialState,
    reducers: {
        addRecipe(state, action: PayloadAction<Recipe>) {
            const newRecipe = { ...action.payload, id: state.length + 1 };
            state.push(newRecipe);
            localStorage.setItem('recipes', JSON.stringify(state));
        },
        deleteRecipe(state, action: PayloadAction<number>) {
            const newState = state.filter((_, index) => index !== action.payload);
            localStorage.setItem('recipes', JSON.stringify(newState));
            return newState;
        },
    }
});

export const { addRecipe, deleteRecipe } = recipeSlice.actions;
export default recipeSlice.reducer;