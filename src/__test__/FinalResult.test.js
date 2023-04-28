import {render, screen} from '@testing-library/react';
import Result from "../components/FinalResult/result";

describe('Result', () => {
    it('renders score values for both teams', () => {
        render(<Result homeTeamScore={2} awayTeamScore={1} />);
        expect(screen.getByText(/2/i)).toBeVisible()
        expect(screen.getByText(/-/i)).toBeVisible()
        expect(screen.getByText(/1/i)).toBeVisible()
    });
});
