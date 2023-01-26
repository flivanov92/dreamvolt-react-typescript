import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import '@testing-library/dom';
import BackgroundImage from '..';

describe('image component', () => {
  it('should render the component', () => {
    const Testid = 'image';
    render(<BackgroundImage location="center" data-testid={Testid} />);
    expect(screen.getByTestId(Testid)).toBeInTheDocument();
  });
});
