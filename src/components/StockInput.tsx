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
        <form onSubmit={handleSubmit} className="search-container">
            <label htmlFor="stockTicker" className="search-label">Enter a Stock Ticker</label>
            <input
                id="stockTicker"
                type="text"
                value={ticker}
                onChange={(e) => setTicker(e.target.value)}
                className="search-input"
                placeholder="AAPL"
            />
            <button type="submit" className="search-button">Search</button>
        </form>
    );
};
