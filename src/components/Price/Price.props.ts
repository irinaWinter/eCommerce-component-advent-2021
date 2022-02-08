import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface PriceProps extends DetailedHTMLProps<HTMLAttributes <HTMLParagraphElement>, HTMLParagraphElement> {
    size?: 'sm' | 'xs';
    children: ReactNode;
    appearance?: 'default' | 'accent'
}