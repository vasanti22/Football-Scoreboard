import { render, screen } from '@testing-library/react'
import Header from "../components/Header/header"

describe('Header', () => {
    beforeEach(() => {
        render(<Header />)
    })
    it('app title rendering correctly ', async () => {
        expect(screen.getByText(/World Cup Scoreboard/i)).toBeVisible()
    })
})
