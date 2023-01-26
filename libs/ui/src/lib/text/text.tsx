import { Children } from 'react';
import * as S from './text.style';
import * as T from './text.type';

const Text = ({ text, color }: T.Text) => {
  return <S.Text color={color}>{text}</S.Text>;
};

const NormalList = ({ text, color }: T.NormalList) => {
  return <S.NormalList color={color}>{text}</S.NormalList>;
};

const HeaderThree = ({ text, color }: T.HeaderThree) => {
  return <S.HeaderThree color={color}>{text} </S.HeaderThree>;
};

const HeaderFour = ({ text, color }: T.HeaderFour) => {
  return <S.HeaderFour color={color}>{text}</S.HeaderFour>;
};
const HeaderO = ({ text, color }: T.HeaderOne) => {
  return <S.HeaderOne color={color}>{text}</S.HeaderOne>;
};

const Pshadow = ({ text, children }: T.ShadowP) => {
  return <S.ShadowParagraph text={text}>{children}</S.ShadowParagraph>;
};

Text.defaultProps = {
  text: 'mytext',
  color: 'onlygrey',
};

NormalList.defaultProps = {
  text: 'newtext',
  color: 'specific colours',
};
HeaderThree.defaultProps = {
  text: 'newtext',
  color: 'specific colours',
};
HeaderFour.defaultProps = {
  text: 'newtext',
  color: 'specific colours',
};
Pshadow.defaultProps = {
  text: 'newtext',
  color: 'specific colours',
};
HeaderO.defaultProps = {
  text: 'newtext',
  color: 'specific colours',
};

export default Text;
