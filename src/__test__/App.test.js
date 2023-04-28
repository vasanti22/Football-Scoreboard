import { render, screen } from '@testing-library/react';
import React from 'react';
import App from '../app';

describe('App', () => {
    it('should contains the heading 1', () => {
    render(<App/>);
        const heading = screen.getByText(/World Cup Scoreboard/i);
        expect(heading).toBeInTheDocument()
    });
});