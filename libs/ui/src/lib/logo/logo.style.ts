import styled from 'styled-components';
import * as T from './logo.type';

const sizeMap = {
  small: '150px',
  medium: '200px',
  big: '350px',
};

export const Logo = styled.div<T.Logo>`
  background-image: url(${({ imagePath }) => imagePath});
  width: ${({ size }) => sizeMap[size]};
  height: ${({ size }) => sizeMap[size]};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  margin: 0 auto;
`;
