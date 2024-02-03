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
            state.status = 'failed';
            state.error = action.payload as string;
        });
    },
});

export const fetchStockData = createAsyncThunk('stock/fetchStockData', async (ticker: string, { rejectWithValue }) => {
    try {
        const response = await axios.get('http://localhost:3000/api/v1/stocks', {
            params: { ticker, start_date: '2023-01-01', end_date: '2023-12-31' }
        });

        if (response.status >= 400) {
            return rejectWithValue('No data found for this ticker');
        }

        return {
            averagePrice: response.data.average_price,
            maxVolume: response.data.max_volume,
            minVolume: response.data.min_volume,
            maxPrice: response.data.max_price,
            minPrice: response.data.min_price
        };
    } catch (error) {
        if (axios.isAxiosError(error) && error.response && error.response.status >= 400) {
            return rejectWithValue(error.response.data.error);
        }

        return rejectWithValue(error);
    }
});

export default stockSlice.reducer;