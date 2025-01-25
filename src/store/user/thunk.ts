import {createAsyncThunk} from "@reduxjs/toolkit";

export const fetchUserData = createAsyncThunk('users/fetchUserData', async () => {
    const response = await fetch('https://mocki.io/v1/febb946e-eeb0-4d2d-bb21-da0ef18e8323');
    return await response.json();
});