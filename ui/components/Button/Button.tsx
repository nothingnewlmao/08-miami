import React from "react";
import styled, { css } from "styled-components";
import { AllContentProps, ButtonProps, SizeProps, ViewProps } from "./types";
import { ITheme } from "../../themes";

export const sizes = {
    l: {
        padding: "20px",
        fontSize: "20px",
    },
    m: {
        padding: "15px",
        fontSize: "15px",
    },
    s: {
        padding: "10px",
        fontSize: "12px",
    },
};

const applySizes = ({ size = "m" }: SizeProps) => {
    return css`
        padding: ${sizes[size].padding};
        font-size: ${sizes[size].fontSize};
    })}
    `;
};

export const StyledButton = styled.button<ITheme & ViewProps>`
    position: relative;
    display: inline-flex;
    align-items: center;
    box-sizing: border-box;
    justify-content: center;
    border: none;
    cursor: pointer;
    border-radius: 10px;
    color: ${({ theme, view }) => theme.colors.buttons[view!].color};
    background: ${({ theme, view }) =>
        theme.colors.buttons[view!].backgroundColor};

    &:focus {
        outline: none;
    }
    ${
        // @ts-ignore
        applySizes
    }
`;

export const Button = React.forwardRef<
    HTMLButtonElement | HTMLAnchorElement,
    ButtonProps
>(function Button({ ...props }, ref) {
    const { children, ...rest } = props as AllContentProps;

    return (
        <StyledButton
            ref={ref as React.MutableRefObject<HTMLButtonElement>}
            view="primary"
            size="s"
            {...rest}
        >
            {children}
        </StyledButton>
    );
});
