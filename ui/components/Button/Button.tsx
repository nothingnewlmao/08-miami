import React from "react";
import styled from "styled-components";
import { AllContentProps, ButtonProps, SizeProps, ViewProps } from "./types";
import { ITheme } from "../../themes";
import { sizes } from "./buttonViews";

export const StyledButton = styled.button<ITheme & ViewProps & SizeProps>`
    position: relative;
    display: inline-flex;
    align-items: center;
    box-sizing: border-box;
    justify-content: center;
    border: none;
    cursor: pointer;
    border-radius: 10px;
    color: ${({ theme, view = "primary" }) => theme.colors.buttons[view].color};
    background: ${({ theme, view = "primary" }) =>
        theme.colors.buttons[view].backgroundColor};

    &:focus {
        outline: none;
    }

    padding: ${({ size = "s" }) => sizes[size].padding};
    font-size: ${({ size = "s" }) => sizes[size].fontSize};
`;

export const Button = React.forwardRef<
    HTMLButtonElement | HTMLAnchorElement,
    ButtonProps
>(function Button({ ...props }, ref) {
    const { children, ...rest } = props as AllContentProps;

    return (
        <StyledButton
            ref={ref as React.MutableRefObject<HTMLButtonElement>}
            {...rest}
        >
            {children}
        </StyledButton>
    );
});
