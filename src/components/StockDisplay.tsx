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
    return (
        <div>
            <div>Price - Max: {data.maxPrice} Min: {data.minPrice} Average: {data.averagePrice}</div>
            <div>Volume - Max: {data.maxVolume} Min: {data.minVolume}</div>
        </div>
    );
};