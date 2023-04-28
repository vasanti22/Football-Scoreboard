import { render, screen } from '@testing-library/react';
import GameStatus from "../components/GameProgress/games"

describe('GameStatus', () => {
    it('renders the game status correctly ', async () => {
        render(<GameStatus status={'Started'}/>);
        expect(screen.getByText(/Started/i)).toBeVisible()
    });
});
