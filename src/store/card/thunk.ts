import {createAsyncThunk} from "@reduxjs/toolkit";

export const fetchDesertData = createAsyncThunk('card/fetchDesertData', async () => {
    const response = await fetch('https://mocki.io/v1/adbc6692-6911-4da3-83c4-e5faf8b98386');
    return await response.json();
});

export const fetchSoupData = createAsyncThunk('card/fetchSoupData', async () => {
    const response = await fetch('https://mocki.io/v1/f1ed3857-fb83-480e-9638-13db71fb293e');
    return await response.json();
});

export const fetchHotterData = createAsyncThunk('card/fetchHotterData', async () => {
    const response = await fetch('https://mocki.io/v1/029fc615-4f91-49a6-bb57-d205a561f41c');
    return await response.json();
});
