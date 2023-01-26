import styled, { css } from 'styled-components';
import * as T from './link.type';

const common = css`
  &:hover {
    color: rgb(18, 190, 255);
  }
`;

const decorationNone = css`
  text-decoration: none;
  color: #17252a;
`;

export const LinkNormal = styled.a<T.Link>`
  /* ${common} */
  ${decorationNone}
  position: relative;
  padding: 10px 20px;
  font-size: 15px;
  font-weight: 500;
  transition: 250ms;
  text-transform: uppercase;
  width: auto;
  text-align: center;
  /* border-bottom: 1px solid transparent; */
  &:hover {
    /* border-bottom: 1px solid rgb(18, 190, 255); */
    color: #12beff;
    &:after {
      background-color: #12beff;
      left: 10%;
      width: 80%;
    }
  }
  /* &:hover &:after {
    background-color: #12beff;
    left: 18px;
    width: calc(15%-40px);
  } */
  &:after {
    transition: 250ms;
    content: '';
    position: absolute;
    top: 35px;
    background: white;
    width: 50%;
    height: 3px;
    left: 20px;
  }
`;

export const LinkContact = styled.a<T.Link>`
  ${common}
  ${decorationNone}
`;

export const Alink = styled.a<T.Link>`
  text-decoration: none;
  font-weight: 400;
`;
