import React from 'react';
import { StockDisplay } from './StockDisplay';
import { render, screen } from '@testing-library/react';
import { Provider } from "react-redux";
import { store } from "../store/store";
import '@testing-library/jest-dom';

const mockData = {
    data: {
        averagePrice: 150,
        maxVolume: 1000,
        minVolume: 500,
        maxPrice: 170,
        minPrice: 130,
    }
};

test('renders StockDisplay component with data', () => {
    render(
        <Provider store={store}>
            <StockDisplay {...mockData} />
        </Provider>
    );
    expect(screen.getByText(/price/i)).toBeInTheDocument();
    expect(screen.getByText(/volume/i)).toBeInTheDocument();
});
