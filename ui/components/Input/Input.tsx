import styled from 'styled-components';
import React from 'react';
import { ITheme } from 'UI/themes';
import { TStyledInput } from 'UIComponents/Input/types';

export const StyledInputWrapper = styled.div<ITheme>`
    margin: 32px 10px;

    & label,
    & input {
        display: block;
        width: 100%;
    }

    & label {
        color: ${({ theme }) => theme.colors.inputs.label};
        font-size: 11px;
        margin-bottom: 5px;
    }
`;

export const StyledInput = styled.input<ITheme>`
    font-size: 13px;
    padding-bottom: 7px;
    box-sizing: border-box;
    outline: none;
    background-image: none;
    background-color: transparent;
    box-shadow: none;
    border: none;
    border-bottom: 1px solid;
    border-bottom-color: ${({ theme }) => theme.colors.inputs.borderColor};

    &:focus,
    &:focus-visible {
        outline: none;
    }

    &:focus {
        border-bottom-color: ${({ theme }) =>
            theme.colors.inputs.borderHoverColor};
    }

    &::placeholder {
        font-weight: 300;
        color: ${({ theme }) => theme.colors.inputs.placeholderColor};
    }
`;

export const Input = React.forwardRef<HTMLInputElement, TStyledInput>(
    ({ ...props }, ref) => {
        const {
            children,
            placeholder = 'Введите значение...',
            label = '',
            name,
            ...rest
        } = props;

        return (
            <StyledInputWrapper>
                <label htmlFor={name}>{label}</label>
                <StyledInput
                    ref={ref as React.MutableRefObject<HTMLInputElement>}
                    placeholder={placeholder}
                    {...rest}
                >
                    {children}
                </StyledInput>
            </StyledInputWrapper>
        );
    },
);
