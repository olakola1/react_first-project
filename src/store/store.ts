import { configureStore } from '@reduxjs/toolkit';
import {cardReducer} from "./card/cardReducer.ts";
import recipeReducer  from './catalog/recipeReduser.ts';
import favoriteRecipesReducer from "./favorite/favoriteReduser.ts";

const store = configureStore({
    reducer: {
        card: cardReducer,
        recipe: recipeReducer,
        favoriteRecipes: favoriteRecipesReducer,
    },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
