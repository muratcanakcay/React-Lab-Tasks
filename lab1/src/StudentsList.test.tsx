import React from 'react';
import { render, screen } from '@testing-library/react';
import MyApp from './MyApp';

test('renders list of students text', () => {
  render(<MyApp />);
  const linkElement = screen.getByText(/List of Students/i);
  expect(linkElement).toBeInTheDocument();
});
