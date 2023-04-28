import { getByAltText, render, screen } from '@testing-library/react';
import TeamView from "../components/Teams/teams";

describe('TeamView', () => {
    it('shows team name and flag', async () => {
        const { getByAltText } = await render(
            <TeamView teamData={
                {
                    countryCode: 'es',
                    name: 'Mexico'
                }
            } />
        );

        expect(screen.getByText(/Mexico/i)).toBeVisible()
        const flag = getByAltText('Mexico');
        expect(flag).toHaveAttribute('src', 'https://flagcdn.com/es.svg')
    });
});
