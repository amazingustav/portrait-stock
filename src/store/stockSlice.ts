import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

interface StockState {
    data: any;
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
}

const initialState: StockState = {
    data: null,
    status: 'idle'
};

const stockSlice = createSlice({
    name: 'stock',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchStockData.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.data = action.payload;
        });
    },
});

export const fetchStockData = createAsyncThunk('stock/fetchStockData', async (ticker: string) => {
    const response = await axios.get('https://localhost:3000/api/v1/stocks', {
        params: { ticker, start_date: '2023-01-01', end_date: '2023-12-31' }
    });

    return response.data;
});

export default stockSlice.reducer;