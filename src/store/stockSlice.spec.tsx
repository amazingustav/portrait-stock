import { store } from './store';
import { fetchStockData } from './stockSlice';

test('should dispatches successfully and updates state when fetchStockData thunk', async () => {
    const ticker = 'AAPL';

    await store.dispatch(fetchStockData(ticker));

    const stockState = store.getState().stock;

    expect(stockState.status).toBe('succeeded');
    expect(stockState.data).not.toEqual([]);
});
