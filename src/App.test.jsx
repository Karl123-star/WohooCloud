import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the mobile cloud dashboard', () => {
  render(<App />);

  expect(screen.getByText(/keep your files safe/i)).toBeDefined();
  expect(screen.getByRole('button', { name: /upload/i })).toBeDefined();
});
