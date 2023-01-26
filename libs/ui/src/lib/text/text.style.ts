import styled, { css } from 'styled-components';
import * as T from './text.type';

export const Text = styled.h1<T.StyledText>`
  font-size: 30px;
  color: ${({ color = 'grey', theme }) => theme.color[color]};
  line-height: 1.5;
  margin-left: 60px;
`;

export const NormalList = styled.li<T.StyledList>`
  color: ${({ color = 'myfav', theme }) => theme.color[color]};
  padding: 1rem;
  font-size: 24px;
  line-height: 30px;
  font-weight: 500px;
  box-sizing: border-box;
  font-family: Rubik;
  list-style-type: none;
  display: inline-block;
  margin-left: 50px;
`;

export const HeaderThree = styled.h3<T.HeaderThree>`
  color: ${({ color = 'orange', theme }) => theme.color[color]};
  margin-left: 60px;
  margin-top: -200px;
`;

export const HeaderFour = styled.h4<T.HeaderFour>`
  color: ${({ color = 'orange', theme }) => theme.color[color]};
  margin-left: 250px;
  margin-top: 1rem;
  /* text-align: center; */
`;

export const HeaderOne = styled.h1<T.StyledList>`
  color: ${({ color = 'black', theme }) => theme.color[color]};
  text-align: center;
  font-size: 36px;
  margin-top: 60px;
`;

export const ShadowParagraph = styled.p<T.ShadowP>`
  font-size: 20px;
  line-height: 30px;
  font-weight: 300;
  text-align: center;
  padding: 20px;
  margin: 40px 550px;
  box-shadow: 0 2px 6px rgb(0 0 0 / 25%);
  color: ${({ color = 'lightgrey', theme }) => theme.color[color]};
`;
