import { render, screen } from '@testing-library/react';


import MessageBoard from "../components/Messages";

describe('MessageBoard', () => {
    it('renders messages', async () => {
        render(<MessageBoard message={'Live Matches'}/>);

        expect(await screen.findByText(/LIVE MATCHES/i)).toBeVisible()
    });
});
