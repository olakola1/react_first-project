import { configureStore } from '@reduxjs/toolkit';
import {cardReducer} from "./card/cardReducer.ts";

const store = configureStore({
    reducer: {
        user: cardReducer,
    },
});

export default store;
