import { Recipe} from "../catalog/recipeReduser.ts";
import { DesertData} from "../card/cardReducer.ts";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

type FavoriteRecipe = Recipe | DesertData;

const initialState: FavoriteRecipe[] = [];

const favoriteRecipesSlice = createSlice({
    name: 'favoriteRecipes',
    initialState,
    reducers: {
        addToFavorites(state, action: PayloadAction<FavoriteRecipe>) {
            state.push(action.payload);
        },
        removeFromFavorites(state, action: PayloadAction<number>) {
            state.splice(action.payload, 1);
        },
    },
});

export const { addToFavorites, removeFromFavorites } = favoriteRecipesSlice.actions;
export default favoriteRecipesSlice.reducer;