import { ReactNode } from 'react';

type color = 'orange' | 'grey' | 'blue' | 'green' | 'pink';
export interface Text {
  text: string;
  color: color;
}
export interface StyledText {
  children?: ReactNode;
  color?: color;
}

export interface StyledList {
  children?: ReactNode;
  color?: color;
}
export interface NormalList extends StyledList {
  text: string;
}

export interface UnorderedList extends StyledList {
  text: string;
}

export interface HeaderThree extends StyledText {
  text?: string;
}

export interface HeaderFour extends StyledText {
  text?: string;
}
export interface HeaderOne extends StyledText {
  text?: string;
}

export interface ShadowP extends StyledText {
  text: string;
}
