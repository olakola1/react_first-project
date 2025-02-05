import {createSlice} from '@reduxjs/toolkit';
import {fetchDesertData, fetchSoupData, fetchHotterData} from "./thunk.ts";


export interface DesertData {
    id: number;
    name: string;
    ingredients: string;
    time: string;
    image: string;
}

export interface SoupData  {
    id: number;
    name: string;
    ingredients: string;
    time: string;
    image: string;
}

export interface HotterData  {
    id: number;
    name: string;
    ingredients: string;
    time: string;
    image: string;
}

interface CardState {
    data: DesertData[];
    loading: boolean;
    error: string | null;
}

const initialState: CardState = {
    data: [],
    loading: false,
    error: null,
};

const cardSlice = createSlice({
    name: 'card',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchDesertData.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchDesertData.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchDesertData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Failed to fetch';
            })
            .addCase(fetchSoupData.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchSoupData.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchSoupData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Failed to fetch';
            })
            .addCase(fetchHotterData.pending, (state) => {
                state.loading = true;
            })

            .addCase(fetchHotterData.fulfilled, (state, action) => {
                    state.loading = false;
                    state.data = action.payload;
            })
            .addCase(fetchHotterData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Failed to fetch';
        });
    },
});

export const cardReducer = cardSlice.reducer;