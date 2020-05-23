/**
 * @author Bisvarup Mukherjee
 * @date 23/05/2020
 */
import React from 'react';
export interface Props {
    /** The component which you want to show an excerpt of. */
    children: React.ReactNode;
    /** The default value is '...read more' you may want to change this */
    readMoreText?: React.ReactNode;
    /** The line height size, default '1' */
    lineHeight?: number;
    /** The height of the excerpt to be shown initially, default '5' */
    height?: number;
    /** Unit of line height, by default it is 'rem' */
    unit?: string;
    /** Optionally add classes to the read more label, default is '' */
    readMoreClass?: string;
    /** Optionally do something on the click of read more, default noop */
    readMoreClick?: (e: Event) => void;
    /** Support for styles of read more, default {} */
    readMoreStyles?: {
        [x: string]: string;
    };
}
/**
 * Wrap any component with this component to show a read more text. On clicking
 * the read more text user will be able to see the full content. On full content
 * is shown it cannot be reverted back.
 *
 * There is also a withReadMore HOC wrapper along with this file. They do the same thing
 * and usage depends on the choice of the user
 */
export default function ReadMore({ children, readMoreText, lineHeight, height, unit, readMoreClass, readMoreClick, readMoreStyles }: Props): {} | null | undefined;
