import React from "react";
import { buttonViews, sizes } from "./buttonViews";

interface ILinkProps {
    as?: string;
    href?: string;
}

export interface IAllContentProps extends ICustomProps {
    children?: React.ReactNode;
}

interface ICustomProps extends ISizeProps, IViewProps {}

export interface IButtonProps
    extends ILinkProps,
        ICustomProps,
        React.ButtonHTMLAttributes<HTMLElement> {}

export interface IViewProps<V = keyof typeof buttonViews.light> {
    view?: V;
}
export interface ISizeProps<S = keyof typeof sizes> {
    size?: S;
}
