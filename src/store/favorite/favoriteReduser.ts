import { Recipe } from "../catalog/recipeReduser.ts";
import { DesertData } from "../card/cardReducer.ts";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type FavoriteRecipe = Recipe | DesertData;

const loadFavoritesFromLocalStorage = (): FavoriteRecipe[] => {
    const favorites = localStorage.getItem('favoriteRecipes');
    return favorites ? JSON.parse(favorites) : [];
};

const initialState: FavoriteRecipe[] = loadFavoritesFromLocalStorage();

const favoriteRecipesSlice = createSlice({
    name: 'favoriteRecipes',
    initialState,
    reducers: {
        addToFavorites(state, action: PayloadAction<FavoriteRecipe>) {
            const isAlreadyInFavorites = state.some(
                (recipe) => recipe.id === action.payload.id
            );
            if (!isAlreadyInFavorites) {
                state.push(action.payload);
                localStorage.setItem('favoriteRecipes', JSON.stringify(state));
            } else {
                alert('Рецепт уже добавлен!');
            }
        },
        removeFromFavorites(state, action: PayloadAction<number>) {
            const newState = state.filter((recipe) => recipe.id !== action.payload);
            localStorage.setItem('favoriteRecipes', JSON.stringify(newState));
            return newState;
        },
    },
});

export const { addToFavorites, removeFromFavorites } = favoriteRecipesSlice.actions;
export default favoriteRecipesSlice.reducer;