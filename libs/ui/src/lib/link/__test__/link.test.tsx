import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import * as S from '../link.style';

describe('link component', () => {
  it('should render ', () => {
    const dataTestid = 'link component';
    render(<S.LinkNormal data-testid={dataTestid} />);

    expect(screen.getByTestId(dataTestid)).toBeInTheDocument();
  });
});
