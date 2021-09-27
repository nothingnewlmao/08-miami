import React from 'react';
import * as Styled from './styled';

export const Table = React.forwardRef<HTMLTableElement, React.TableHTMLAttributes<HTMLElement>>(
    ({ ...props }, ref) => {
        const { children, ...rest } = props;

        return (
            <Styled.Table ref={ref as React.MutableRefObject<HTMLTableElement>} {...rest}>
                {children}
            </Styled.Table>
        );
    },
);
