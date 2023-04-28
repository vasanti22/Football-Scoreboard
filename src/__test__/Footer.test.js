import { render, screen } from '@testing-library/react';
import Footer from "../components/Footer/footer"

describe('Footer', () => {
  beforeEach(() => {
    render(<Footer />);
  })
  it('social links renders correctly', async () => {
    expect(screen.getByText(/Linkedin/i)).toBeVisible()
    expect(screen.getByText(/Github/i)).toBeVisible()
  });

  it('social links working correctly', async () => {
    expect(screen.getByText('Linkedin').closest('a')).toHaveAttribute('href', 'https://www.linkedin.com/in/vasanti-p-82484a64/');
    expect(screen.getByText('Github').closest('a')).toHaveAttribute('href', 'https://github.com/vasanti22');
  });
});