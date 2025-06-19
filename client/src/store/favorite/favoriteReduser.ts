import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Recipe } from "../types";
import { fetchFavorites, addFavorite, removeFavorite } from "./thunk";

interface FavoriteState {
    items: Recipe[];
    loading: boolean;
    error: string | null;
}

const initialState: FavoriteState = {
    items: [],
    loading: false,
    error: null,
};

const favoriteRecipesSlice = createSlice({
    name: "favoriteRecipes",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            // Загрузка избранного
            .addCase(fetchFavorites.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchFavorites.fulfilled, (state, action: PayloadAction<Recipe[]>) => {
                state.loading = false;
                state.items = action.payload;
            })
            .addCase(fetchFavorites.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            })

            // Добавление в избранное
            .addCase(addFavorite.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(addFavorite.fulfilled, (state, action: PayloadAction<Recipe>) => {
                state.loading = false;
                if (!state.items.some(item => item.id === action.payload.id)) {
                    state.items.push(action.payload);
                }
            })
            .addCase(addFavorite.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            })
            .addCase(removeFavorite.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(removeFavorite.fulfilled, (state, action: PayloadAction<number>) => {
                state.loading = false;
                state.items = state.items.filter(item => item.id !== action.payload);

                // Дополнительно обновим статус в основном списке рецептов
                state.items.forEach(item => {
                    if (item.id === action.payload) {
                        item.isFavorite = false;
                    }
                });
            })
            .addCase(removeFavorite.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            });
    },
});

export default favoriteRecipesSlice.reducer;