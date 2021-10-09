import React from 'react';

interface IStyledInput extends React.InputHTMLAttributes<HTMLElement> {
    label?: string;
    errorText?: string | null;
}

export type TStyledInput = IStyledInput;
