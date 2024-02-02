import React from 'react';

interface StockDataProps {
    data: {
        averagePrice: number;
        maxVolume: number;
        minVolume: number;
        maxPrice: number;
        minPrice: number;
    };
}

export const StockDisplay: React.FC<StockDataProps> = ({ data}) => {
    const { averagePrice, maxVolume, minVolume, maxPrice, minPrice } = data;

    return (
        <table className="stock-table">
            <thead>
            <tr>
                <th>Item</th>
                <th>Maximum</th>
                <th>Minimum</th>
                <th>Average</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>Price</td>
                <td>${maxPrice.toFixed(2)}</td>
                <td>${minPrice.toFixed(2)}</td>
                <td>${averagePrice.toFixed(2)}</td>
            </tr>
            <tr>
                <td>Volume</td>
                <td>{maxVolume.toLocaleString()}</td>
                <td>{minVolume.toLocaleString()}</td>
                <td/>
            </tr>
            </tbody>
        </table>
    );
};