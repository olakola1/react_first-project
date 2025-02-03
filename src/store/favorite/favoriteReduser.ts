import { Recipe} from "../../interface/interface.tsx";
import { CardData} from "../card/cardReducer.ts";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

type FavoriteRecipe = Recipe | CardData;

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