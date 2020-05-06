import React from 'react';
import App from './App';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

afterEach(() => {
    cleanup()
});
  
test('initial UI is rendered as expected', () => {
    const renderApp = () => render(<App />);
    let { getByTestId, queryByTestId } = renderApp();
    expect(getByTestId('app-title')).toHaveTextContent("Music Store");
    //expect(getByTestId('selectedColor').style.backgroundColor).toBe('black');
});