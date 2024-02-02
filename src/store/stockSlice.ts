import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

interface StockState {
    data: any;
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error?: string | null,
}

const initialState: StockState = {
    data: null,
    status: 'idle',
    error: null,
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
        builder.addCase(fetchStockData.rejected, (state, action) => {
            state.error = action.payload as string;
        });
    },
});

export const fetchStockData = createAsyncThunk('stock/fetchStockData', async (ticker: string, { rejectWithValue }) => {
    try {
        const response = await axios.get('http://localhost:3000/api/v1/stocks', {
            params: { ticker, start_date: '2023-01-01', end_date: '2023-12-31' }
        });

        const data = response.data.results;

        if (data.length === 0) {
            return rejectWithValue('No data found for this ticker');
        }

        const maxPrice = Math.max(...data.map((item: any) => item.high));
        const minPrice = Math.min(...data.map((item: any) => item.low));
        const averagePrice = data.reduce((acc: number, item: any) => acc + item.close, 0) / data.length;
        const maxVolume = Math.max(...data.map((item: any) => item.volume));
        const minVolume = Math.min(...data.map((item: any) => item.volume));

        return {
            maxPrice,
            minPrice,
            averagePrice,
            maxVolume,
            minVolume,
        };
    } catch (error) {
        return rejectWithValue(error);
    }
});

export default stockSlice.reducer;