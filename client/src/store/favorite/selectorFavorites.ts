import { RootState } from "../store";

export const getFavoriteRecipes = (state: RootState) => state.favoriteRecipes.items;
export const getFavoritesLoading = (state: RootState) => state.favoriteRecipes.loading;
export const getFavoritesError = (state: RootState) => state.favoriteRecipes.error;