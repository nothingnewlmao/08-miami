import styled from 'styled-components';
import React from 'react';
import { ITheme } from '../../themes';

export const StyledInput = styled.input<ITheme>`
    padding: 10px;
    margin: 5px;
    border: ${({ theme }) => theme.colors.inputs.border};
    border-radius: 5px;
    outline: none;
`;

export const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLElement>>(
    ({ ...props }, ref) => {
        const { children, ...rest } = props;

        return (
            <StyledInput ref={ref as React.MutableRefObject<HTMLInputElement>} {...rest}>
                {children}
            </StyledInput>
        );
    },
);
