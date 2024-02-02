import React, { useState } from "react";
import { useAppDispatch } from "../store/hooks";
import { fetchStockData } from "../store/stockSlice";

export const StockInput: React.FC = () => {
    const [ticker, setTicker] = useState<string>('');
    const dispatch = useAppDispatch();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(fetchStockData(ticker));
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={ticker} onChange={(e) => setTicker(e.target.value)} />
            <button type="submit">Search</button>
        </form>
    );
};
