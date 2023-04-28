import { render, screen } from '@testing-library/react'
import ScoresGrid from "../components/ScoresGrid/scoresgrid"

describe('ScoresGrid', () => {
    it('renders all scoreboards', async () => {
        render(<ScoresGrid />)

        expect(await screen.findByText(/Games are about to start in 3 seconds./i)).toBeVisible()
        expect(await screen.findByText(/Games are about to start in 2 seconds./i)).toBeVisible()
        expect(await screen.findByText(/Games are about to start in 1 seconds./i)).toBeVisible()
        //expect(await screen.findByText(/Argentina/i)).toBeVisible()
        expect(await screen.findByText(/Australia/i)).toBeVisible()
        expect(await screen.findByText(/Spain/i)).toBeVisible()
        expect(await screen.findByText(/Brazil/i)).toBeVisible()
    })
})
