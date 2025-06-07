import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

describe('App Component', () => {
  it('renders welcome message', () => {
    render(<App />);
    const headingElement = screen.getByText(/Welcome to React Webpack Boilerplate/i);
    expect(headingElement).toBeInTheDocument();
  });

  it('renders start editing message', () => {
    render(<App />);
    const paragraphElement = screen.getByText(
      /Start editing src\/App.tsx to build your application!/i
    );
    expect(paragraphElement).toBeInTheDocument();
  });
});
