import React from "react";
import { buttonViews, sizes } from "./buttonViews";

interface LinkProps {
    as?: string;
    href?: string;
}

export interface AllContentProps extends CustomProps {
    children?: React.ReactNode;
}

interface CustomProps extends SizeProps, ViewProps {}

export interface ButtonProps
    extends LinkProps,
        CustomProps,
        React.ButtonHTMLAttributes<HTMLElement> {}

export interface ViewProps<V = keyof typeof buttonViews.light> {
    view?: V;
}
export interface SizeProps<S = keyof typeof sizes> {
    size?: S;
}
