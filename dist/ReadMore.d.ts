import React from 'react';
export interface Props {
    children: React.ReactNode;
    readMoreText?: React.ReactNode;
    lineHeight?: number;
    height?: number;
    unit?: string;
    readMoreClass?: string;
    readMoreClick?: (e: Event) => void;
    readMoreStyles?: {
        [x: string]: string;
    };
}
/**
 * todo: write docs, rewrite as class
 * children
 * readMoreText
 * lineHeight
 * height
 * unit
 * readMoreClass
 * readMoreClick
 * readMoreStyles
 * @param param0 props
 */
export default function ReadMore({ children, readMoreText, lineHeight, height, unit, readMoreClass, readMoreClick, readMoreStyles }: Props): {} | null | undefined;
