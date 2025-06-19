import {createAsyncThunk} from "@reduxjs/toolkit";

export const fetchDesertData = createAsyncThunk('card/fetchDesertData', async () => {
    const response = await fetch('https://mocki.io/v1/509936c1-5ff8-4c65-bf75-443652aedb11');
    return await response.json();
});

export const fetchSoupData = createAsyncThunk('card/fetchSoupData', async () => {
    const response = await fetch('https://mocki.io/v1/e6b7419d-ae87-418c-b408-d3565498bf26');
    return await response.json();
});

export const fetchHotterData = createAsyncThunk('card/fetchHotterData', async () => {
    const response = await fetch('https://mocki.io/v1/857a0d30-3aa0-4c40-95e0-d49ca2c4d897');
    return await response.json();
});
