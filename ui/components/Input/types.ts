import React, { Dispatch, SetStateAction } from 'react';
import TObjectLiteral from 'types/ObjectLiteral';

interface IStyledInput extends React.InputHTMLAttributes<HTMLElement> {
    label?: string;
    setInputsValue?: Dispatch<SetStateAction<TObjectLiteral>>
}

export type TStyledInput = IStyledInput;
