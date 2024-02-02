import React from 'react';
import { StockInput } from "./components/StockInput";
import { StockDisplay } from "./components/StockDisplay";
import { useAppSelector } from './store/hooks';

const App: React.FC = () => {
  const stockData = useAppSelector((state) => state.stock.data);

  return (
    <div className="App">
      <StockInput />
      {stockData && <StockDisplay data={stockData}/>}
    </div>
  );
};

export default App;
