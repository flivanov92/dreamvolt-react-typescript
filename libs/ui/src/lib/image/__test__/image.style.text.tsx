import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';

import * as S from '../image.style';

describe('image component', () => {
  it('should render the component', () => {
    const dataTestid = 'image-test-component';
    render(
      <S.BackgroundImage
        data-testid={dataTestid}
        myPath="image"
        location="center"
      />
    );

    expect(screen.getByTestId(dataTestid)).toBeInTheDocument();
  });

  it('should render the component', () => {
    const dataTestid = 'image-test-component';
    render(
      <S.PurpleBackground
        data-testid={dataTestid}
        myPath="image"
        location="center"
      />
    );

    expect(screen.getByTestId(dataTestid)).toBeInTheDocument();
  });

  it('should render the component', () => {
    const dataTestid = 'image-test-component';
    render(
      <S.PhoneImage data-testid={dataTestid} myPath="image" location="center" />
    );

    expect(screen.getByTestId(dataTestid)).toBeInTheDocument();
  });

  it('should render the component', () => {
    const dataTestid = 'image-test-component';
    render(
      <S.EvPhoneImage
        data-testid={dataTestid}
        myPath="image"
        location="center"
      />
    );

    expect(screen.getByTestId(dataTestid)).toBeInTheDocument();
  });

  it('should render the component', () => {
    const dataTestid = 'image-test-component';
    render(
      <S.Button data-testid={dataTestid} myPath="image" location="center" />
    );

    expect(screen.getByTestId(dataTestid)).toHaveStyleRule('width', '169px');
  });

  it('should render the component', () => {
    const dataTestid = 'image-test-component';
    render(
      <S.Button
        data-testid={dataTestid}
        myPath="btn-apple.png"
        location="center"
      />
    );

    expect(screen.getByTestId(dataTestid)).toHaveStyleRule('width', '151px');
  });

  it('should render the component', () => {
    const dataTestid = 'image-test-component';
    render(
      <S.EvButton
        data-testid={dataTestid}
        myPath="btn-apple.png"
        location="center"
      />
    );

    expect(screen.getByTestId(dataTestid)).toHaveStyleRule(
      'background-image',
      `url('/image/btn-apple.png')`
    );
  });
});
