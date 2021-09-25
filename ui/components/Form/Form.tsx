import styled from 'styled-components';
import React from 'react';
import { ITheme } from 'UI/themes';
import { TStyledForm } from 'UIComponents/Form/types';

export const StyledForm = styled.form<ITheme>`
    padding: 30px 50px;
    -webkit-border-radius: 12px;
    -moz-border-radius: 12px;
    border-radius: 12px;
    box-sizing: border-box;
    max-width: 340px;
    margin: auto;
`;

export const Form = React.forwardRef<HTMLFormElement, TStyledForm>(
    (props , ref) => {
        const {
            children,
            ...rest
        } = props;

        return (
            <StyledForm
                ref={ref}
                {...rest}
                >
                {children}
            </StyledForm>
        );
    }
);
