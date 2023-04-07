import { render, screen } from '@testing-library/react';
import Home from '../pages/index';
import React from 'react';

describe('Home', () => {
  it('renders the heading', () => {
    render(<Home />);
    const headingElement = screen.getByText(/Homework/i);
    expect(headingElement).toBeInTheDocument();
  });
});
