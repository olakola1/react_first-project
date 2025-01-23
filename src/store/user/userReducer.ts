import { createSlice} from '@reduxjs/toolkit';
import {fetchUserData} from "./thunk.ts";

export interface UserData {
    id: number;
    name: string;
    email: string;
}

interface UserState {
    data: UserData[];
    loading: boolean;
    error: string | null;
}

const initialState: UserState = {
    data: [],
    loading: false,
    error: null,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUserData.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchUserData.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchUserData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Failed to fetch';
            });
    },
});

export const userReducer = userSlice.reducer;
