// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders DefiGlyph title', () => {
    render(<App />);
    const titleElement = screen.getByText(/DefiGlyph/i);
    expect(titleElement).toBeInTheDocument();
});
