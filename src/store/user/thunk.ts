import {createAsyncThunk} from "@reduxjs/toolkit";

export const fetchUserData = createAsyncThunk('users/fetchUserData', async () => {
    const response = await fetch('https://mocki.io/v1/c8b5635a-90f1-4d8e-b5a9-a77a79fa4c98');
    return await response.json();
});