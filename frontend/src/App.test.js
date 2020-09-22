import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders h1 default', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/React Frontend/i);
  expect(linkElement).toBeInTheDocument();
});
