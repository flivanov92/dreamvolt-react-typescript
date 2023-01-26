import { ReactNode } from 'react';

export interface LinkNav {
  title: string;
  children?: ReactNode;
  destination: string;
  linkType: 'normal' | 'email' | 'phone';
  color?: string;
  text?: string;
}

export interface TopNav {
  linkList: LinkNav[];
}
