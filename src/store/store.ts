import { configureStore } from '@reduxjs/toolkit';
import {cardReducer} from "./card/cardReducer.ts";

const store = configureStore({
    reducer: {
        card: cardReducer,
    },
});

export default store;
