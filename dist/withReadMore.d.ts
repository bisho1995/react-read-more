/**
 * @author Bisvarup Mukherjee
 * @date 23/05/2020
 */
import React from 'react';
/**
 * This is the HOC version of ReadMore component.
 * Usage: 'export default withReadMore(MyComponent)'
 *
 *
 * @param Component ReactNode - The component which you want to wrap around
 * @param readMoreProps Object - Entire prop list supported by the ReadMore component
 */
export default function withReadMore(Component: typeof React.Component, readMoreProps?: {}): (props: any[]) => JSX.Element;
