import React from 'react';
import {useAppSelector} from "../store/hooks";

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
    const error = useAppSelector((state) => state.stock.error);
    const { averagePrice, maxVolume, minVolume, maxPrice, minPrice } = data;

    console.log(error)

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
                {error ? (
                    <tr>
                        <td colSpan={4}>{error}</td>
                    </tr>
                ) : (
                    <>
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
                    </>
                )}
            </tbody>
        </table>
    );
};