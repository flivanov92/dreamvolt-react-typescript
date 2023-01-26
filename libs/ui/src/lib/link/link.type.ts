import { ReactNode } from 'react';

export interface Link {
  title?: string;
  children?: ReactNode;
  destination?: string;
  linkType?: 'normal' | 'email' | 'phone' | 'social' | 'image' | 'internal';
  color?: string;
  text?: string;
  to?: string;
}
