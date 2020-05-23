import React from 'react';
interface Props {
    children: React.ReactNode;
    readMoreText?: React.ReactNode;
    lineHeight?: number;
    height?: number;
    unit?: string;
    readMoreClass?: string;
    readMoreClick?: (e: Event) => void;
}
declare const ReadMore: ({ children, readMoreText, lineHeight, height, unit, readMoreClass, readMoreClick }: Props) => {} | null | undefined;
export default ReadMore;
