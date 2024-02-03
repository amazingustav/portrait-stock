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
    const stockState = useAppSelector((state) => state.stock);

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
                {stockState.status === 'failed' ? (
                    <tr>
                        <td colSpan={4}>{stockState.error}</td>
                    </tr>
                ) : (
                    <>
                        <tr>
                            <td>Price</td>
                            <td>{maxPrice}</td>
                            <td>{minPrice}</td>
                            <td>{averagePrice}</td>
                        </tr>
                        <tr>
                            <td>Volume</td>
                            <td>{maxVolume}</td>
                            <td>{minVolume}</td>
                            <td/>
                        </tr>
                    </>
                )}
            </tbody>
        </table>
    );
};