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
        <div>
            <div>Price - Max: {maxPrice.toFixed(2)} Min: {minPrice.toFixed(2)} Average: {averagePrice.toFixed(2)}</div>
            <div>Volume - Max: {maxVolume} Min: {minVolume}</div>
        </div>
    );
};