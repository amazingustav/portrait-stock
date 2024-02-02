import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from "react-redux";
import { store } from "../store/store";
import { StockInput } from "./StockInput";
import '@testing-library/jest-dom';

test('renders StockInput component', () => {
  render(
      <Provider store={store}>
        <StockInput />
      </Provider>
  );
  const inputElement = screen.getByRole('textbox');
  const buttonElement = screen.getByRole('button', { name: /search/i });

  expect(inputElement).toBeInTheDocument();
  expect(buttonElement).toBeInTheDocument();
});

test('allows users to enter a stock ticker', () => {
  render(
      <Provider store={store}>
        <StockInput />
      </Provider>
  );
  const inputElement = screen.getByRole('textbox') as HTMLInputElement;
  fireEvent.change(inputElement, { target: { value: 'AAPL' } });

  expect(inputElement.value).toBe('AAPL');
});